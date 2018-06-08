const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');
const compose = require("recompose/compose").default;

module: {
    loaders: [
        {
            test: /\.svg$/,
            exclude: /node_modules/,
            loader: ['svg-react-loader'],
            query: {
                classIdPrefix: '[name]-[hash:8]__',
                filters: [
                    function (value) {
                        // ...
                        this.update(newvalue);
                    }
                ],
                propsMap: {
                    fillRule: 'fill-rule',
                    foo: 'bar'
                },
                xmlnsTest: /^xmlns.*$/
            }
        }
    ]
}

module.exports = compose(withOffline, withSass);

// module.exports = withSass({
//   webpack(config, { dev }) {
//     if (dev) {
//       config.devtool = 'cheap-module-source-map';
//     }
//     return config;
//   }
// });
