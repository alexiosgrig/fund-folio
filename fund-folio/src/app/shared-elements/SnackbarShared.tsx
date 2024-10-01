import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import {
  clearNotificationsData,
  selectNotificationsState,
} from '../slices/notificationsSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export const SnackbarShared = () => {
  const dispatch = useAppDispatch();
  const notificationData = useAppSelector(selectNotificationsState);
  const { open, message, severity } = notificationData;
  setTimeout(() => {
    dispatch(clearNotificationsData());
  }, 2000);
  return (
    <Snackbar open={open} autoHideDuration={1}>
      <Alert severity={severity} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
