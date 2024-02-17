type Booleanish = boolean | 'true' | 'false';
type Numberish = number | string;
type InputTypeHTMLAttribute =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | (string & NonNullable<unknown>);

export interface InputHTMLAttributes {
  accept?: string;
  alt?: string;
  autocomplete?: string;
  autofocus?: Booleanish;
  capture?: boolean | 'user' | 'environment';
  checked?: Booleanish | any[] | Set<any>;
  crossorigin?: string;
  disabled?: Booleanish;
  enterKeyHint?:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send';
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formnovalidate?: Booleanish;
  formtarget?: string;
  height?: Numberish;
  indeterminate?: boolean;
  list?: string;
  max?: Numberish;
  maxlength?: Numberish;
  min?: Numberish;
  minlength?: Numberish;
  multiple?: Booleanish;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readonly?: Booleanish;
  required?: Booleanish;
  size?: Numberish;
  src?: string;
  step?: Numberish;
  type?: InputTypeHTMLAttribute;
  value?: any;
  width?: Numberish;
}

// copied from Vue
