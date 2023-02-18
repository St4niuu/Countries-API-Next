'use client'

import React from 'react'
import { getContext } from '@/context/AppContext'

export default function ThemeSetter({
	children,
}: {
	children: React.ReactNode[]
}): JSX.Element {
	return (
		<div
			className={'h-full flex flex-col gap-y-8 transition-colors duration-100 '.concat(
				getContext().theme === 'dark'
					? 'dark bg-darkBackground'
					: 'bg-lightBackground'
			)}
		>
			{children}
		</div>
	)
}
