import { takeEvery, put, call } from 'redux-saga/effects';
import { 
    getShipmentDataSuccess,
    getShipmentDataFail,
    saveRecordSuccess,
    saveRecordFail
} from '../action';
import {
    GET_SHIPMENT_DATA,
    ADD_RECORD
} from '../constant';
import commonApi from '../../../middleware/commonApi';

const sampleRecord ={  
'wh_tracking_no':'LC006', 
'cust_tracking_no': 'CST12', 
'cust_tracking_label':'NEW RECORD', 
'expiry_date': '2020-12-28', 
'committed_qty': 6, 
'avail_qty': 5, 
'location':'Japan', 
'committed_type':'ABL', 
'picked_qty':10, 
'tu_notes':'Sample Not'
}

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
function* saveRecord(action){
    try{
        // const result = yield call(commonApi.saveRecordDetails,action.payload);
        console.log('save record:::::');
        yield put(saveRecordSuccess(sampleRecord));
        // if(result && result.status == '201'){
        //     yield put(getShipmentDataSuccess(result.data.response));
        // }
    }catch(error){
        yield put(saveRecordFail(error));
    }    
}

export default function* profileSagas() {
    yield* [
        takeEvery(GET_SHIPMENT_DATA, getShipmentData),
        takeEvery(ADD_RECORD, saveRecord),
      ];
  }