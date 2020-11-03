import config from'../config';
import axios from 'axios';

const {domains} = config.api;
const {shipment:shipmentDomain} = domains;

const commonApi = {
    getShipmentData: () => {
      return axios.get(`${shipmentDomain}`);
    },
}

export default commonApi;