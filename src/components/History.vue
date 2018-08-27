<template lang="pug">
  #app
    header-component
    banner(
      :titleBanner="'Historia de ligas creadas'"
    )
    .container
      select-date(
          :startDate="startDate"
          :endDate="endDate"
          @changeDate="changeDate"
      )
      search(
        :search="search"
        @searchValue="searchValue"
      )
      paginator(
        :totalPages="totalPages"
        :currentPage="currentPage"
        @changePage="changePage"
      )
      skeleton-ui(
        v-if="isLoading"
      )
      ul(v-for="item in list" v-if="!isLoading")
        LinkItem(:item="item")
      paginator(
        :totalPages="totalPages"
        :currentPage="currentPage"
        @changePage="changePage"
      )
</template>

<script>
  import HeaderComponent from '@/components/layout/Header.vue';
  import Banner from '@/components/Banner.vue';
  import SelectDate from '@/components/SelectDate.vue';
  import LinkItem from '@/components/LinkItem.vue';
  import Paginator from "@/components/Paginator.vue";
  import Search from '@/components/Search.vue';
  import SkeletonUi from '@/components/loading/SkeletonUi.vue';

  import { getLinks } from '@/services/links';

  import mixinAuth from '@/mixins/mixinAuth.js';

  export default {
    mixins: [mixinAuth],
    data() {
      return {
        currentPage: 1,
        totalPages: 4,
        list: [],
        search: '',
        startDate: '',
        endDate: '',
        isLoading: true
      }
    },
    methods: {
      changePage(page) {
        this.currentPage = page

        this.updateLinks()
      },
      searchValue(value) {
        this.search = value

        this.updateLinks()
      },
      changeDate(type, value) {
        if (type === 'end') {
          this.endDate = value
        } else if (type === 'start') {
          this.startDate = value
        }

        this.updateLinks()
      },
      updateLinks() {
        this.isLoading = true

        getLinks()
          .then((list) => {
            this.isLoading = false
            this.list = list
          })
      }
    },
    components: {
      HeaderComponent,
      Banner,
      SelectDate,
      Search,
      LinkItem,
      Paginator,
      SkeletonUi,
    },
    created() {
      this.auth()
      this.updateLinks()
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 3% 4%;
  }
</style>
