import { storesConstants } from '../../constants/stores';

export function stores(state = {}, action) {
  switch (action.type) {
    case storesConstants.STORES_REQUEST:
      return {
        status: 1,
        payload: []
      };
    case storesConstants.STORES_SUCCESS:
      return {
        status: 2,
        payload: action.stores.payload
      };
    case storesConstants.STORES_FAILURE:
      return {
        error: action.error,
        payload: []
      };
    default:
      return state
  }
}
