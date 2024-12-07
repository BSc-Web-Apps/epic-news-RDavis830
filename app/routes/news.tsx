import { NavLink, Outlet } from '@remix-run/react'

export default function NewsPage() {
	return (
		<main className="flex flex-col py-24">
			<div className="container">
				<h1 className="text-h1">News</h1>
				<div className="flex space-x-4 py-4">
					<NavLink
						to="business"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'rounded bg-red-600 p-1 font-bold text-white underline drop-shadow-md' : 'rounded bg-red-600 p-1 font-semibold text-white'}`
						}
					>
						Business
					</NavLink>
					<NavLink
						to="sport"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'rounded bg-red-600 p-1 font-bold text-white underline drop-shadow-md' : 'rounded bg-red-600 p-1 font-semibold text-white'}`
						}
					>
						Sport
					</NavLink>
					<NavLink
						to="weather"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'rounded bg-red-600 p-1 font-bold text-white underline drop-shadow-md' : 'rounded bg-red-600 p-1 font-semibold text-white'}`
						}
					>
						Weather
					</NavLink>
					<NavLink
						to="tech"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'rounded bg-red-600 p-1 font-bold text-white underline drop-shadow-md' : 'rounded bg-red-600 p-1 font-semibold text-white'}`
						}
					>
						Tech
					</NavLink>
				</div>
			</div>

			<Outlet />
		</main>
	)
}
