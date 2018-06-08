const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');
const withManifest = require('next-manifest');

module: {
    loaders: [
        {
            exclude: /node_modules/,
            loader: ['svg-react-loader'],
            query: {
                classIdPrefix: '[name]-[hash:8]__',
                propsMap: {
                    fillRule: 'fill-rule'
                },
            }
        }
    ]
}

module.exports = withManifest(withOffline(withSass({
  manifest: {
    name: 'nicer00ster\'s portfolio',
    short_name: 'nicer00ster',
    display: 'standalone',
    background_color: '#5bb6ff',
    theme_color: '#ffc18e',
    description: 'Portfolio built with NextJS',
    icons: {
      src: './static/icons/icon-72x72.png',
      cache: true
    }
  }
})));
