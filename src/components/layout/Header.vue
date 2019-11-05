<template>
	<header id="header">
		<router-link to="/"><p class="logo"><strong>{{myHeader}}</strong></p></router-link>
		<!-- <ul class="icons">
			<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
			<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
			<li><a href="#" class="icon fa-snapchat-ghost"><span class="label">Snapchat</span></a></li>
			<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
			<li><a href="#" class="icon fa-medium"><span class="label">Medium</span></a></li>
		</ul> -->
	</header>
</template>

<script>

import { mapState } from 'vuex';

export default {

	name:'Header',

	data() {
		return {
			myHeader: ''
		}
	},
	computed: mapState(['header']),
	watch: {
		header(newV){
			this.myHeader = newV
		}
	}
}
</script>

<style lang="css" scoped>
	a.router-link-active {
		border: none;
	}
</style>