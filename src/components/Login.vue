<template>
	<div id="wrapper">
		<link rel="stylesheet" href="./assets/css/login-styles.css">
		<!-- Main -->
		<section id="main">
			<h2>Log In</h2>
			<form method="post" action="#">
				<div class="field">
					<input v-model="email" type="email" name="email" id="email" placeholder="Correo" />
				</div>
				<div class="field">
					<input v-model="password" type="text" name="password" id="password" placeholder="Contraseña" />
				</div>
				<div>
					<button  class="btn btn-primary">Ingresar</button>
				</div>
			</form>
			<footer>
				<ul class="icons">
					<li><a href="#" class="fa-twitter">Twitter</a></li>
					<li><a href="#" class="fa-instagram">Instagram</a></li>
					<li><a href="#" class="fa-facebook">Facebook</a></li>
				</ul>
			</footer>
		</section>

		<!-- Footer -->
		<footer id="footer">
			<ul class="copyright">
				<li>&copy; Jane Doe</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
			</ul>
		</footer>


	</div>
</template>

<script>
import 'bootstrap'


export default {

	name: 'Login',

	data () {
		return {
			password:'1234',
			email:'daniel.gazcon27@gmail.com'
		}
	}
}
</script>

<style lang="css" scoped>
#main {
	width: 500px;
    max-height: 500px;
}
</style>