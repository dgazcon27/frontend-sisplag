import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token:'',
		timeStamp:0
	},
	mutations: {
		setToken(state, data) {
			state.token = data.id
			state.timeStamp = data.ttl
		}
	}
})

export default store