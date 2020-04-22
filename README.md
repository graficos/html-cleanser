# HTML Cleanser ✨

Remove unwanted HTML tags from user's input or untrusted sources:

```js
import { cleanHTML } from 'html-cleanser'

const cleanString = cleanHTML(/* your source here */)
```

Optionally you can pass a second parameter allowed tags. Default is: `'<i><em><span><p>'`.

There are some HTML tags that are never allowed: `<script>`, `<img>`, `<a>`, `<object>`, `<iframe>`, `<embed>`, `<input>`, `<textarea>`, `<button>`, `<link>`, `<style>` and `<base>`. Those will throw an error if passed.

See [`html-cleanser.spec.js`](./html-cleanser.spec.js) for more examples.

Feel free to contribute and suggest more rules ;)

## Installation

```
npm i gist:43be7fbcc252709bcd7148ec9da8578a
```

## Benchmarks 

```
Sources:
  - "Short Page"  (length =  6493)
  - "Large Page"  (length = 58136)
  - "GA <script>" (length =   313)

Running 🐇...

  "Short Page"  x    1,795 ops/sec ±1.79% (82 runs sampled)
  "Large Page"  x      834 ops/sec ±0.72% (90 runs sampled)
  "GA <script>" x  106,644 ops/sec ±0.33% (90 runs sampled)
```
