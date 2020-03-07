import { httpService } from '../../../services/httpService';
import { API } from '../../../services/APIs'
import { put, takeLatest } from 'redux-saga/effects'
import { getUsersSuccess, getUsersError } from './action';
import { types } from './action'

function* _getUsers() {
    const response = yield httpService.get(API.GET_ALL_USERS);
    if (response) {
        yield put(getUsersSuccess(response));
    }
    else {
        yield put(getUsersError('Error'));
    }
}

export function* watchGetUsers() {
    yield takeLatest(types.GET_USERS, _getUsers);
}