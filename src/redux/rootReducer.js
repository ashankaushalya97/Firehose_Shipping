import { combineReducers } from 'redux';
import shipmentReducer from '../containers/shipment/reducer';

const rootReducer = combineReducers({
    shipmentReducer,
})

export default rootReducer;