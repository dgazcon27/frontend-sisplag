import config from './config';
import axios from 'axios';

const fileServices = {}

fileServices.upload = function(formData) {

    const url = `${config.apiUrl}/documents/upload`;
    return axios.post(url, formData)
        // get data
        .then(x => console.log(x))
        // add url field
}


export default fileServices;