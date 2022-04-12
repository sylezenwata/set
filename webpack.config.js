module.exports = {
    mode: "production",
    entry: `${__dirname}/src/index.js`,
    output: {
        path: `${__dirname}/dist`,
        filename: 'set.min.js',
        library: {
            name: 'set',
            type: 'umd',
        },
        // auxiliaryComment: 'Test Comment',
        environment: {
			arrowFunction: false
		},
    },
};