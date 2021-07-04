module.exports = {
    mode: "production",
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