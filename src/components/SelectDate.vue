<template lang="pug">
  div
    div
      label Fecha desde
      datepicker(
          v-model="startDateValue"
          format="d/MM/yyyy"
          placeholder="--/--/----"
          :disabledDates="disabledStartDate"
      )
      span icon
    div
      label Fecha hasta
      datepicker(
          v-model="endDateValue"
          format="d/MM/yyyy"
          placeholder="--/--/----"
          @selected="changeDate('end')"
          :disabledDates="disabledEndDate"
      )
      span icon
</template>

<script>
  import Datepicker from 'vuejs-datepicker';
  import { es } from 'vuejs-datepicker/dist/locale';

  export default {
    props: ['startDate', 'endDate'],
    data() {
      return {
        startDateValue: this.startDate,
        endDateValue: this.endDate,
        disabledStartDate: {},
        disabledEndDate: {},
      }
    },
    watch: {
      startDateValue(newValue, oldValue) {
        this.$set(this.disabledEndDate, 'to', this.endDateValue);
      },
      endDateValue(newValue, oldValue) {
        this.$set(this.disabledStartDate, 'to', this.startDateValue);
      }
    },
    components: {
      Datepicker
    },
    methods: {
      changeDate(type) {
        if (type === 'end') {
          this.$emit('changeDate', { type, value: this.endDateValue })
        } else if (type === 'start'){
          this.$emit('changeDate', { type, value: this.startDateValue })
        }
      }
    }
  }
</script>
