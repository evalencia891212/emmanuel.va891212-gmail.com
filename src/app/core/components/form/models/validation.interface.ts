import { ValidatorFn } from '@angular/forms';

export interface Validation {
    validator: ValidatorFn;
    type: string;
    label: string;
}
