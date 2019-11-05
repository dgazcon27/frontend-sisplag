import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token:'',
		timeStamp:0,
		userId: -1,
		header: ''
	},
	mutations: {
		setToken(state, data) {
			state.token = data.id
			state.timeStamp = data.ttl
			state.userId = data.userId
		},
		setHeader(state, header){
			Vue.set(state, 'header', header.name)
		}

	},
	getters: {
		header: state => state.header
	},
	actions: {
		changeHeader({commit}, header){
			commit('setHeader', header)
		}
	}
})

export default store