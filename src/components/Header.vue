<template lang="pug">
    header.header
      nav
        ul
          li
            router-link(to="/") Generar liga
          li
            router-link(to="/history") Historial de ligas
          li
            a Cerrar sesión
</template>

<script>
  export default {
    methods: {
      closeSession() {
        
      }
    }
  }
</script>
