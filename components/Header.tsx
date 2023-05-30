'use client'

import { useAppContext } from '@/context/AppContext'

export default function Header(): JSX.Element {
	const { theme, setTheme } = useAppContext()

	function handleThemeChange() {
		switch (theme) {
			case 'light':
				return setTheme('dark')
			case 'dark':
				return setTheme('light')
		}
	}

	return (
		<div className='w-full h-28 bg-white flex justify-between items-center px-8'>
			<div className='text-big font-heavy'>Where in the world?</div>
			<div
				className='h-1/4 flex items-center gap-2 transition-all duration-200 active:scale-90'
				onClick={handleThemeChange}
			>
				<img
					className='w-fit h-full'
					src={theme === 'light' ? '/moon.svg' : '/sun.svg'}
					alt='theme-icon'
				/>
				<div className='font-heavy'>
					{theme === 'light' ? 'Dark mode' : 'Light mode'}
				</div>
			</div>
		</div>
	)
}
