<template lang="pug">
    main
      form
        .field(novalidate)
          input(
            type="email"
            placeholder="ejemplo@correo.com"
            v-model="email"
            @keyup="changeField(email, 'email')"
          )
          p.error(v-if="emailError.show") {{emailError.msg}}
        .field
          input(
            type="password"
            placeholder="*****"
            v-model="password"
            @keyup="changeField(password, 'password')"
          )
          p.error(v-if="passwordError.show") {{passwordError.msg}}
        button.btn.red(@click="login")
          span(v-if="!isLoading") Iniciar sesión
          spinner(v-if="isLoading")
      a Olvide mi contraseña
</template>

<script>
  import Spinner from './Spinner.vue';
  import { isEmail } from '../scripts/general.js';

  export default {
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
          this.$set(this.emailError, 'msg', 'El correo es incorrecto.');
        }

        if (!this.password) {
          this.passwordError.show = true;
          this.$set(this.passwordError, 'msg', 'La contraseña no ha sido ingresada.')
        }

        if (!this.emailError.show && !this.passwordError.show) {
          this.isLoading = true;

          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        }
      },
      changeField(field, type) {
        if (field) {
          this[`${type}Error`].show = false;
          this[`${type}Error`].msg = '';
        }
      }
    },
    components: {
      Spinner
    }
  }
</script>
