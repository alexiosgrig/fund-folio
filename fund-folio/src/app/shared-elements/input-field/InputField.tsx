import React from 'react';
import { InputFieldProps } from './InputFieldTypes';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  variant,
  name,
  disabled,
  color,
  required,
  autoFocus,
  errors,
}) => {
  const { control } = useFormContext<any>();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          id={id}
          label={label}
          variant={variant}
          disabled={disabled}
          color={color}
          error={!!errors}
          helperText={errors}
          required={required}
          autoFocus={autoFocus}
          fullWidth
        />
      )}
    />
  );
};
