import { Component } from '@angular/core';
import { FieldConfig } from './core/components/form/models/field-config.interface';
import { FormTypes } from './core/components/form/config/form-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dinamicFormModal';

  inputForm: FieldConfig[];

  ngOnInit(){
    this.inputForm = [
      {
        type: FormTypes.button,
        name:'Button',
        label:'El boton'
      }
    ]

    

  }

  


}
