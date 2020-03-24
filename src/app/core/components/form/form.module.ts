import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import {MesButtonComponent} from './components/mes-button/mes-button.component';
import { MesModalContainerComponent } from './containers/mes-modal-container/mes-modal-container.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { DynamicFieldDirective } from './directives/dinamic-field/dynamic-field.directive';
import { FormErrorDirective } from './directives/formError/form-error.directive';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    MesModalContainerComponent,
    FormInputComponent,
    DynamicFieldDirective,
    FormErrorDirective
  ],
  exports: [
    MesModalContainerComponent,
    DynamicFieldDirective,

  ],
  entryComponents: [
    FormInputComponent
  ]
})

export class FormModule { }
