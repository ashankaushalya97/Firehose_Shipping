import { takeEvery, put, call } from 'redux-saga/effects';
import { 
    getCheckinDataSuccess,
    getCheckinDataFail,
    saveCheckinSuccess,
    saveCheckinFail,
    requestPdfSuccess,
    requestPdfFail,
    requestPdf
} from '../action';
import {
    GET_CHECKIN_DATA,
    SAVE_CHECKIN_DATA,
    REQUEST_PDF
} from '../constant';
import commonApi from '../../../middleware/commonApi';
import { getPdfUrl } from '../selectors';

function* getCheckinData(action){
    try{
        const result = yield call(commonApi.getCheckinData);
        if(result && result.status == '200'){
            yield put(getCheckinDataSuccess(result.data.response));
        }
    }catch(error){
        yield put(getCheckinDataFail(error));
    }    
}
function* saveCheckin(action){
    try{
        const result = yield call(commonApi.saveCheckinData,action.payload);
        if(result && result.status == '200'){
            yield put(saveCheckinSuccess());
            yield put(getPdfUrl(action.payload.conf_no));
        }
    }catch(error){
        yield put(saveCheckinFail(error));
    }    
}
function* requestPdfUrl(action){
    try{
        const result = yield call(commonApi.requestPdf,action.payload);
        if(result && result.status == '200'){
            window.open(result.data.response.url, "_blank")
            yield put(requestPdfSuccess(result.data.response));
        }
    }catch(error){
        yield put(requestPdfFail(error));
    }    
}

export default function* profileSagas() {
    yield* [
        takeEvery(GET_CHECKIN_DATA, getCheckinData),
        takeEvery(SAVE_CHECKIN_DATA, saveCheckin),
        takeEvery(REQUEST_PDF, requestPdfUrl),
      ];
  }