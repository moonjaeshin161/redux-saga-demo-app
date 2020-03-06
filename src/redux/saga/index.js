import { all } from 'redux-saga/effects'
import { watchGetUsers } from '../../views/Users/saga'

export function* rootSaga() {
    yield all([
        watchGetUsers(),
    ])
}