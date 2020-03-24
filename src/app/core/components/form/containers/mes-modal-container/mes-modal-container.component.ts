import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup, FormBuilder, ValidatorFn, FormControl } from '@angular/forms';
import { Validation } from '../../models/validation.interface';


@Component({
  exportAs: 'MesModalContainer',
  selector: 'app-mes-modal-container',
  templateUrl: './mes-modal-container.component.html',
  styleUrls: ['./mes-modal-container.component.css']
})
export class MesModalContainerComponent implements OnChanges, OnInit {

  @Input() config: FieldConfig[] = [];

  // tslint:disable-next-line: no-output-native
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  get controls() { return this.config.filter(({ type }) => type !== 'button'); }
  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    debugger;
    this.form = this.createFormGroup();
  }

  ngOnChanges() {
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const configControls = this.controls.map((item) => item.name);

      controls
        .filter((control) => !configControls.includes(control))
        .forEach((control) => this.form.removeControl(control));

      configControls
        .filter((control) => !controls.includes(control))
        .forEach((name) => {
          const config = this.config.find((control) => control.name === name);
          this.form.addControl(name, this.createFormControl(config));
        });

    }
  }

  createFormGroup() {
    const formGroup = this.fb.group({});

    this.controls.forEach((fieldConfig: FieldConfig) => {
      const controlName = fieldConfig.name;
      let control: FormControl | FormGroup;

      control = fieldConfig.children
        ? this.createChildFormGroup(fieldConfig)
        : this.createFormControl(fieldConfig);

      formGroup.addControl(controlName, control);
    });
    return formGroup;
  }

  createChildFormGroup(fieldConfig: FieldConfig) {
    const formGroup = this.fb.group({});
    const childrens: FieldConfig[] = fieldConfig.children;

    childrens.forEach(children => {
      const controlName = children.name;
      const validatorsFn = this.createValidatorsFn(children.validation);
      const control = this.fb.control('', validatorsFn);

      formGroup.addControl(controlName, control);
    });

    return formGroup;
  }

  createFormControl(config: FieldConfig): FormControl {
    // const state: any = {};
    const { validation } = config;

    const validationsFn = this.createValidatorsFn(validation);
    return this.fb.control('', validationsFn);
  }

  createValidatorsFn(validations: Validation[]): ValidatorFn[] {
    return validations.map((v: Validation) => v.validator);
  }

  setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }

    this.config = this.config.map((item) => {
      if (item.name === name) {
        item.disabled = disable;
      }
      return item;
    });
  }

  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value, { emitEvent: true });
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }


}
