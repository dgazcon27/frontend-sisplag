<template>
	<div id="wrapper">
		<div id="main">
			<div class="inner">
				<div>
					<h1>ESTA ES MI TESIS</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import SpHeader from './layout/Header.vue';
import SpSidebar from './layout/Sidebar.vue';
export default {

  name: 'About',
  components: {
	SpHeader,
	SpSidebar,
  },
  data () {
    return {

    }
  },
  created() {
    this.$store.dispatch('changeHeader' ,{
      name: 'Nosotros'
    })
  },
}
</script>

<style lang="css" scoped>
</style>