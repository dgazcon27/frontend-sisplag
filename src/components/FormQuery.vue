<template>
	<div id="wrapper">
		<div id="main">
			<div class="inner">
				<h1>Consultar texto</h1>
					<textarea name="textarea" rows="10" cols="50" v-model="text"></textarea>
					<button class="btn" v-on:click="checkText(text)">Consultar</button>
			</div>
		</div>
	</div>
</template>

<script>

import fileServices from '../services/fileServices';
export default {

  name: 'FormQuery',

  data () {
    return {
    	text: ''
    }
  },
  methods: {
  	checkText(text) {
  		fileServices.checkText(text)
  		.then(res => {
  			console.log(res)
  		})
  		.catch(err => {
  			console.log(err)
  		})
  	}
  }
}
</script>

<style lang="css" scoped>
	#wrapper {
		margin-top: 30px;
	}
</style>