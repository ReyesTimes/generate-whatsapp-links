<template lang="pug">
  form(@submit.prevent="submitSearch")
    div.search-container
      input(
        type="text"
        v-model="searchValue"
      )
      span icon
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
