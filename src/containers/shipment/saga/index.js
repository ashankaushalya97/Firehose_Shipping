import { takeEvery, put, call } from 'redux-saga/effects';
import { 
    getShipmentDataSuccess,
    getShipmentDataFail
} from '../action';
import {
    GET_SHIPMENT_DATA
} from '../constant';
import commonApi from '../../../middleware/commonApi';

function* getShipmentData(action){
    try{
        const result = yield call(commonApi.getShipmentData);
        if(result && result.status == '200'){
            yield put(getShipmentDataSuccess(result.data.response));
        }
    }catch(error){
        yield put(getShipmentDataFail(error));
    }    
}

export default function* profileSagas() {
    yield* [
        takeEvery(GET_SHIPMENT_DATA, getShipmentData),
      ];
  }