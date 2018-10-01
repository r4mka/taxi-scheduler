export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const DRIVER_DETAILS_MODAL = 'DRIVER_DETAILS_MODAL';
export const hideModal = () => ({ type: 'HIDE_MODAL' });
export const showModal = (type, props = {}) => ({
  type: 'SHOW_MODAL',
  payload: {
    modalType: type,
    modalProps: props,
  },
});
