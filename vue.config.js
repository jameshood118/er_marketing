var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return

    return {
      plugins: [
        new PrerenderSpaPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          [
            '/',
            '/thanks',
            '/products',
            '/legal',
            '/pricing',
            '/contact',
            '/resources',
            '/products/media',
            '/products/plan',
            '/products/builder'
          ],
          {
            // options
          }
        )
      ]
    }
  }
}
