const withSass = require('@zeit/next-sass');
// module.exports = withSass();
module.exports = withSass({
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    }
    return config;
  }
});

module: {
    loaders: [
        {
            test: /\.svg$/,
            exclude: /node_modules/,
            loader: 'svg-react-loader',
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
