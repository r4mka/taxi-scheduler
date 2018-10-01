import { fromJS, Map } from 'immutable';
import { SHOW_MODAL, HIDE_MODAL } from 'actions/ui';

const initialState = fromJS({
  modalType: null,
  modalProps: Map(),
});

export const selectModalData = state => ({
  modalType: state.getIn(['ui', 'modalType']),
  modalProps: state.getIn(['ui', 'modalProps']),
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_MODAL:
      return state.merge(payload);

    case HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
};
