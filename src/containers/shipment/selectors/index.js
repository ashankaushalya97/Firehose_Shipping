import {createSelector} from 'reselect';

const checkinReducer = state => state.checkInReducer;

const getCheckIn = createSelector(
    checkinReducer,
    currentState => currentState.checkin_data
);
const getPdfUrl = createSelector(
    checkinReducer,
    currentState => currentState.pdfUrl
);

export {
    getCheckIn,
    getPdfUrl
}