import { fork,all} from 'redux-saga/effects';
import shipmentSaga from '../containers/shipment/saga';

export default function* rootSaga() {
    return yield all([
      fork(shipmentSaga),
    ]);
  }