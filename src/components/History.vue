<template lang="pug">
  #app
    header-component

</template>

<script>
  import HeaderComponent from './Header.vue';

  export default {
    data() {
      return {
        currentPage: 1
      }
    },
    components: {
      HeaderComponent
    }
  }
</script>
