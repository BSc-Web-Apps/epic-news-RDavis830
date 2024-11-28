import { type LinksFunction } from '@remix-run/node'
import { Link, Outlet, useLoaderData } from '@remix-run/react'
import Document from '~/components/shared-layout/Document.tsx'
import ThemeSwitch from '~/components/shared-layout/ThemeSwitch'
import { useNonce } from '~/utils/nonce-provider.ts'
import rootLinkElements from '~/utils/providers/rootLinkElements'
import { type loader } from './__root.server'
import Footer from './components/organisms/Footer/FooterBasic.tsx'
import HeaderWithSearch from './components/organisms/HeaderWithSearch'
import HeroCallToAction from './components/organisms/Hero/HeroCallToAction.tsx'
import { Button } from './components/ui/button.tsx'
import useTheme from './hooks/useTheme.tsx'

export const links: LinksFunction = () => {
	return rootLinkElements
}
export { headers, meta } from './__root.client.tsx'
export { action, loader } from './__root.server.tsx'

export default function App() {
	const data = useLoaderData<typeof loader>()
	const nonce = useNonce()
	const theme = useTheme()

	return (
		<Document nonce={nonce} theme={theme}>
			<div className="flex h-screen flex-col justify-between">
				<HeaderWithSearch />
				<div className="flex-1 dark:bg-gray-200">
					<Outlet />
				</div>

				{/* <div className="container flex justify-between pb-5">
					<ThemeSwitch userPreference={data.requestInfo.userPrefs.theme} />
				</div> */}
				<Footer />
			</div>
		</Document>
	)
}
