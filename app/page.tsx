import Input from '@/components/Input'
import Filter from '@/components/Filter'

export default function Page() {
	return (
		<div className='w-full h-fit bg-lightBackground grow flex flex-col gap-12 px-6 py-8 dark:bg-darkBackground'>
			<div className='w-full h-fit flex flex-col gap-12 md:flex-row md:justify-between md:px-16'>
				<Input />
				<Filter />
			</div>
		</div>
	)
}
