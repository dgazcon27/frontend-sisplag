<template>
	<div id="sidebar">
		<div class="inner">

			<section id="search" class="alt">
				<form method="post" action="#">
					<input type="text" name="query" id="query" placeholder="Search" />
				</form>
			</section>
			<!-- Menu -->
			<nav id="menu">
				<header class="major">
					<h2>Menu</h2>
				</header>
				<ul>
					<li><router-link to="/">Documentos</router-link></li>
					<li><router-link to="/upload">Cargar Archivo</router-link></li>
					<!-- <li><a href="generic.html">Generic</a></li>
					<li><a href="elements.html">Elements</a></li>
					<li>
						<span class="opener">Submenu</span>
						<ul>
							<li><a href="#">Lorem Dolor</a></li>
							<li><a href="#">Ipsum Adipiscing</a></li>
							<li><a href="#">Tempus Magna</a></li>
							<li><a href="#">Feugiat Veroeros</a></li>
						</ul>
					</li> -->
					<!-- <li><a href="#">Etiam Dolore</a></li>
					<li><a href="#">Adipiscing</a></li>
					<li>
						<span class="opener">Another Submenu</span>
						<ul>
							<li><a href="#">Lorem Dolor</a></li>
							<li><a href="#">Ipsum Adipiscing</a></li>
							<li><a href="#">Tempus Magna</a></li>
							<li><a href="#">Feugiat Veroeros</a></li>
						</ul>
					</li>
					<li><a href="#">Maximus Erat</a></li>
					<li><a href="#">Sapien Mauris</a></li> -->
					<li><router-link to="about">About</router-link></li>
				</ul>
			</nav>

		</div>
	</div>
</template>

<script>
export default {

  name: 'Sidebar',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>

</style>