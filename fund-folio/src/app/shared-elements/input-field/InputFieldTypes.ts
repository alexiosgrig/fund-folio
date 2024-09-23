import { TextFieldPropsColorOverrides, TextFieldVariants } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';

type ColorType = OverridableStringUnion<
  'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning',
  TextFieldPropsColorOverrides
>;

export interface InputFieldProps {
  id: string;
  label: string;
  name: string;
  variant: TextFieldVariants;
  color: ColorType;
  disabled?: boolean;
  errors?: any;
  required?: boolean;
  autoFocus?: boolean;
}
