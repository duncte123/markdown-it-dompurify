# Markdown-it Dompurify
Purifying the dom before it ever reaches markdown-it.

This is achieved by injecting this plugin's rule before the `normalize` core rule.

# Installing
With NPM
```npm i markdown-it-dompurify```
With Yarn
```yarn add markdown-it-dompurify```

# Usage
There are currently no options to configure, there are future plans that allow for passing options directly to dompurify
```js
const MarkdownIt = require('markdown-it');
const dompurifyPlugin = require('markdown-it-dompurify');

const markdown = new MarkdownIt()
            .use(dompurifyPlugin);
```




## Using with nuxt.js/next.js
Under the hood we use `isomorphic-dompurify`, because of that you don't need to do anything fancy to use this plugin with nuxt or next.
