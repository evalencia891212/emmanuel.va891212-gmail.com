
import {Type} from '@angular/core';
import { Field } from '../models/field.interface';

import {MesButtonComponent} from '../components/mes-button/mes-button.component';
import {FormInputComponent} from '../components/form-input/form-input.component';



export const COMPONENTS: {[type: string]: Type<Field>} = {
    button:MesButtonComponent,
    input:FormInputComponent
};

export enum FormTypes {
    button = 'button',
    input = 'input'
  }

