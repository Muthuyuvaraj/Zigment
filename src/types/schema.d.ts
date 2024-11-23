export interface ValidationRule {
    pattern?: string;
    message?: string;
  }
  
  export interface Option {
    value: string;
    label: string;
  }
  
  export interface FieldSchema {
    id: string;
    type: string;
    label: string;
    required: boolean;
    placeholder?: string;
    validation?: ValidationRule;
    options?: Option[];
  }
  
  export interface FormSchema {
    formTitle: string;
    formDescription: string;
    fields: FieldSchema[];
  }
  