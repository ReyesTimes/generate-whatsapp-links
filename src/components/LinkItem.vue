<template lang="pug">
    li.item
      .flex.first
        div.block.date
          div Fecha
          div {{ item.date }}
        div.block.msg
          div Mensaje
          div {{ item.msg }}
      .flex
        div.block.phone
          div Cerrar
          div {{ item.phone }}
        div.block.rate
          div.child
            div Tasa de apertura
            div
              strong {{ item.openingRate }}%
          div.actions
            button.small.btn.red
              font-awesome-icon(icon="copy")
            button.small.btn.blue
              font-awesome-icon(icon="edit")

</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="scss" scoped>
  .item {
    margin-bottom: 10px;

    .flex {
      background-color: #e1e1e1;
      display: flex;
      width: 100%;

      &.first {
        border: 1px solid #fff;
      }

      @media only screen and (max-width: 375px) {
        font-size: 0.9em;
      }
    }

    .block {
      border-right: 1px solid #fff;
      padding: 6px;

      &.date {
        width: 26%;
      }

      &.msg {
        width: 74%;
      }

      &.phone {
        width: 30%;
      }

      &.rate {
        width: 70%;
        display: flex;
        text-align: center;
      }
    }

    .child {
      width: 60%;
    }

    .actions {
      width: 40%;

      .btn {
        min-height: auto;
        padding: 9px;
        margin-right: 5px;

        &:last-child {
          margin-right: 0px;
        }
      }

    }

  }
</style>
