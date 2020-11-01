import {
    GET_CHECKIN_DATA,
    GET_CHECKIN_DATA_SUCCESS,
    GET_CHECKIN_DATA_FAIL,
    SAVE_CHECKIN_DATA,
    SAVE_CHECKIN_DATA_SUCCESS,
    SAVE_CHECKIN_DATA_FAIL,
    REQUEST_PDF,
    REQUEST_PDF_SUCCESS,
    REQUEST_PDF_FAIL
} from '../constant';

export const getCheckinData = () => {
    return{
        type: GET_CHECKIN_DATA
    }
}
export const getCheckinDataSuccess = (payload) => {
    return{
        type: GET_CHECKIN_DATA_SUCCESS,
        payload
    }
}
export const getCheckinDataFail = (error) => {
    return{
        type: GET_CHECKIN_DATA_FAIL,
        error
    }
}
export const saveCheckin = (payload) => {
    return{
        type: SAVE_CHECKIN_DATA,
        payload
    }
}
export const saveCheckinSuccess = () => {
    return{
        type: SAVE_CHECKIN_DATA_SUCCESS
    }
}
export const saveCheckinFail = (error) => {
    return{
        type: SAVE_CHECKIN_DATA_FAIL,
        error
    }
}
export const requestPdf = (payload) => {
    return{
        type: REQUEST_PDF,
        payload
    }
}
export const requestPdfSuccess = (payload) => {
    return{
        type: REQUEST_PDF_SUCCESS,
        payload
    }
}
export const requestPdfFail = (error) => {
    return{
        type: REQUEST_PDF_FAIL,
        error
    }
}