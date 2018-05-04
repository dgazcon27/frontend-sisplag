<template>

	<div id="wrapper">
		<div id="main">
			<div class="inner">
				<sp-header/>
				<sp-uploadFile/>
			</div>
		</div>
		<sp-sidebar/>
		
	</div>
</template>

<script>
import SpHeader from './components/Header.vue'
import SpSidebar from './components/Sidebar.vue'
import SpUploadFile from './components/UploadFile.vue'

export default {
	name:'app',
		components: {
		SpHeader,
		SpSidebar,
		SpUploadFile
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
