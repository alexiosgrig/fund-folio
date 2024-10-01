import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { selectNotificationsState } from 'src/app/slices/notificationsSlice';
import { useAppSelector } from 'src/app/store/hooks';

export const SnackbarShared = () => {
  const notificationData = useAppSelector(selectNotificationsState);
  const { open, message, severity } = notificationData;
  return (
    <Snackbar open={open} autoHideDuration={1}>
      <Alert severity={severity} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
