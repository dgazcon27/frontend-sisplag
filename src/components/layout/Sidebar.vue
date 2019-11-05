<template>
    <div id="sidebar">
        <div class="inner">
            <!-- Menu -->
            <nav id="menu">
                <header class="major">
                    <h2>Menu</h2>
                </header>
                <ul>
                    <li>
                        <span class="opener" v-on:click="openSubMenu('Consultar')">     Documentos
                        </span>
                        <ul class="menu-list" v-if="isCheck">
                            <li><router-link to="/">Listar</router-link></li>
                            <li><router-link to="/upload">Cargar Archivo</router-link></li>
                            <li><router-link to="/check-text">Consultar texto</router-link></li>
                        </ul>
                    </li>
                    <li><router-link to="about">Nosotros</router-link></li>
                    <!-- <li><a href="generic.html">Generic</a></li>
                    <li><a href="elements.html">Elements</a></li>
                     -->
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
        menu: ''
    }
  },
  methods: {
    openSubMenu(menu) {
        if (menu == this.menu) {
            this.menu = ''
        } else {
            this.menu = menu;
        }
    }
  },
  computed: {
    isCheck() {
        return this.menu == 'Consultar'
    }
  }
}
</script>

<style lang="css" scoped>
    #sidebar {
        height: 100%;
    }

    .menu-list {
        display: inherit !important;
    }
</style>