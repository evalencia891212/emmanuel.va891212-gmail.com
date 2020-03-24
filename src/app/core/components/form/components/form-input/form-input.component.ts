import { Component, OnInit } from '@angular/core';
import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements Field,OnInit {
  public config: FieldConfig;
  public group: FormGroup;
  private formControl: FormControl;

  public fieldValidity = false;

  ngOnInit(): void {
    const formControlName = this.config.name;
    this.formControl = this.group.get(formControlName) as FormControl;
    this.formControl.setValue(this.config.value ? this.config.value : '');
    this.formControl.valueChanges.subscribe(() => {
    this.fieldValidity = this.formControl.invalid;
  });
  }

  validField(): boolean {
    return this.fieldValidity;
  }

  editField(editable: boolean): void {
    if (editable) {
      this.config.disabled = false;
    }
  }
}
