import config from './config';
import axios from 'axios';

const fileServices = {}

fileServices.upload = function(formData, id) {

    const url = `${config.apiUrl}/documents/upload/${id}`;
    return axios.post(url,formData)
    //     // get data
        .then(() => {})
        // add url field
}

fileServices.getDocuments = function () {
	const url = `${config.apiUrl}/documents/getDocuments`;
	return axios.get(url)
		.then(res => {
			let returnedTarget = {}
			let response = res.data.map(item => {
				returnedTarget = Object.assign({}, item);
				returnedTarget.avg = ((parseInt(item.statistics.lcs)+
						   parseInt(item.statistics.ngram)+
						   parseInt(item.statistics.vectorialModel))/3).toFixed(4)
				return returnedTarget;
				
			})
			return response
		})
}


export default fileServices;