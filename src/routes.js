import About from './components/About.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import ListofDocuments from './components/ListofDocuments.vue'

const routes = [
	{path: '/upload', component: Home, name:'upload'},
	{path: '/about', component: About, name:'about'},
	{path: '/login', component: Login, name:'login'},
	{path: '/', component: ListofDocuments, name:'home'},
];

export default routes;