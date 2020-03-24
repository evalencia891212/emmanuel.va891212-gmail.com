import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ModalComponent } from './modal.component';
import { DynamicFieldDirective } from '../form/directives/dinamic-field/dynamic-field.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MesModalContainerComponent } from '../form/containers/mes-modal-container/mes-modal-container.component';
import { FormModule } from '../form/form.module';



@NgModule({
  declarations: [
    AlertModalComponent,
    ModalComponent
  ],
  exports: [
    AlertModalComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModalModule { }
