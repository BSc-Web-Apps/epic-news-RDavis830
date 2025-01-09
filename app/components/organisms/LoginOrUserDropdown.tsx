import { Link } from '@remix-run/react'
import { useOptionalUser } from '#app/utils/user'
import { Button } from '../atoms/Button'
import UserDropdown from '../molecules/UserDropDown'

export default function LoginOrUserDropdown() {
	const user = useOptionalUser()

	return (
		<>
			{user ? (
				<UserDropdown />
			) : (
				<Button
					asChild
					variant="default"
					size="lg"
					className="bg-white text-gray-800 hover:bg-gray-200"
				>
					<Link to="/login">Log In</Link>
				</Button>
			)}
		</>
	)
}
