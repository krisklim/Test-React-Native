import {takeEvery} from '@redux-saga/core/effects';
import { validSign } from '../actions/actionCreator';
import { inputPassword } from '../constans';
import {HotelsCost} from '../../api'

export function* workerSaga() {
    const data = yield HotelsCost();
    console.log(data);
}

export function* watchClickSaga() {
    yield takeEvery(validSign, workerSaga);
   
}

//создадим корневую сагу
export default function* rootSaga() {
    yield watchClickSaga();
}
