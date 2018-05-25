import { storesConstants } from '../../constants/stores';
import { storesService } from '../../services/stores';

export const storesActions = {
    getAll,
};

function getAll() {
    return dispatch => {
        dispatch(request());

        return storesService.getAll()
            .then(
                (stores) => {
                    dispatch(success(stores));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(stores) { return { type: storesConstants.STORES_REQUEST, stores } }
    function success(stores) { return { type: storesConstants.STORES_SUCCESS, stores } }
    function failure(error) { return { type: storesConstants.STORES_FAILURE, error } }
}
