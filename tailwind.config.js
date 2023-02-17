/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{ts,tsx}',
		'./context/**/*.{ts,tsx}',
		'./ui/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				darkElement: 'hsl(209, 23%, 22%)',
				darkBackground: 'hsl(207, 26%, 17%)',
				lightText: 'hsl(200, 15%, 8%)',
				lightInput: 'hsl(0, 0%, 52%)',
				lightBackground: 'hsl(0, 0%, 98%)',
			},
		},
		fontSize: {
			small: '14px',
			big: '16px',
		},
		fontWeight: {
			light: 300,
			medium: 600,
			bold: 800,
		},
		fontFamily: {
			sans: ['Nunito Sans', 'sans-serif'],
		},
		screens: {
			md: '620px',
		},
	},
	darkMode: 'class',
	plugins: [],
}
