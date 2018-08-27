<template lang="pug">
  #app
    router-view
</template>

<script>
import { auth } from '@/services/login.js';

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
    margin: 0px;
    font-family: $sourcefont;
  }

  h1 {
    margin: 0px;
  }

  ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  input, .btn {
    min-height: 40.50px;
  }

  * {
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;
  }

  input {
    padding: 0.8em 1em;
    text-align: center;
    border: 1px solid #e1e1e1;
  }

  .btn{
    border: 1px solid $white;
    text-align: center;
    text-transform: uppercase;
    color: $white;
    position: relative;
    font-weight: bold;
    padding: 0.8em 1.1em;
    width: 100%;
    outline:0;
    -webkit-box-shadow: 1px 2px 3px 0px rgba(64, 64, 64, 0.52);
    -moz-box-shadow: 1px 2px 3px 0px rgba(64, 64, 64, 0.52);
    box-shadow: 1px 2px 3px 0px rgba(64, 64, 64, 0.52);

    &.green {
      background-color: $green;
    }

    &.red {
      background-color: $red;
    }

    &.blue {
      background-color: $blue;
    }

    &.transparent {
      background-color: transparent;
      border: 0px solid transparent;
      color: black;
      box-shadow: none;
    }

    &.small {
      width: auto;
    }

    .spinner {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      top: 0.4em;
    }
  }

  .error {
    color: $red;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .field {
    margin-bottom: 18px;

    textarea {
      width: 100%;
      min-height: 100px;
    }
  }

  .field-value {
    background-color: #34495e;
    color: #fff;
    text-align: left;
    width: 100%;
    min-height: auto;
    padding: 0.6em 1em;
  }

  .calendar {
    right: 0%;
  }

  label {
    margin-bottom: 0.5em;
    display: block;
  }

</style>
