<template lang="pug">
  .select-date
    .block
      label Fecha desde
      datepicker(
          v-model="startDateValue"
          format="d/MMM/yyyy"
          placeholder="--/--/----"
          input-class="field-value"
          @selected="changeDate('start')"
          :disabledDates="disabledStartDate"
          :language="es"
      )
        span.icon(slot="afterDateInput")
          font-awesome-icon(icon="caret-down")
    .block
      label Fecha hasta
      datepicker(
          v-model="endDateValue"
          format="d/MMM/yyyy"
          placeholder="--/--/----"
          input-class="field-value"
          calendar-class="calendar"
          @selected="changeDate('end')"
          :disabledDates="disabledEndDate"
          :language="es"
      )
        span.icon(slot="afterDateInput")
          font-awesome-icon(icon="caret-down")
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
        es
      }
    },
    watch: {
      startDateValue(newValue, oldValue) {
        this.$set(this.disabledEndDate, 'to', this.startDateValue);
      },
      endDateValue(newValue, oldValue) {
        this.$set(this.disabledStartDate, 'from', this.endDateValue);
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


<style lang="scss" scoped>
  .select-date {
    margin-bottom: 10px;
    display: flex;

    .block {
      width: 48%;

      &:first-child {
        margin-right: 4%;
      }
    }

    .icon {
      color: #fff;
      position: absolute;
      top: 0px;
      right: 5%;
      display: flex;
      align-items: center;
      height: 99%;
    }
  }
</style>
