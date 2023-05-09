export interface ITextInput {
  id: string;
  name: string;
  value: string | number;
  labelName: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
