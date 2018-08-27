<template lang="pug">
    .field.profile-phone
      span.phone {{ phone }}
      button.btn.small.transparent(
        type="button"
        @click="editPhone"
      )
        font-awesome-icon(icon="edit")
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

<style lang="scss" scoped>
  .profile-phone {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .phone {
      font-size: 1.2em;
    }
  }
</style>
