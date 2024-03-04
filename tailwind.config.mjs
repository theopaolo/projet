/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent : "#877b9d",
				accent2 : "#7153ac",
				secondary: '#FFC857',
				tertiary: '#C8DBBE',
				light: '#f0e6df',
				light2: 'rgba(200,190,210,0.6)',
				dark: '#5c4a3d',
			},
			fontSize: {
			  'fluid-3xl': 'clamp(1.2rem, 1.5vw, 1.7rem)',
			},
			fontFamily: {
				serif: ["Cinzel Decorative", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
}
