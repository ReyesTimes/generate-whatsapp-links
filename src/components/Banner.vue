<template lang="pug">
  .banner
    h1 {{ titleBanner }}
</template>

<script>
  export default {
    props: ['titleBanner']
  }
</script>

<style lang="scss" scoped>
  @import '../sass/general.scss';

  .banner {
    background-color: $red;
    color: $white;
    padding: 10px;

    h1 {
      font-size: 1.1em;
      text-transform: uppercase;
    }
  }
</style>
