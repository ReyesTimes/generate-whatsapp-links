<template lang="pug">
  form.search(@submit.prevent="submitSearch")
    div.search-container
      input(
        type="text"
        v-model="searchValue"
        placeholder="Buscar..."
      )
      span.icon
        font-awesome-icon(icon="search")
</template>

<script>
  export default {
    props: ['search'],
    data() {
      return {
        searchValue: this.search
      }
    },
    methods: {
      submitSearch() {
        this.$emit('searchValue', this.searchValue);
      }
    }
  }
</script>

<style lang="scss">
  .search {
    margin-bottom: 10px;
  }

  .search-container {
    position: relative;

    input {
      border: 1px solid red;
      width: 100%;
      text-align: left;
      background-color: #eeeeee;
      border: 1px solid #e1e1e1;
      min-height: auto;
      padding: 0.6em 1em;
    }

    .icon {
      position: absolute;
      right: 3%;
      height: 99%;
      display: flex;
      top: 0;
      align-items: center;
    }
  }
</style>
