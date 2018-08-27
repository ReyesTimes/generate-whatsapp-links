<template lang="pug">
  div
    .field.field-edit
      input(
        type="tel"
        id="phone"
        v-model="phoneValue"
        @keyup.prevent="changePhone"
      )
      button.btn.small.green(
        type="button"
        @click="editPhone"
      ) Guardar
      button.btn.small.transparent(
        type="button"
        @click="removePhone"
      )
        font-awesome-icon(icon="times")
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

        this.$emit('phoneValue', this.phoneValue);
      }
    },
    watch: {
      phone(newValue, oldValue) {
        this.phoneValue = newValue;
      }
    }
  }
</script>

<style lang="scss">
  .field-edit {
    display: flex;

    input {
      width: 100%;
      margin-right: 3%;
      background-color: #eeeeee;
    }

    .btn {
      margin-right: 1%;
    }
  }
</style>
