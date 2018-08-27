<template lang="pug">
  main
    header-component

    transition(name="show")
      success-generator(v-if="isSuccess")

    transition(name="show")
      .container(v-show="!isSuccess")
        .description
          h1.uppercase Crear botón whatsapp
          p Ingresa el número y el mensaje que deseas envíar.
        form(@submit.prevent="generateLink" v-if="!hasLink.show")
          label(for="phone") Tu número
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
            @phoneValue="phoneValue"
          )
          label(for="message") Tu mensaje
          .field
            textarea(
              id="message"
              v-model="msg"
              @keyup.prevent="changeField"
            )
            transition(name="show")
              p.error(v-if="msgError.show") {{msgError.msg}}
          button.btn.green.uppercase(type="submit") Generar liga

        .has-link(v-if="hasLink.show")
          a.link(:href="hasLink.url" target="_blank") {{hasLink.url}}
          button.btn.green(
            :data-clipboard-text="hasLink.url"
            v-clipboard="true"
          ) Copiar liga
          button.btn.transparent.underline(
            @click="editLink"
          ) Editar
</template>

<script>
  import HeaderComponent from '@/components/layout/Header.vue'
  import PhoneSection from '@/components/PhoneSection.vue'
  import EditPhone from '@/components/EditPhone.vue'
  import SuccessGenerator from '@/components/SuccessGenerator.vue'

  import { encodeStringURI } from '@/scripts/general.js';
  import { urlWhatsapp } from '@/scripts/config.js';

  import mixinAuth from '@/mixins/mixinAuth';

  export default {
    mixins: [mixinAuth],
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
        isSuccess: false
      }
    },
    components: {
      HeaderComponent,
      PhoneSection,
      EditPhone,
      SuccessGenerator,
    },
    methods: {
      generateLink() {
        if (!this.phone) {
          this.showPhoneMessage('No has ingresado tu número telefónico.')
        }

        if (!this.msg) {
          this.msgError.show = true
          this.$set(this.msgError, 'msg', 'No has ingresado ningún mensage.')
        }

        if (this.msg && this.phone) {
          let msg = encodeStringURI(this.msg)

          this.updateHasLink(msg)

          localStorage.setItem(
            'WHATSAPPLINK',
            JSON.stringify({
              phone: this.phone,
              msg
            })
          )
        }
      },
      changeField() {
        if (this.msg) {
          this.msgError.show = false
          this.msgError.msg = ''
        }
      },
      updateHasLink(msg) {
        let whatsappMsg = `${urlWhatsapp}${this.phone}?text=${msg}`

        this.hasLink.show = true
        this.$set(this.hasLink, 'url', whatsappMsg)
      },
      editLink() {
        this.hasLink.show = false
      },
      phoneValue(phone) {
        this.phone = phone
      },
      removePhone() {
        this.phone = ''
        localStorage.removeItem('PHONE')
      },
      showPhoneMessage(msg) {
        this.phoneError.show = true
        this.$set(this.phoneError, 'msg', msg)
      },
      hidePhoneMessage() {
        this.phoneError.show = false
        this.phoneError.msg = ''
      },
      copyLink() {

        this.isSuccess = !this.isSuccess
      },
    },
    created() {
      this.auth();

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

<style lang="scss">
  @import "~@/sass/show.scss";
</style>

<style lang="scss" scoped>
  textarea {
    background-color: #eeeeee;
  }

  h1 {
    font-size: 1.5em;
    text-align: center;
  }

  .container {
    padding: 1em 10%;
  }

  .description {
    text-align: center;
    margin-bottom: 2.75em;
  }

  .has-link {
    text-align: center;

    .link {
      display: block;
      margin-bottom: 3em;
      word-break: break-all;
    }

    .btn {
      margin-bottom: 1em;
    }
  }
</style>
