import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface NotificationsState {
  message: string | undefined;
  severity: any;
  open: boolean;
}

interface NotificationsPayload {
  message: string;
  severity: string;
}

const initialState: NotificationsState = {
  message: undefined,
  severity: undefined,
  open: false,
};

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    fetchNotifications: (
      state,
      action: PayloadAction<NotificationsPayload>
    ) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.open = true;
    },
    clearNotificationsData: (state) => {
      state.message = undefined;
      state.severity = undefined;
      state.open = false;
    },
  },
});
export const selectNotificationsState = (
  state: RootState
): NotificationsState => state.notifications;

export const { fetchNotifications, clearNotificationsData } =
  notificationSlice.actions;

export default notificationSlice.reducer;
