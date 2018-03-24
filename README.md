# Easy Lazy [![npm version](https://badge.fury.io/js/easy-lazy.svg)](https://badge.fury.io/js/easy-lazy)

Based on Robin Osborne's lazy loading technique. This is an ES6-updated
alternative with configuration options.

## Use

```html
<img src="placeholder.png" data-src="/path/to/image.png" class="js-lazy" />
```

```javascript
const lazy = Lazy({
  className: 'js-lazy',
  attrName: 'data-src'
})

lazy.init()

// Or use default configuration...

Lazy().init()
```

## Configuration

Lazy() accepts a configuration object with the following properties.

### className (default: 'js-lazy')

The class name of the images to lazy load.

### attrSrc (default: 'data-src')

The attribute where the image src lives.

## Transition

Adding a transition is easy using the `.loaded` class.

Here is a simple fade in:

```css
.js-lazy {
  opacity: 0;
  transition: opacity 200ms;
}

.js-lazy.loaded {
  opacity: 1;
}
```
