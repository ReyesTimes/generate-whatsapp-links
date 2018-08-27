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
          img(src="~@/assets/hanna1.svg")
      transition(name="show")
        nav(
          v-show="(showMenu)"
        )
          ul
            li
              router-link(
                to="/"
                :class="(currentView === 'home') ? 'active' : ''"
              ) Generar liga
            li
              router-link(
                to="/history"
                :class="(currentView === 'history') ? 'active' : ''"
              ) Historial de ligas
            li
              a(
                role="button"
                @click="closeSession"
              ) Cerrar sesión
</template>

<script>
  import { logout } from '@/services/login.js';

  export default {
    data() {
      return {
        showMenu: false,
        currentView: this.$route.name
      }
    },
    methods: {
      togglMenu() {
        this.showMenu = !this.showMenu
      },
      closeSession() {
        logout()
          .then(
            this.$router.push('/login')
          )
      }
    },
  }
</script>

<style lang="scss">
  @import "~@/sass/show.scss";
</style>

<style lang="scss" scoped>
  @import "~@/sass/general.scss";

  .header {
    min-height: 57px;

    .top {
      display: flex;
      border-bottom: 1px solid #e1e1e1;

      .logo {
        border-left: 1px solid #e1e1e1;
        display: flex;
        align-items: center;

        img {
          width: 115px;
        }
      }

      .btn {
        padding: 0.7em 1.15em;

        .bar {
          width: 26px;
          height: 3px;
          background-color: $red;
          margin: 6px 0;
        }
      }
    }

    nav {
      width: 100%;
      padding: 16px;
      position: absolute;
      height: 83vh;
      z-index: 20;
      background-color: white;

      li {
        margin-bottom: 1em;
        a {
          text-decoration: none;
          font-size: 1.5em;
          color: #1b1b1b;
          &.active {
            color: $red;
          }
        }
      }
    }
  }
</style>
