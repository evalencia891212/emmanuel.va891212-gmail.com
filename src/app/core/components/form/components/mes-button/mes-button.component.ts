import { Component, OnInit } from '@angular/core';
import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mes-button',
  templateUrl: './mes-button.component.html',
  styleUrls: ['./mes-button.component.css']
})
export class MesButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
