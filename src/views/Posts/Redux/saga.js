import { httpService } from '../../../services/httpService';
import { API } from '../../../services/APIs'
import { getPostsSuccess, getPostsError } from './action';
import { put, takeLatest } from 'redux-saga/effects';
import { types } from './action';

function* _getPost() {
    const response = yield httpService.get(API.GET_ALL_POSTS);
    if (response) {
        yield put(getPostsSuccess(response));
    }
    else {
        yield put(getPostsError('Error occured'))
    }
}

export function* watchGetPosts() {
    yield takeLatest(types.GET_POSTS, _getPost)
}