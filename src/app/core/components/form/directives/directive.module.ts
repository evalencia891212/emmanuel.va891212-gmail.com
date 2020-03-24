import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldDirective } from './dinamic-field/dynamic-field.directive';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    DynamicFieldDirective
  ]
})
export class DirectiveModule { }
