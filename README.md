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
const dompuriftyPlugin = require('markdown-it-dompurify');

const markdown = new MarkdownIt()
            .use(dompuriftyPlugin()); // we're returning a function here
```


## Using with nuxt.js/next.js
To use this plugin without a browser attached you can use [JSDOM](https://www.npmjs.com/package/jsdom) and inject that into the plugin like this
```js
const MarkdownIt = require('markdown-it');
const dompuriftyPlugin = require('markdown-it-dompurify');
const { JSDOM } = require('jsdom');
const window = new JSDOM('').window;

const purify = dompuriftyPlugin(window);

const markdown = new MarkdownIt()
    .use(purify); // We've used the function to inject a custom dom
```
