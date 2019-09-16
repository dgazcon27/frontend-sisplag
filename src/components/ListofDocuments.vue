<template>
	<div id="wrapper">
		<div id="main">
			<div class="inner">
				<sp-header/>
				<div>
					<table class="table">
					  <thead class="thead-dark">
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">Nombre</th>
					      <th scope="col">% Coincidencia</th>
					      <th scope="col">Fecha de creacion</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr v-for="doc in documents">
					      <th scope="row">{{doc.id}}</th>
					      <td><a :href="doc.url" target="_blank">{{doc.name}}</a></td>
					      <td>{{doc.avg}}%</td>
					      <td>{{parseDate(doc.createdAt)}}</td>
					    </tr>
					  </tbody>
					</table>
				</div>
			</div>
		</div>
		<sp-sidebar/>
		
	</div>
</template>

<script>
import SpHeader from './layout/Header.vue';
import SpSidebar from './layout/Sidebar.vue';
import fileServices from '../services/fileServices';
import dateMixin from '../mixins/dateMixin';

export default {

  name: 'ListofDocuments',
  components: {
	SpHeader,
	SpSidebar,
  },
  data () {
    return {
    	documents: []
    }
  },
  mixins:[dateMixin],
  methods: {
  	getDocuments() {
  		fileServices.getDocuments()
			.then(res => {
				this.documents = res;
			})
			.catch(err => {
				console.log(err)
			})
  	}
  },
  mounted() {
	this.getDocuments()
  },
}
</script>

<style lang="css" scoped>
</style>