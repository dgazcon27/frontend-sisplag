import config from './config';
import axios from 'axios';

const userServices = {}

userServices.login = function(formData) {
	formData.ttl = 86400
    const url = `${config.apiUrl}/users/login`;
    return axios.post(url, formData)
        // get data
        .then(x => x.data)
        .catch()
}


export default userServices;