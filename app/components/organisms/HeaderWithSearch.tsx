import { Link, NavLink, useMatches } from '@remix-run/react'
import logo from '~/assets/png/Logo.png'
import { SearchBar } from '../molecules/SearchBar'
import LoginOrUserDropdown from './LoginOrUserDropdown'

interface HeaderWithSearchProps {
	isAdminUser: boolean
}
export default function HeaderWithSearch({
	isAdminUser,
}: HeaderWithSearchProps) {
	const matches = useMatches()
	const isOnSearchPage = matches.find(m => m.id === 'routes/users+/index')
	const searchBar = isOnSearchPage ? null : <SearchBar status="idle" />

	return (
		<div>
			<header className="mb-1 bg-primary/10 bg-red-600 py-6">
				<nav className="container flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap md:gap-8">
					<Link to="/">
						<div>
							<img src={logo} alt="News Logo" className="flex max-w-28" />
						</div>
					</Link>
					<div className="flex flex-1 items-center justify-end gap-8">
						{isAdminUser && (
							<Link
								to="/admin-review"
								className="rounded-lg bg-white px-4 py-2 text-sm font-semibold hover:bg-gray-300 hover:underline"
							>
								Admin Review
							</Link>
						)}
					</div>
					<div className="ml-auto hidden max-w-sm flex-1 sm:block">
						{searchBar}
					</div>
					<div className="flex items-center gap-10">
						<LoginOrUserDropdown />
					</div>
					<div className="block w-full sm:hidden">{searchBar}</div>
				</nav>
			</header>
			<div className="flex w-full flex-row justify-center space-x-28 bg-red-600">
				<div className="hover:bg-red-700 hover:underline lg:px-5">
					<NavLink
						to="/news/business"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'bg-red-700 font-semibold text-muted-foreground text-white underline lg:px-5 lg:text-2xl' : 'font-semibold text-muted-foreground text-white transition hover:drop-shadow-md lg:text-2xl'}`
						}
					>
						Business
					</NavLink>
				</div>
				<div className="hover:bg-red-700 lg:px-5">
					<div className="hover:bg-red-700 hover:underline lg:px-5">
						<NavLink
							to="/news/Sport"
							prefetch="intent"
							className={({ isActive }) =>
								`${isActive ? 'bg-red-700 font-semibold text-muted-foreground text-white underline lg:px-5 lg:text-2xl' : 'font-semibold text-muted-foreground text-white transition hover:drop-shadow-md lg:text-2xl'}`
							}
						>
							Sport
						</NavLink>
					</div>
				</div>
				<div className="hover:bg-red-700 hover:underline lg:px-5">
					<NavLink
						to="/news/weather"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'bg-red-700 font-semibold text-muted-foreground text-white underline lg:px-5 lg:text-2xl' : 'font-semibold text-muted-foreground text-white transition hover:drop-shadow-md lg:text-2xl'}`
						}
					>
						Weather
					</NavLink>
				</div>
				<div className="hover:bg-red-700 hover:underline lg:px-5">
					<NavLink
						to="/news/technology"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'bg-red-700 font-semibold text-muted-foreground text-white underline lg:px-5 lg:text-2xl' : 'font-semibold text-muted-foreground text-white transition hover:drop-shadow-md lg:text-2xl'}`
						}
					>
						Tech
					</NavLink>
				</div>
			</div>
		</div>
	)
}
