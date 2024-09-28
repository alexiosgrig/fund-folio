import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

interface DatePickerSharedProps {
  setSelectedDate: any
}

export const DatePickerShared: React.FC<DatePickerSharedProps> = ({
  setSelectedDate,
}) => {
  const handleDateChange = (value) => {
    const formatedDate = dayjs(value).format('YYYY-MM-DD');
    setSelectedDate(formatedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          autoFocus
          label="Acceptance Date"
          onChange={handleDateChange}
          formatDensity="dense"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
