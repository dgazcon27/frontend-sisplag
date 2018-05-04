import trae from 'trae'
import configService from './config'

const apiLoopback = trae.create({
	baseUrl: configService.apiUrl,
	headers: {'Content-Type': 'multipart/form-data'}
})

export default apiLoopback