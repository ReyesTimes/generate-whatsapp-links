<template lang="pug">
    .field.flex
      div {{ phone }}
      button.transparent(
        type="button"
        @click="editPhone"
      ) icon
</template>

<script>
  export default {
    props: ['phone'],
    methods: {
      editPhone() {
        this.$bus.$emit('update-phone', this.phoneValue);
      }
    }
  }
</script>
