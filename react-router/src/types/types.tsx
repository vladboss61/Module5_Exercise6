export type MyFormControl = {
    formBasicEmail: { value: string };
    formBasicPassword: { value: string };
    formBasicCheckbox: { checked: boolean };
  }
  
export type MyFormData = {
  email: string;
  password: string;
  checkbox?: boolean;
}