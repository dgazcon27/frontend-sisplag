<template>
	<div id="wrapper">
		<div id="main">
			<div class="inner">
				<sp-header/>
				<sp-upload-file/>
			</div>
		</div>
		<sp-sidebar/>
		
	</div>
</template>

<script>
import SpHeader from './layout/Header.vue'
import SpSidebar from './layout/Sidebar.vue'
import SpUploadFile from './UploadFile.vue'

export default {
	name: 'Home',
	components: {
		SpHeader,
		SpSidebar,
		SpUploadFile
	}
}
</script>

<style scoped>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>