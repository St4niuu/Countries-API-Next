import React from 'react'

export default function Loading() {
	return (
		<div className='w-full grow flex justify-center items-center'>
			<div className='w-[40px] h-[40px] bg-black rounded-[50%] overflow-hidden relative animate-spin dark:bg-white'>
				<div className='w-[20px] h-[20px] bg-gray-400 absolute top-0 left-0'></div>
				<div className='w-[20px] h-[20px] bg-white rounded-[50%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] dark:bg-darkBackground'></div>
			</div>
		</div>
	)
}
