<template>
	<div>
		<div class="container-1">
			<sp-sidebar/>
		</div>
		<div class="container-2">
			<sp-header/>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>

import SpHeader from './components/layout/Header.vue';
import SpSidebar from './components/layout/Sidebar.vue';
export default {
	name:'app',
	components: {
		SpHeader,
		SpSidebar
	},
	data() {
		return {
			authenticated: false
		}
	},
	beforeMount() {
		if(!this.authenticated) {
			this.$router.replace({ name: "login" });
		}
	}
}
</script>

<style scoped>
	.container-1 {
		display: block;
		position: absolute;
		height: 700px;
		width: 350px;
	}

	.container-2 {
		position: absolute;
		display: block;
		top: -55px;
		left: 350px;
		width: 1000px;
	}
</style>
