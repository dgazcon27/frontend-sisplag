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
					<button @click="login" class="btn btn-primary">Ingresar</button>
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
import userService from '../services/userServices'
import {mapMutations} from 'vuex'

export default {

	name: 'Login',

	data () {
		return {
			password:'daniel',
			email:'daniel@correo.co'
		}
	},
	methods: {
		... mapMutations(['setToken']),
		login(e) {
			e.preventDefault()
			if (this.password.trim() == 0 || this.email.trim() == 0) {
				console.log('campos requeridos')
			} else {
				var form = {}
				form.email = this.email
				form.password = this.password
				userService.login(form)
				.then(res => {
					this.$router.replace({ name: "home" })
					this.setToken(res)
				})
				.catch(err=> {console.log(err)})
			}
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