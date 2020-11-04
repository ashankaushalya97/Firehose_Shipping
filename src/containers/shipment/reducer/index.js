import {
    GET_SHIPMENT_DATA_SUCCESS,
    GET_SHIPMENT_DATA_FAIL,
    ADD_RECORD_SUCCESS,
    ADD_RECORD_FAIL
  } from '../constant';
  import shipment from '../mockData/shipmentData';

  const initialState = {
    // checkin_data: {}
    shipment_data: shipment,
    newRecord:null
  };
  
  const shipmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SHIPMENT_DATA_SUCCESS: 
        // return { ...initialState, shipment_data : action.payload };
        return { ...initialState, shipment_data : shipment };
      case GET_SHIPMENT_DATA_FAIL: 
        return { ...initialState, shipment_data_fail : action.error };
      case ADD_RECORD_SUCCESS: 
        return { ...initialState, newRecord : action.payload };
      case ADD_RECORD_FAIL: 
        return { ...initialState, newRecord : action.error };
      
      default:
        return state;
    }
  };
  
  export default shipmentReducer;