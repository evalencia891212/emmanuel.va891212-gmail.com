import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { Type } from '@angular/core';
import { FieldConfig } from '../form/models/field-config.interface';

export interface Modal {
    buttons: Array<{
        callback: (close: () => void) => void;
        buttonText: string;
        class?: string;
    }>;
    config?:FieldConfig[],
    title: string;
    message: string;
    class?: string;
    display: boolean;
    entryComponent: Type<AlertModalComponent>;
}

export interface ModalResponse {
    buttons: Array<{
        callback: string;
        buttonText: string;
    }>;
    title: string;
    message: string;
}
