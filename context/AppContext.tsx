'use client'

import React, { useState, useContext, useEffect, createContext } from 'react'

type AppContextType = {
	inputValue: string
	setInputValue: (value: string) => void
	filterValue: string
	setFilterValue: (value: string) => void
	theme: string
	setTheme: (value: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export default function AppContextProvider({
	children,
}: {
	children: React.ReactNode
}): JSX.Element {
	const [inputValue, setInputValue] = useState<string>('')

	const [filterValue, setFilterValue] = useState<string>('')

	const [theme, setTheme] = useState<string>('')

	const context = {
		inputValue,
		setInputValue,
		filterValue,
		setFilterValue,
		theme,
		setTheme,
	}

	useEffect(() => {
		if (localStorage.getItem('APP_THEME'))
			setTheme(localStorage.getItem('APP_THEME') as string)
		else
			window.matchMedia('(prefers-color-scheme: dark)').matches
				? setTheme('dark')
				: setTheme('light')
	}, [])

	useEffect(() => {
		localStorage.setItem('APP_THEME', theme)
	}, [theme])

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export function useAppContext() {
	const context = useContext(AppContext)
	if (!context) throw new Error('Cannot get context!')
	return context
}
