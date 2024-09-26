import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface SelectFieldProps {
  list: { value: any; label: string }[];
  label: string;
  name: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  list,
  label,
  name,
}) => {
  const { control } = useFormContext(); 

  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue="" 
        render={({ field }) => (
          <Select
            {...field}
            labelId={`${name}-label`}
            id={`${name}-select`}
            label={label}
          >
            {list?.map((item) => (
              <MenuItem key={item?.value} value={item?.value}>
                {item?.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};
