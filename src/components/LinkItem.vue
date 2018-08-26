<template lang="pug">
    li
      div
        div
          div
            div Fecha
            div {{ item.date }}
          div
            div Mensaje
            div {{ item.msg }}
        div
          div
            div Cerrar
            div {{ item.phone }}
          div
            div
              div Tasa de apertura
              div {{ item.openingRate }}
            div.actions
              button.red icon
              button.black icon

</template>

<script>
  export default {
    props: ['item']
  }
</script>
