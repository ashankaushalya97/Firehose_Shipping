import { fork,all} from 'redux-saga/effects';
import checkInSaga from '../containers/shipment/saga';

export default function* rootSaga() {
    return yield all([
      fork(checkInSaga),
    ]);
  }