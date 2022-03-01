module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	plugins: [
		require('daisyui'),
	],
	daisyui: {
		themes: [
			{
				dark: {
					...require("daisyui/src/colors/themes")["[data-theme=dark]"],
					accent: "#00e849",
					"accent-focus": "#009830",
					"base-100": "#272a30"
				},
			},
		],
	},
};
