export default (store) => ({
    path: 'chapter1',
    /*  Async getComponent is only invoked when route matches   */
    getComponent(nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
            and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
                dependencies for bundling   */
            const Counter = require('./components/Chapter1View').default

            /*  Return getComponent   */
            cb(null, Counter)

            /* Webpack named bundle   */
        }, 'chapter1')
    }
})
