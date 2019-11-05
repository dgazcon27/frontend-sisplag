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

fileServices.getDocuments = function (paginate = 0) {
    const url = `${config.apiUrl}/documents/getDocuments/${paginate}`;
    return axios.get(url)
    .then(res => {
        let returnedTarget = {}
        let result = {}
        let response = res.data.response.map(item => {
            returnedTarget = Object.assign({}, item);
            returnedTarget.avg = ((parseInt(item.statistics.lcs)+
                       parseInt(item.statistics.ngram)+
                       parseInt(item.statistics.vectorialModel))/3).toFixed(4)
            return returnedTarget;
            
        })
        result.response = response;
        result.count = res.data.count;
        return result;
    })
}

fileServices.checkText = function (data) {
    const url = `${config.apiUrl}/documents/uploadText`;
    return axios(url, {
            method: 'post',
            data: {
                text:data
            }
        })
        .then(res => {
            return res.data
        })
}


export default fileServices;