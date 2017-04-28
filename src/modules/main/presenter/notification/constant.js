export const TOGGLE_NOTIFICATION = 'TOGGLE_NOTIFICATION';
export const CHANGE_VERTICAL_NOTIFICATION = 'CHANGE_VERTICAL_NOTIFICATION';
export const CHANGE_HORIZONTAL_NOTIFICATION = 'CHANGE_HORIZONTAL_NOTIFICATION';
export const CHANGE_TYPE_NOTIFICATION = 'CHANGE_TYPE_NOTIFICATION';

export const VERTICAL_BUTTONS = [
  { id: 'top', name: 'vertical', text: 'Top', value: 1, extraClass: 'first' },
  { id: 'middle', name: 'vertical', text: 'Middle', value: 2, extraClass: '' },
  { id: 'bottom', name: 'vertical', text: 'Bottom', value: 3, extraClass: 'last' }
];

export const HORIZONTAL_BUTTONS = [
  { id: 'left', name: 'horizontal', text: 'Left', value: 1, extraClass: 'first' },
  { id: 'center', name: 'horizontal', text: 'Center', value: 2, extraClass: '' },
  { id: 'right', name: 'horizontal', text: 'Right', value: 3, extraClass: 'last' }
];

export const NOTI_TYPE_BUTTONS = [
  { id: 'success', name: 'typeNoti', text: 'Success', value: 1, extraClass: 'first' },
  { id: 'info', name: 'typeNoti', text: 'Info', value: 2, extraClass: '' },
  { id: 'warning', name: 'typeNoti', text: 'Warning', value: 3, extraClass: '' },
  { id: 'error', name: 'typeNoti', text: 'Error', value: 4, extraClass: 'last' }
];
