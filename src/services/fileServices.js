import apiLoopback from './apiLoopback';
import axios from 'axios';

const fileServices = {}

fileServices._upload = function (formdata) {
	return 	apiLoopback.post('containers/documents/upload',formdata,{headers: {'content-type': 'multipart/form-data'}})
	.then(res => res.data)
	.catch(err => err)
}


fileServices.upload = function(formData) {

	const BASE_URL = 'http://localhost:3000/api';
    const url = `${BASE_URL}/containers/documents/upload`;
    return axios.post(url, formData)
        // get data
        .then(x => x.data)
        // add url field
        .then(x => x.map(img => Object.assign({},
            img, { url: `${BASE_URL}/images/${img.id}` })));
}

fileServices.test = function () {
	console.log('asdasdasdasdasdasd')
}

export default fileServices;