/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{ts,tsx}',
		'./context/**/*.{ts,tsx',
		'./components/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				darkText: 'hsl(0, 0%, 100%)',
				darkElement: 'hsl(209, 23%, 22%)',
				darkBackground: 'hsl(207, 26%, 17%)',
				lightText: 'hsl(200, 15%, 8%)',
				lightInput: 'hsl(0, 0%, 52%)',
				lightElement: 'hsl(0, 0%, 100%)',
				lightBackground: 'hsl(0, 0%, 98%)',
			},
		},
		fontSize: {
			small: '14px',
			big: '16px',
		},
		fontFamily: {
			sans: ['Nunito Sans', 'sans-serif'],
		},
		fontWeight: {
			light: 300,
			medium: 600,
			heavy: 800,
		},
		screens: {
			md: '620px',
		},
	},
	darkMode: 'class',
	plugins: [],
}
