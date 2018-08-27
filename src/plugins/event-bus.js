/*
  Event bus help to update data in general components
*/
const EventBus = {};

EventBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue();
}

export default EventBus;
