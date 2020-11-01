import {
    GET_CHECKIN_DATA_SUCCESS,
    GET_CHECKIN_DATA_FAIL,
    SAVE_CHECKIN_DATA_SUCCESS,
    SAVE_CHECKIN_DATA_FAIL,
    REQUEST_PDF_SUCCESS,
    REQUEST_PDF_FAIL,
  } from '../constant';
  import mockData from '../mockData';

  const initialState = {
    // checkin_data: {}
    checkin_data: mockData,
    pdfUrl:null
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CHECKIN_DATA_SUCCESS: 
        // return { ...initialState, checkin_data : action.payload };
        return { ...initialState, checkin_data : mockData };
      case GET_CHECKIN_DATA_FAIL: 
        return { ...initialState, checkin_fail : action.error };
      case SAVE_CHECKIN_DATA_SUCCESS: 
        return { ...initialState, saveChekin_success : true};
      case SAVE_CHECKIN_DATA_FAIL: 
        return { ...initialState, saveCheckin_fail : action.error };
      case REQUEST_PDF_SUCCESS: 
        return { ...initialState, pdfUrl : action.payload };
      case REQUEST_PDF_FAIL: 
        return { ...initialState, requestPdfFail : action.error };
      
      default:
        return state;
    }
  };
  
  export default profileReducer;