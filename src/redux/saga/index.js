import { all } from 'redux-saga/effects'
import { watchGetUsers } from '../../views/Users/Redux/saga'
import { watchGetPosts } from '../../views/Posts/Redux/saga'

export function* rootSaga() {
    yield all([
        watchGetUsers(),
        watchGetPosts()
    ])
}