module.exports = {
	chainWebpack: (config) => {
		const svgRule = config.module.rule('svg');

		svgRule.uses.clear();

		svgRule
			.use('babel-loader')
			.loader('babel-loader')
			.end()
			.use('vue-svg-loader')
			.options({
				svgo: {
					plugins: [{ removeViewBox: false }],
				},
			})
			.loader('vue-svg-loader');
	},
};
