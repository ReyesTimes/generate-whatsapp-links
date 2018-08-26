<template lang="pug">
  .skeleton
    .block
    .block
    .block
    .block
    .block
</template>

<style lang="scss">
$base-color: #ddd;
$shine-color: #EFEFEF;
$animation-duration: 0.6s;

@mixin background-gradient {
  background-image: linear-gradient(90deg, $base-color 0px, $shine-color 40px, $base-color 80px);
  background-size: 600px;
}

.skeleton {
  width: 220px;

  .block {
    width: 140px;
    height: 16px;
    margin-top: 12px;
    border-radius: 7px;

    @include background-gradient;
    animation: shine-lines $animation-duration infinite linear;
  }


  .block ~ .block {
    background-color: #ddd;
  }
}

@keyframes shine-lines {
  0% {
    background-position: -100px;
  }

  40%, 100% {
    background-position: 140px;
  }
}
</style>
