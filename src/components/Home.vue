<template lang="pug">
  #app
    header-component
    h1.uppercase Crear botón whatsapp
    p Ingresa el número y el mensaje que deseas envíar.

    form(@submit.prevent="generateLink" v-if="!hasLink.show")
      phone-section(
        :phone="phone"
        v-show="!showEditPhone"
      )
      edit-phone(
        :phone="phone"
        :phoneError="phoneError"
        v-show="showEditPhone"
        @removePhone="removePhone"
        @showPhoneMessage="showPhoneMessage"
        @hidePhoneMessage="hidePhoneMessage"
      )
      .field
        textarea(v-model="msg")
        p.error(v-if="msgError.show") {{msgError.msg}}
      button.green.uppercase(type="submit") Generar liga

    .container(v-if="hasLink.show")
      a(:href="hasLink.url" target="_blank") {{hasLink.url}}
      button.green Copiar liga
      button.transparent.underline(
        @click="editLink"
      ) Editar
</template>

<script>
  import HeaderComponent from '@/components/Header.vue';
  import SuccessGenerator from '@/components/SuccessGenerator.vue';
  import PhoneSection from '@/components/PhoneSection.vue';
  import EditPhone from '@/components/EditPhone.vue';

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
        hasLink: {
          show: false,
        },
        showEditPhone: true,
      }
    },
    components: {
      HeaderComponent,
      SuccessGenerator,
      PhoneSection,
      EditPhone
    },
    methods: {
      generateLink() {
        if (!this.phone) {
          this.showPhoneMessage('No has ingresado tu número telefónico.');
        }

        if (!this.msg) {
          this.msgError.show = true;
          this.$set(this.msgError, 'msg', 'No has ingresado ningún mensage.');
        }

        if (this.msg && this.phone) {
          let msg = encodeStringURI(this.msg);

          this.updateHasLink(msg);

          localStorage.setItem(
            'WHATSAPPLINK',
            JSON.stringify({
              phone: this.phone,
              msg
            })
          );
        }
      },
      updateHasLink(msg) {
        let whatsappMsg = `${urlWhatsapp}${this.phone}?text=${msg}`;

        this.hasLink.show = true;
        this.$set(this.hasLink, 'url', whatsappMsg);
      },
      editLink() {
        this.hasLink.show = false;
      },
      removePhone() {
        this.phone = '';
        localStorage.removeItem('PHONE');
      },
      showPhoneMessage(msg) {
        this.phoneError.show = true;
        this.$set(this.phoneError, 'msg', msg);
      },
      hidePhoneMessage() {
        this.phoneError.show = false;
        this.phoneError.msg = '';
      }
    },
    created() {
      if (localStorage.getItem('PHONE')) {
        let phone = JSON.parse(localStorage.getItem('PHONE'));

        this.showEditPhone = false;
        this.phone = phone;
      }

      this.$bus.$on('update-phone', (phone) => {
        if (phone) {
          this.phone = phone;
          localStorage.setItem('PHONE', this.phone);
        }

        this.showEditPhone = !this.showEditPhone;
      });
    }
  }
</script>
