module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('daisyui'),
	],
	theme: {
		extend: {
			fontSize: {
				'tiny': '.655rem',
			}
		}
	},
	daisyui: {
		themes: [
			{
				dark: {
					...require("daisyui/src/colors/themes")["[data-theme=dark]"],
					accent: "#00e849",
					"accent-focus": "#009830",
					primary: "#00e849",
					"primary-focus": "#00e849",
					"primary-content": "rgb(48, 48, 48)",
					"base-100": "#272a30",
					"accent-content": "rgb(48, 48, 48)"
				},
				light: {
					...require("daisyui/src/colors/themes")["[data-theme=autumn]"],
					accent: "#a60dff",
					"accent-focus": "#6f00b0",
					primary: "#a60dff",
					"primary-focus": "#a60dff",
					"primary-content": "rgb(235, 236, 240)",
					// "base-100": "#272a30"
				},
			},
		],
	},
};
