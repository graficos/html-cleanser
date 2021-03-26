# HTML Cleanser ✨

> Demo: https://htmlcleanser.netlify.app/ (Try to hack me maybe? ❤)

Remove unwanted HTML tags from user's input or untrusted sources:

```js
import { cleanHTML } from '@graficos/html-cleanser'

const cleanString = cleanHTML(/* your source here */)
```

Optionally you can pass a second parameter allowed tags. Default is: `'<i><em><span><p>'`.

There are some HTML tags that are never allowed: `<script>`, `<img>`, `<a>`, `<object>`, `<iframe>`, `<embed>`, `<input>`, `<textarea>`, `<button>`, `<link>`, `<style>` and `<base>`. Those will throw an error if passed.

See [`html-cleanser.spec.js`](./html-cleanser.spec.js) for more examples.

Feel free to contribute and suggest more rules ;)

## Installation

```
npm i @graficos/html-cleanser
```

## Demo

https://htmlcleanser.netlify.app/

## Benchmarks

```
Sources:
  - "Short Page"  (length =  6493)
  - "Large Page"  (length = 58136)
  - "GA <script>" (length =   313)

Running 🐇...

  "Short Page"  x     1,948 ops/sec ±0.37% (90 runs sampled)
  "Large Page"  x       849 ops/sec ±0.73% (91 runs sampled)
  "GA <script>" x    90,793 ops/sec ±0.28% (91 runs sampled)
```
