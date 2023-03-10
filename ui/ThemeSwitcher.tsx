/* eslint-disable indent */
'use client'

import React from 'react'
import { getContext } from '@/context/AppContext'

export default function ThemeSwitcher(): JSX.Element {
	const context = getContext()

	function handleThemeChange(theme: string) {
		switch (theme) {
			case 'light':
				return context.setTheme('dark')
			case 'dark':
				return context.setTheme('light')
		}
	}

	return (
		<div
			className='font-medium flex gap-x-2 cursor-pointer transition-all duration-75 active:scale-90'
			onClick={() => handleThemeChange(context.theme)}
		>
			<img
				className='w-[25px] h-[25px]'
				src={context.theme === 'light' ? '/moon.svg' : '/sun.svg'}
			/>
			<p>{context.theme === 'light' ? 'Dark Mode' : 'Light Mode'}</p>
		</div>
	)
}
