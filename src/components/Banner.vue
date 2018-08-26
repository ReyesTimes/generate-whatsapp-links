<template lang="pug">
  .banner
    h1 {{ titleBanner }}
</template>

<script>
  export default {
    props: ['titleBanner']
  }
</script>

<style lang="scss">
  @import '../sass/general.scss';

  .banner {
    background-color: $red;
    color: $white;
  }
</style>
