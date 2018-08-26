<template lang="pug">
  #app
    router-view
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import "./sass/general.scss";

  body {
    margin: 0px
  }

  ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  .btn{
    text-align: center;
    text-transform: uppercase;
    color: $white;
    padding: 7px;
    width: 100%;

    &.green {
      background-color: $green;
    }

    &.red {
      background-color: $red;
    }
  }
</style>
