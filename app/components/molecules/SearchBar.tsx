import { Form, useSearchParams, useSubmit } from '@remix-run/react'
import { useId } from 'react'
import { useDebounce, useIsPending } from '#app/utils/misc.tsx'
import { Icon } from '../atoms/Icon'
import { Input } from '../atoms/Input.tsx'
import { Label } from '../atoms/Label.tsx'
import { StatusButton } from './StatusButton.tsx'

export function SearchBar({
	status,
	autoFocus = false,
	autoSubmit = false,
}: {
	status: 'idle' | 'pending' | 'success' | 'error'
	autoFocus?: boolean
	autoSubmit?: boolean
}) {
	const id = useId()
	const [searchParams] = useSearchParams()
	const submit = useSubmit()
	const isSubmitting = useIsPending({
		formMethod: 'GET',
		formAction: '/users',
	})

	const handleFormChange = useDebounce((form: HTMLFormElement) => {
		submit(form)
	}, 400)

	return (
		<Form
			method="GET"
			action="/users"
			className="flex flex-wrap items-center justify-center gap-2"
			onChange={e => autoSubmit && handleFormChange(e.currentTarget)}
		>
			<div className="flex-1">
				<Label htmlFor={id} className="sr-only">
					Search
				</Label>
				<Input
					type="search"
					name="search"
					id={id}
					defaultValue={searchParams.get('search') ?? ''}
					placeholder="Search"
					className="w-full"
					autoFocus={autoFocus}
				/>
			</div>
			<div>
				<StatusButton
					type="submit"
					status={isSubmitting ? 'pending' : status}
					className="flex w-full items-center justify-center bg-white hover:bg-gray-200"
				>
					<Icon name="magnifying-glass" size="md" color="black" />
					<span className="sr-only">Search</span>
				</StatusButton>
			</div>
		</Form>
	)
}
