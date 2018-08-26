<template lang="pug">
  #app
    header-component
    banner(
      :titleBanner="'Historia de ligas creadas'"
    )
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
    ul(v-for="item in list")
      LinkItem(:item="item")
    paginator(
      :totalPages="totalPages"
      :currentPage="currentPage"
      @changePage="changePage"
    )
</template>

<script>
  import HeaderComponent from '@/components/Header.vue';
  import Banner from '@/components/Banner.vue';
  import SelectDate from '@/components/SelectDate.vue';
  import LinkItem from '@/components/LinkItem.vue';
  import Paginator from "@/components/Paginator.vue";
  import Search from '@/components/Search.vue';
  import SkeletonUi from '@/components/loading/SkeletonUi.vue';

  export default {
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
        this.currentPage = page;
      },
      searchValue(value) {
        this.search = value;
      },
      changeDate(type, value) {
        if (type === 'end') {
          this.endDate = value;
        } else if (type === 'start') {
          this.startDate = value;
        }
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
      setTimeout(() => {
        this.isLoading = false;
        this.list = [
          {
            id: 1,
            phone: 3318078464,
            msg: 'Necesito la capacitacion',
            date: '12/04/2018',
            openingRate: 65
          },
          {
            id: 2,
            phone: 3318078464,
            msg: 'Necesito la capacitacion',
            date: '12/04/2018',
            openingRate: 20
          },
        ];
      },1000);
    }
  }
</script>
