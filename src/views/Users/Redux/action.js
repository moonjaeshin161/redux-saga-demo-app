export const types = {
    GET_USERS: 'GET_USERS',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_ERROR: 'GET_USERS_ERROR',
}

export function getUsers() {
    return {
        type: types.GET_USERS,
    }
}

export function getUsersSuccess(users) {
    return {
        type: types.GET_USERS_SUCCESS,
        payload: users
    }
}

export function getUsersError(error) {
    return {
        type: types.GET_USERS_ERROR,
        payload: error
    }
}