import About from './components/About.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

const routes = [
	{path: '/', component: Home, name:'home'},
	{path: '/about', component: About, name:'about'},
	{path: '/login', component: Login, name:'login'},
];

export default routes;