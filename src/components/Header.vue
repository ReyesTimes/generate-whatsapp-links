<template lang="pug">
    header.header
      div
        button(
          @click="togglMenu"
        ) icon
        div logo
      nav
        ul
          li
            router-link(to="/") Generar liga
          li
            router-link(to="/history") Historial de ligas
          li
            a Cerrar sesión
</template>

<script>
  export default {
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      togglMenu() {
        this.showMenu = !this.showMenu;
      },
      closeSession() {

      }
    }
  }
</script>
