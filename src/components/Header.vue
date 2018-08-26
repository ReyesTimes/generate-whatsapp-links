<template lang="pug">
    header.header
      div.top
        button.btn.small.transparent(
          @click="togglMenu"
        )
          .bar
          .bar
          .bar
        div.logo
          img(src="../assets/hanna1.svg")
      nav(
        :class="(!showMenu) ? 'hide': ''"
      )
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

<style lang="scss" scoped>
  @import "../sass/general.scss";
  .header {
    .top {
      display: flex;
      border-bottom: 1px solid black;

      .logo {
        border-left: 1px solid black;
      }
    }
  }

  .btn {
    .bar {
      width: 30px;
      height: 5px;
      background-color: $red;
      margin: 6px 0;
    }
  }

  .hide {
    display: none;
  }
</style>
