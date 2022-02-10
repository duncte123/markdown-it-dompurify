module.exports = function markdownitDommpurify () {
    const lib = require('isomorphic-dompurify');
    const createDOMPurify = lib && lib.default || lib;
    const dompurify = createDOMPurify();

    if (!dompurify.isSupported) {
        throw new Error('Dompurify is not supported in your current environment.');
    }

    return function dompurifyPlugin (md) {
        md.core.ruler.before('normalize', 'purify_dom', function purify_dom(state) {
            if (dompurify.isSupported) {
                state.src = dompurify.sanitize(state.src);
            }
        });
    }
};
