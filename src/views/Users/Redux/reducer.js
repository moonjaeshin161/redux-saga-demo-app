import { types } from './action'

const initialState = [];

export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS_SUCCESS:
            return state.concat(action.payload);

        default: return state;
    }
}