import { types } from './action'

const initialState = {
    users: [],
};

export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        default: return state;
    }
}