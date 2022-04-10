module.exports = {
    mode: "production",
    entry: `${__dirname}/src/set.js`,
    output: {
        path: `${__dirname}/dist`,
        library: 'set',
        libraryTarget: 'umd',
        filename: 'set.min.js',
        auxiliaryComment: 'Test Comment',
        environment: {
			arrowFunction: false
		},
    },
};