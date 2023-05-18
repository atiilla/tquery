# TQ
<img src="./tquery.png"  width="160" height="150"/><br/>
This is a tiny library for creating HTML elements in a declarative way. It's only 1.5kb minified and gzipped.
Bu bir mini html element oluşturma kütüphanesidir. Sadece 1.5kb minified ve gzipped.

Metodlar Türkçe olarak yazılmıştır.
Methods are written in Turkish.

# TQ Library Documentation

## Table of Contents
- [TQ](#tq)
- [TQ Library Documentation](#tq-library-documentation)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Reference](#api-reference)
    - [Constructor](#constructor)
    - [bul(selector)](#bulselector)
    - [olustur(tag, features, content)](#olusturtag-features-content)
    - [ekle(parentElement, childElement)](#ekleparentelement-childelement)
    - [olayEkle(element, event, handler)](#olayekleelement-event-handler)
    - [sil(selector)](#silselector)
    - [OznitelikGuncelle(selector, attributes)](#oznitelikguncelleselector-attributes)
    - [OznitelikOku(selector, attribute)](#oznitelikokuselector-attribute)
    - [AltElemanlariGetir(selector)](#altelemanlarigetirselector)
    - [IcerikGuncelle(selector, content)](#icerikguncelleselector-content)
    - [ElementDegistir(selector, newElement)](#elementdegistirselector-newelement)
    - [ElementKopyala(selector)](#elementkopyalaselector)
    - [HTMLElDonustur(htmlString)](#htmleldonusturhtmlstring)
  - [Notes](#notes)
  - [License](#license)
  - [Example / Örnek](#example--örnek)

## Introduction
TQ is a library that provides convenience for DOM operations. It simplifies working with DOM elements by offering a set of helper methods.

## Installation
The TQ library can be used by including the script file in your HTML file:
```html
<script src="path/to/tquery.min.js"></script>
```

## Usage
To use the TQ library, create an instance of the `TQ` class and call the available methods on the instance. Here's an example:

```
// Create an instance of TQ
const tq = new TQ();

// Example usage of TQ methods
const element = tq.bul('#myElement');
const newElement = tq.olustur('div', { class: 'new-element' }, 'New Element');
tq.ekle('#parentElement', newElement);
tq.olayEkle(element, 'click', handleClick);
tq.sil('#elementToRemove');
tq.OznitelikGuncelle('#myElement', { class: 'new-class' });
const value = tq.OznitelikOku('#myElement', 'data-value');
const childElements = tq.AltElemanlariGetir('#parentElement');
tq.IcerikGuncelle('#myElement', 'New content');
const content = tq.IcerikOku('#myElement');
tq.ElementDegistir('#oldElement', newElement);
const copiedElement = tq.ElementKopyala('#sourceElement');
const convertedElement = tq.HTMLElDonustur('<div>HTML string</div>');
```

## API Reference

### Constructor
Creates an instance of the TQ class.
```
constructor(props)
```

### bul(selector)
Finds and returns the first element that matches the specified selector.
``` 
bul(selector)
```

### olustur(tag, features, content)
Creates a new element with the specified tag, features and content.
```
olustur(tag, features, content)
```

### ekle(parentElement, childElement)
Adds the specified child element to the specified parent element.
```
ekle(parentElement, childElement)
```

### olayEkle(element, event, handler)
Adds an event listener to the specified element.
```
olayEkle(element, event, handler)
```

### sil(selector)
Removes the specified element from the DOM.
```
sil(selector)
```

### OznitelikGuncelle(selector, attributes)
Updates the specified element's attributes with the specified values.
```
OznitelikGuncelle(selector, attributes)
```

### OznitelikOku(selector, attribute)
Returns the value of the specified attribute of the specified element.
```
OznitelikOku(selector, attribute)
```

### AltElemanlariGetir(selector)
Returns the child elements of the specified element.
```
AltElemanlariGetir(selector)
```

### IcerikGuncelle(selector, content)
Updates the content of the specified element.
```
IcerikGuncelle(selector, content)
```

### ElementDegistir(selector, newElement)
Replaces the specified element with the specified new element.
```
ElementDegistir(selector, newElement)
```

### ElementKopyala(selector)
Returns a copy of the specified element.
```
ElementKopyala(selector)
```

### HTMLElDonustur(htmlString)
Converts the specified HTML string to an element.
```
HTMLElDonustur(htmlString)
```

## Notes
Feel free to contribute to the project by creating a pull request.

## License
Free software: GNU General Public License v3.0



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