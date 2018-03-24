Easy Lazy Image Loader
===

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

or with default configuration

Lazy().init()
```

## Configure

There are two configuration options.

### className

The class name of the images to lazy load. Defaults to `js-lazy`.

### attrSrc

The attribute where the image src lives. Defaults to `data-src`.
