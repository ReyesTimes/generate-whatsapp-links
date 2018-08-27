<template lang="pug">
    .paginator
      button.btn.small.transparent(
          @click="changePage(currentPage, 'left')"
          :disabled="isDisabled('left')"
      ) |<
      button.btn.small.transparent(
        v-for="page in totalPages"
        @click="changePage(page)"
        :class="(page === currentPage) ? 'active': ''"
      ) {{ page }}
      button.btn.small.transparent(
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

<style lang="scss" scoped>
  .paginator {
    text-align: center;
    margin-bottom: 10px;

    .btn {
      min-height: auto;
      padding: 0.7em 0.9em;

      &.active {
        background-color: #34495e;
        color: #fff;
      }
    }
  }
</style>
