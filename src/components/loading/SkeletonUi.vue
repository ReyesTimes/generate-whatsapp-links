<template lang="pug">
  .skeleton
    .block
    .block
    .block
</template>

<style lang="scss">
$base-color: #eeeeee;
$animation-duration: 0.6s;

.skeleton {
  width: 100%;
  margin-bottom: 10px;

  .block {
    width: 100%;
    height: 104px;
    margin-top: 12px;
    border-radius: 7px;
    background-color: $base-color;
  }
}
</style>
