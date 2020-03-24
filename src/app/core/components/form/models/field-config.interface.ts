import { FormTypes } from '../config/form-config';
import { Validation } from './validation.interface';
import { Radio } from './radio.interface';
import { Check } from './check.interface';

export interface FieldConfig {
  type?: FormTypes;
  name: string;
  label?: string;
  placeholder?: string;
  data?: any;
  functions?: {
    setValue: (item) => string;
    setLabel: (item) => string;
    filter: (item) => string;
  };
  catalogoFilter?: {
    key: string;
    property: string;
  };
  disabled?: boolean;
  inputType?: 'text' | 'number' | 'email' | 'date';
  value?: string;
  maxValue?: number;
  options?: string[];
  children?: FieldConfig[];
  validation?: Validation[];
  upperCase?: boolean;
  tooltip?: {
    img: string;
    text: string;
  };
  radioButtons?: Radio[];
  checkedBox?: boolean;
  specialChart?: boolean;
  onlyLetters?: boolean;
  readonly?: boolean;
  valueSelect?: string;
  optionShow?: string;
  textTooltip?: any;
  restrict?: string;
  checkButtons?: Check[];
}
