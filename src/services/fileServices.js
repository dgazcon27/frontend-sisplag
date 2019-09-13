import config from './config';
import axios from 'axios';

const fileServices = {}

fileServices.upload = function(formData) {
    const url = `${config.apiUrl}/documents/upload`;
    return axios.post(url, formData)
        // get data
        .then(() => {})
        // add url field
}


export default fileServices;