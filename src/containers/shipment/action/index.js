import {
    GET_SHIPMENT_DATA,
    GET_SHIPMENT_DATA_SUCCESS,
    GET_SHIPMENT_DATA_FAIL
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
