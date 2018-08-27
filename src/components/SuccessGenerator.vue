<template lang="pug">
    .success-generator
      div.logo
        img(src="~@/assets/hanna1.svg")
      div.success-icon
        img(src="~@/assets/success1.svg")
      p Se ha copiado la liga con éxito

</template>

<style lang="scss" scoped>
  @import "~@/sass/general.scss";

  .success-generator {
    position: absolute;
    top: 57px;
    height: 91%;
    width: 100%;
    background-color: $white;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo {
      width: 54%;

      img {
        width: 100%;
      }
    }
  }
</style>
