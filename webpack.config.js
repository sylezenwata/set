module.exports = {
    mode: "production",
    output: {
        path: `${__dirname}/dist`,
        library: 'SET',
        libraryTarget: 'umd',
        filename: 'set.min.js',
        auxiliaryComment: 'Test Comment',
        environment: {
			arrowFunction: false
		},
    },
};