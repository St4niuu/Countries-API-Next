'use client'

import React from 'react'
import { getContext } from '@/context/AppContext'

export default function ThemeSetter({
	children,
}: {
	children: React.ReactNode[]
}): JSX.Element {
	return (
		<div className={getContext().theme === 'dark' ? 'dark' : ''}>
			{children}
		</div>
	)
}
