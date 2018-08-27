const decodeFilter = {}

function decodeConvert (value) {
  return decodeURIComponent(value)
}

decodeFilter.install = function (Vue) {
  Vue.filter('decode', (val) => {
    return decodeConvert(val)
  })
}

export default decodeFilter
