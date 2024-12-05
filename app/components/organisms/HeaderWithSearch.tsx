import { Link, NavLink, useMatches } from '@remix-run/react'
import logo from '~/assets/png/Logo.png'
import { SearchBar } from '../molecules/SearchBar'
import LoginOrUserDropdown from './LoginOrUserDropdown'

export default function HeaderWithSearch() {
	const matches = useMatches()
	const isOnSearchPage = matches.find(m => m.id === 'routes/users+/index')
	const searchBar = isOnSearchPage ? null : <SearchBar status="idle" />

	return (
		<div>
			<header className="mb-1 bg-primary/10 bg-red-600 py-6">
				<nav className="container flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap md:gap-8">
					<Link to="/">
						<div className=" hover:bg-gray-200">
							<img src={logo} alt="News Logo" className="flex max-w-28" />
						</div>
					</Link>
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
				<div className="px-5 hover:bg-red-700 hover:underline">
					<NavLink
						to="business"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'bg-red-700 px-5 text-2xl font-semibold text-muted-foreground text-white underline' : 'text-2xl font-semibold text-muted-foreground text-white transition hover:drop-shadow-md'}`
						}
					>
						Business
					</NavLink>
				</div>
				<div className=" px-5 hover:bg-red-700">
					<div className="px-5 hover:bg-red-700 hover:underline">
						<NavLink
							to="sport"
							prefetch="intent"
							className={({ isActive }) =>
								`${isActive ? 'bg-red-700 px-5 text-2xl font-semibold text-muted-foreground text-white underline' : 'text-2xl font-semibold text-muted-foreground text-white transition hover:drop-shadow-md'}`
							}
						>
							Sport
						</NavLink>
					</div>
				</div>
				<div className="px-5 hover:bg-red-700 hover:underline">
					<NavLink
						to="weather"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'bg-red-700 px-5 text-2xl font-semibold text-muted-foreground text-white underline' : 'text-2xl font-semibold text-muted-foreground text-white transition hover:drop-shadow-md'}`
						}
					>
						Weather
					</NavLink>
				</div>
				<div className="px-5 hover:bg-red-700 hover:underline">
					<NavLink
						to="tech"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'bg-red-700 px-5 text-2xl font-semibold text-muted-foreground text-white underline' : 'text-2xl font-semibold text-muted-foreground text-white transition hover:drop-shadow-md'}`
						}
					>
						Tech
					</NavLink>
				</div>
			</div>
		</div>
	)
}
