import {
    GET_SHIPMENT_DATA_SUCCESS,
    GET_SHIPMENT_DATA_FAIL
  } from '../constant';
  import shipment from '../mockData/shipmentData';

  const initialState = {
    // checkin_data: {}
    shipment_data: shipment,
  };
  
  const shipmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SHIPMENT_DATA_SUCCESS: 
        // return { ...initialState, checkin_data : action.payload };
        return { ...initialState, shipment_data : shipment };
      case GET_SHIPMENT_DATA_FAIL: 
        return { ...initialState, shipment_data_fail : action.error };
      
      default:
        return state;
    }
  };
  
  export default shipmentReducer;