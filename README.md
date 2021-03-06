# mathsjs-cmathml

*Currently it is not maintained.
See also the project https://github.com/insysbio/mathjs-mathml which provides the similar functionality but does not use DOM.*

## Description

Extends mathjs http://mathjs.org/ library by function translating the internal object to content MathML https://www.w3.org/Math/

## Usage

Addon can be used in both NodeJS and in the browser.

## Installation

```
npm install mathjs-cmathml
```

## nodejs

NodeJS version uses external DOM from library `xmldom`.
```javascript
const math = require('mathjs');
math.import(require('mathjs-cmathml'));

let doc = math
    .parse('x*sin(y/z)')
    .toCMathML();
let mathml = doc.toString(); // stringify MathML
console.log(mathml);
```
## Browser

Browser version can be downloaded from https://github.com/insysbio/mathsjs-cmathml/tree/master/dist

Browser version uses internal default DOM.
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/4.2.2/math.min.js"></script>
<script src="./mathjs.toCMathML.min.js"></script>
```

```javascript
math.import(cmathml);

let doc = math
    .parse('x*sin(y/z)')
    .toCMathML();
let mathml = new XMLSerializer().serializeToString(doc); // stringify MathML
console.log(mathml);
```
## webpack

The another entry point is used for webpack building. Webpack version uses browser DOM.
```javascript
const math = require('mathjs');
math.import(require('mathsjs-cmathml/webpack'));

let doc = math
    .parse('x*sin(y/z)')
    .toCMathML();
let mathml = new XMLSerializer().serializeToString(doc); // stringify MathML
console.log(mathml);
```
## Maintainers

 - Viktoria Tkachenko @vetedde
 - Evgeny Metelkin @metelkin

## Copyright

InSysBio, Moscow, 2017-2018
http://insysbio.com
