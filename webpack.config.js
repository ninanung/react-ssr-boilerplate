module.exports = function(env) {
    if (env === 'dev') return require('./webpack.client');
    return require('./webpack.client');
};
