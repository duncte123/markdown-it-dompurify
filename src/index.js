const { createDOMPurify } = require('dompurify');

export function markdownitDommpurify (windowObj = window) {
    windowObj = windowObj || window;
    const dompurify = createDOMPurify(windowObj);

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
