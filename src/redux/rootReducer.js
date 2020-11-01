import { combineReducers } from 'redux';
import checkInReducer from '../containers/shipment/reducer';

const rootReducer = combineReducers({
    checkInReducer,
})

export default rootReducer;