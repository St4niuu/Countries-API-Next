import React from 'react'

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}): JSX.Element {
	return (
		<>
			<head />
			<body>{children}</body>
		</>
	)
}
