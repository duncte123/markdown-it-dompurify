module.exports = function markdownitDommpurify () {
    const DOMPurify = require('isomorphic-dompurify');

    return function dompurifyPlugin (md) {
        md.core.ruler.before('normalize', 'purify_dom', function purify_dom(state) {
            state.src = DOMPurify.sanitize(state.src);
        });
    }
};
