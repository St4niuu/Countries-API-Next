import React, { use } from 'react'

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}): JSX.Element {
	return (
		<html lang='en'>
			<head />
			<body>{children}</body>
		</html>
	)
}
