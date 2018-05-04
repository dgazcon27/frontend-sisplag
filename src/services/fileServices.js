import apiLoopback from './apiLoopback';

const fileServices = {}

fileServices.upload = function (formdata) {
	
	return 	apiLoopback.post('documents/upload',formdata)
	.then(res => res.data)
	.catch(err => err)
}

fileServices.test = function () {
	console.log('asdasdasdasdasdasd')
}

export default fileServices;