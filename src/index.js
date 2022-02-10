const DOMPurify = require('isomorphic-dompurify');

module.exports = function dompurifyPlugin (md) {
    md.core.ruler.before('normalize', 'purify_dom', function purify_dom(state) {
        state.src = DOMPurify.sanitize(state.src);
    });
};
