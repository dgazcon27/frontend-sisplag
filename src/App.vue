<template>
	<router-view></router-view>
</template>

<script>


export default {
	name:'app',
	data() {
		return {
			authenticated: false
		}
	},
	beforeMount() {
		// if(!this.authenticated) {
		// 	this.$router.replace({ name: "login" });
		// }
	}
}
</script>

<style>
</style>
