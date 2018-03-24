const Lazy = (opts = { className: 'js-lazy', attrName: 'data-src' }) => {
  return {
    items: [],

    set () {
      let items = document.getElementsByClassName(opts.className)
      items = [...items]
      this.items = items

      for (let item of this.items) {
        item.setAttribute('data-original-src', item.src)
        item.addEventListener('load', () => {
          item.classList.add('loaded')
        })
      }
    },

    load () {
      for (let item of this.items) {
        if (item.getAttribute(opts.attrName) && this.inViewport(item)) {
          item.src = item.getAttribute(opts.attrName)
          item.removeAttribute(opts.attrName)
        }
      }

      this.clean()
    },

    clean () {
      this.items = this.items.filter(i => i.getAttribute(opts.attrName))
    },

    init () {
      this.registerListener('load', () => {
        this.set()
        this.load()
      })
      this.registerListener('scroll', () => {
        this.load()
      })
      this.registerListener('resize', () => {
        this.load()
      })
    },

    inViewport (el) {
      const rect = el.getBoundingClientRect()
      const docEl = document.documentElement
      const height = window.innerHeight || docEl.clientHeight
      const width = window.innerWidth || docEl.clientWidth

      return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= height &&
        rect.left <= width
      )
    },

    registerListener (eventName, fn) {
      if (window.addEventListener) {
        window.addEventListener(eventName, fn)
      } else {
        window.attachEvent(`on${eventName}`, fn)
      }
    }
  }
}

export default Lazy
