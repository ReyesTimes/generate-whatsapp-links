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
    color: #fff;
    padding: 7px;
    width: 100%;

    &.green {
      background-color: #1C9F8A;
    }

    &.red {
      background-color: #E82551;
    }
  }
</style>
