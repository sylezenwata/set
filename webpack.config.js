module.exports = {
    mode: "production",
    output: {
        path: `${__dirname}/dist`,
        library: 'Set',
        libraryTarget: 'umd',
        filename: 'set.min.js',
        auxiliaryComment: 'Test Comment',
        environment: {
			arrowFunction: false
		},
    },
};