module.exports = function(env) {
    if (env === 'dev') return require('./webpack.dev');
    return require('./webpack.dev');
};
