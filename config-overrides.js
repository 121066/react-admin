const { override, adjustStyleLoaders } = require('customize-cra');
const webpack = require('webpack');
module.exports = {
    webpack: override(
        adjustStyleLoaders((rule) => {
            if (rule.test.toString().includes('scss')) {
                rule.use.push({
                    loader: require.resolve('sass-resources-loader'),
                    options: {
                        resources: ['./src/style/index.scss'],
                    },
                });
            }
        }),
    ),
};
