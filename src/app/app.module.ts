import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesButtonComponent } from './core/components/form/components/mes-button/mes-button.component';
import { TestFormComponent } from './dinamic-form/test-form/test-form.component';
import { FormModule } from './core/components/form/form.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ModalComponent } from './core/components/modal/modal.component';
import { AlertModalComponent } from './core/components/modal/alert-modal/alert-modal.component';
import { ModalModule } from './core/components/modal/modal.module';
import { DynamicFieldDirective } from './core/components/form/directives/dinamic-field/dynamic-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    MesButtonComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ],
  providers: [],
  entryComponents: [
    AlertModalComponent
  ],
  bootstrap: [
    AppComponent,
    ModalComponent
  ],
  exports: [ReactiveFormsModule]
})
export class AppModule { }
