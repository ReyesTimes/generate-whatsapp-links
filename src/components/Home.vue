<template lang="pug">
  #app
    header-component
    h1.uppercase Crear botón whatsapp
    p Ingresa el número y el mensaje que deseas envíar.

    form(@submit.prevent="generateLink" v-if="!hasLink.show")
      .field.flex
        input(
          type="tel"
          v-model="phone"
        )
        button.green Guardar
        button.transparent ×
        p.error(v-if="phoneError.show") {{phoneError.msg}}
      .field
        textarea(v-model="msg")
        p.error(v-if="msgError.show") {{msgError.msg}}
      button.green.uppercase(type="submit") Generar liga

    .container(v-if="hasLink.show")
      a(:href="hasLink.url" target="_blank") {{hasLink.url}}
      button.green Copiar liga
      button.transparent.underline(
        @click="edit"
      ) Editar
</template>

<script>
  import HeaderComponent from './Header.vue';

  import { encodeStringURI } from '../scripts/general.js';
  import { urlWhatsapp } from '../scripts/config.js';

  export default {
    data() {
      return {
        phone: '',
        msg: '',
        phoneError: {
          show: false
        },
        msgError: {
          show: false
        },
        whatsappLink: {
          exist: false
        },
        hasLink: {
          show: false,
        }
      }
    },
    components: {
      HeaderComponent
    },
    methods: {
      generateLink() {
        if (!this.phone) {
          this.phoneError.show = true;
          this.$set(this.phoneError, 'msg', 'No has ingresado tu número telefónico.');
        }

        if (!this.msg) {
          this.msgError.show = true;
          this.$set(this.msgError, 'msg', 'No has ingresado ningún mensage.');
        }

        let whatsappMsg = `${urlWhatsapp}${this.phone}?text=${encodeStringURI(this.msg)}`;

        this.hasLink.show = true;
        this.$set(this.hasLink, 'url', whatsappMsg);
      },
      edit() {
        this.hasLink.show = false;
      }
    }
  }
</script>
