import { FieldProps } from '@Components/common/ui/layout/field/field.type';
export interface FieldHookProps extends FieldProps {
  name: string,
  label?: string
  isOptional?: boolean
  messageError?: string
}