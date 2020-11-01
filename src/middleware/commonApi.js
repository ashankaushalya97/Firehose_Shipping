import config from'../config';
import axios from 'axios';

const {domains} = config.api;
const {checkIn:checkInDomain} = domains;

const commonApi = {
    getCheckinData: () => {
      return axios.get(`${checkInDomain}`);
    },
    saveCheckinData: (data) => {
      return axios.post(`${checkInDomain}`,{...data});
    },
    requestPdf: (id) => {
      return axios.get(`${checkInDomain}/${id}?print=1`);
    },
}

export default commonApi;