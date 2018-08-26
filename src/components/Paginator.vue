<template lang="pug">
    div
      button.transparent(
          @click="changePage(currentPage, 'left')"
          :disabled="isDisabled('left')"
      ) |<
      button.transparent(
        v-for="page in totalPages"
        @click="changePage(page)"
        :class="(page === currentPage) ? 'active': ''"
      ) {{ page }}
      button.transparent(
          @click="changePage(currentPage, 'right')"
          :disabled="isDisabled('right')"
      ) |>
</template>

<script>
  export default {
    props: ['totalPages', 'currentPage'],
    methods: {
      changePage(page, side) {
        if (!side) {
          this.$emit('changePage', page);
        } else if (side === 'left') {
          this.$emit('changePage', this.currentPage - 1);
        } else if (side === 'right') {
          this.$emit('changePage', this.currentPage + 1);
        }
      },
      isDisabled(side = 'left') {
        if (side === 'left') {
          if (this.currentPage === 1) {
            return true;
          }
        } else if (side === 'right') {
          if (this.currentPage === this.totalPages) {
            return true;
          }
        }
      }
    }
  }
</script>
