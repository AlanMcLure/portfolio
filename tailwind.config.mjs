/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				accent: {
					DEFAULT: '#D71921',
					light: '#FF4D55',
				},
			},
			fontFamily: {
				dot: ['"Doto Variable"', 'ui-monospace', 'monospace'],
				mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
		},
	},
	plugins: [],
}
