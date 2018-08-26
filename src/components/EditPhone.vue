<template lang="pug">
  .field.flex
    label(for="phone") Tu número
    input(
      type="tel"
      id="phone"
      v-model="phoneValue"
      @keyup.prevent="changePhone"
    )
    button.green(
      type="button"
      @click="editPhone"
    ) Guardar
    button.transparent(
      type="button"
      @click="removePhone"
    ) ×
    p.error(v-if="phoneError.show") {{phoneError.msg}}
</template>

<script>
  export default {
    props: ['phone', 'phoneError'],
    data() {
      return {
        phoneValue: this.phone
      }
    },
    methods: {
      editPhone() {
        if (this.phoneValue) {
          this.$bus.$emit('update-phone', this.phoneValue);
        } else {
          console.log('you here', this);
          this.$emit('showPhoneMessage', 'No has ingresado ningún número télefonico.');
        }
      },
      removePhone() {
        this.$emit('removePhone');
      },
      changePhone() {
        if (this.phoneValue) {
          this.$emit('hidePhoneMessage');
        }
      }
    },
    watch: {
      phone(newValue, oldValue) {
        this.phoneValue = newValue;
      }
    }
  }
</script>
