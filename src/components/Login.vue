<template lang="pug">
    main.main
      .container
        .logo
          img(src="../assets/hanna1.svg")
        form(
          novalidate
          @submit.prevent="login"
        )
          .field
            input(
              type="email"
              placeholder="ejemplo@correo.com"
              v-model="email"
              @keyup="changeField(email, 'email')"
            )
            transition(name="show")
              p.error(v-if="emailError.show") {{emailError.msg}}
          .field
            input(
              type="password"
              placeholder="Contraseña"
              v-model="password"
              @keyup="changeField(password, 'password')"
            )
            transition(name="show")
              p.error(v-if="passwordError.show") {{passwordError.msg}}
          button.btn.red(
            type="submit"
          )
            transition(name="show")
              span(v-if="!isLoading") Iniciar sesión
            transition(name="show")
              spinner(v-if="isLoading")
        a.link.recover-pass Olvide mi contraseña
</template>

<script>
  import Spinner from '@/components/loading/Spinner.vue';
  import { isEmail } from '@/scripts/general.js';
  import { login } from '@/services/login.js';
  import mixinAuth from '@/mixins/mixinAuth.js';

  export default {
    mixins: [mixinAuth],
    data () {
      return {
        email: '',
        password: '',
        emailError: {
          show: false,
        },
        passwordError: {
          show: false
        },
        isLoading: false
      }
    },
    methods: {
      login() {
        if (!this.email) {
          this.emailError.show = true;
          this.$set(this.emailError, 'msg', 'El correo no ha sido ingresado.');
        } else if (!isEmail(this.email)) {
          this.emailError.show = true;
          this.$set(this.emailError, 'msg', 'El correo no es valido.');
        }

        if (!this.password) {
          this.passwordError.show = true;
          this.$set(this.passwordError, 'msg', 'La contraseña no ha sido ingresada.')
        }

        if (!this.emailError.show && !this.passwordError.show) {
          let self = this
          this.isLoading = true

          login({ email: this.email, password: this.password})
            .then(() => {
              this.isLoading = false
              this.$router.push('/')
            })
            .catch(() => {
              this.isLoading = false

              this.passwordError.show = true
              this.$set(this.passwordError, 'msg', 'El usuario es incorrecto.')
            })
        }
      },
      changeField(field, type) {
        if (field) {
          this[`${type}Error`].show = false
          this[`${type}Error`].msg = ''
        }
      }
    },
    components: {
      Spinner
    },
    created() {
      //do something after creating vue instance
      this.auth();
    }
  }
</script>

<style lang="scss">
  @import "~@/sass/show.scss";
</style>

<style lang="scss" scoped>
  .main {
    background-color: #f5f5f5;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    text-align: center;
  }

  .recover-pass {
    color: #2c3e50;
    text-decoration: underline;
    margin-top: 25px;
    display: block;
  }

  .logo {
    margin-bottom: 30px;

    img {
      width: 150px;
    }
  }
</style>
