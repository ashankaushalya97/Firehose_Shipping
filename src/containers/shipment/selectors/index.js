import {createSelector} from 'reselect';
import shipmentData from '../mockData/shipmentData';

const shipmentReducer = state => state.shipmentReducer;

const getShipment = createSelector(
    shipmentReducer,
    currentState => currentState.shipment_data
);
const getRecord = createSelector(
    shipmentReducer,
    currentState => currentState.newRecord
);


export {
    getShipment,
    getRecord
}