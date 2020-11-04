import {
    GET_SHIPMENT_DATA,
    GET_SHIPMENT_DATA_SUCCESS,
    GET_SHIPMENT_DATA_FAIL,
    ADD_RECORD,
    ADD_RECORD_SUCCESS,
    ADD_RECORD_FAIL
} from '../constant';

export const getShipmentData = () => {
    return{
        type: GET_SHIPMENT_DATA
    }
}
export const getShipmentDataSuccess = (payload) => {
    return{
        type: GET_SHIPMENT_DATA_SUCCESS,
        payload
    }
}
export const getShipmentDataFail = (error) => {
    return{
        type: GET_SHIPMENT_DATA_FAIL,
        error
    }
}
export const saveRecord = (payload) => {
    return{
        type: ADD_RECORD,
        payload
    }
}
export const saveRecordSuccess = (payload) => {
    return{
        type: ADD_RECORD_SUCCESS,
        payload
    }
}
export const saveRecordFail = (error) => {
    return{
        type: ADD_RECORD_SUCCESS,
        error
    }
}
