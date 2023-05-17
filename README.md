# TQ

This is a tiny library for creating HTML elements in a declarative way. It's only 1.5kb minified and gzipped.
Bu bir mini html element oluşturma kütüphanesidir. Sadece 1.5kb minified ve gzipped.

Metodlar Türkçe olarak yazılmıştır.
Methods are written in Turkish.


# USAGE / KULLANIM


` let $ = new TQ()`
> TQ is a class. You can create a new instance of it.


`$.olustur(tag: any, features: any, content: any): any`
> You can create an element with this method. It returns an element.
`tag` is tagName of element. `features` is attributes of element. `content` is content of element.

`$.bul(cssSelector: string): any`
> You can get an element with this method. It returns an element.

`$.ekle(target: cssSelector, element: any)`
> You can add an element to another element with this method.

`$.sil(cssSelector: string)`
> You can delete an element with this method.

`$.olayEkle(cssSelector: string, eventType: string, eventHandler)`
> You can add an event to an element with this method.

## Example / Örnek

```
let $ = new TQ()

let container = $.olustur('div', {id: 'container', class: 'container'}, 'Hello World!')

let button = $.olustur('button', {id: 'button', class: 'button'}, 'Click Me!')

$.ekle('#container', button)

$.olayEkle('#button', 'click', () => {
  $.sil('#container')
})

```

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="tquery.min.js"></script>
</head>
<body>
  <div id="kok"></div>
  <script src="./app.js"></script>
</body>
</html>
```