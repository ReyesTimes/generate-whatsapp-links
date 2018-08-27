var Clipboard = require('clipboard');

module.exports = {
    bind(el, binding, vnode, oldVnode) {
        console.log(el);
        el.addEventListener('click', (e) => {
          e.preventDefault()
          let $tooltip = document.createElement('span')

          $tooltip.classList.add('tooltip')
          $tooltip.innerHTML = '✓'

          el.appendChild($tooltip)

          setTimeout(() => {
             el.removeChild($tooltip);
          }, 480)
        }, false)

        new Clipboard(el);
    }
}
