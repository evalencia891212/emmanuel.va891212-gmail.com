import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDirective } from './components/form/directives/dinamic-field/dynamic-field.directive';
import { MesModalContainerComponent } from './components/form/containers/mes-modal-container/mes-modal-container.component';
import { FormInputComponent } from './components/form/components/form-input/form-input.component';
import { FormErrorDirective } from './components/form/directives/formError/form-error.directive';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations:[
    DynamicFieldDirective,
    MesModalContainerComponent,
    FormInputComponent,
    FormErrorDirective
  ],exports: [
    MesModalContainerComponent
  ],
  entryComponents: [
    FormInputComponent
  ]
})
export class CoreModule { }
