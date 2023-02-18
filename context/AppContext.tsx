'use client'

import React, { useContext, createContext, useState, useEffect } from 'react'

type AppContextType = {
	theme: string
	setTheme: React.Dispatch<React.SetStateAction<string>>
	filter: string
	setFilter: React.Dispatch<React.SetStateAction<string>>
	search: string
	setSearch: React.Dispatch<React.SetStateAction<string>>
	page: number
	setPage: React.Dispatch<React.SetStateAction<number>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export default function AppContextProvider({
	children,
}: {
	children: React.ReactNode
}): JSX.Element {
	const [theme, setTheme]: [
		string,
		React.Dispatch<React.SetStateAction<string>>
	] = useState('')

	const [filter, setFilter]: [
		string,
		React.Dispatch<React.SetStateAction<string>>
	] = useState('')

	const [search, setSearch]: [
		string,
		React.Dispatch<React.SetStateAction<string>>
	] = useState('')

	const [page, setPage]: [
		number,
		React.Dispatch<React.SetStateAction<number>>
	] = useState(0)

	const context: AppContextType = {
		theme: theme,
		setTheme: setTheme,
		filter: filter,
		setFilter: setFilter,
		search: search,
		setSearch: setSearch,
		page: page,
		setPage: setPage,
	}

	useEffect(() => {
		if (localStorage.getItem('APP_THEME')) {
			setTheme(localStorage.getItem('APP_THEME') as string)
		} else {
			setTheme('light')
		}
	}, [])

	useEffect(() => {
		if (theme !== '') {
			localStorage.setItem('APP_THEME', theme)
		}
	}, [theme])

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export function getContext() {
	const context = useContext(AppContext)
	if (context === undefined) {
		throw new Error('Out of contexts providers range')
	}

	return context
}
