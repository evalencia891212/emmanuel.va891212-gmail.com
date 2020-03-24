import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormModule} from '../core/components/form/form.module';
import {TestFormComponent} from './test-form/test-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TestFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DinamicFormModule { }
