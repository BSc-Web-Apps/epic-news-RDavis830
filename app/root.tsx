import { type LinksFunction } from '@remix-run/node'
import Document from '~/components/shared-layout/Document'
import { useNonce } from '~/utils/nonce-provider.ts'
import rootLinkElements from '~/utils/providers/rootLinkElements'

export const links: LinksFunction = () => {
	return rootLinkElements
}
export { headers, meta } from './__root.client.tsx'
export { action, loader } from './__root.server.tsx'

export default function App() {
	const nonce = useNonce()

	return (
		<Document nonce={nonce}>
			<div className="flex h-screen flex-col justify-between">
				<div className="flex-1 bg-slate-100">
					<main className="grid h-full place-items-center">
						<h1 className="text-mega">"Hello there!"</h1>
						<p className="text-gray-600 md:text-lg lg:text-xl">
							{' '}
							Welcome to the Nnews website. Here you will find the latest news
							on a range of topics.
						</p>
						<div className="w-full">
							<div className="H-1/2 w-1/2 rounded-sm bg-slate-300 hover:bg-slate-400">
								<image className="min-w-1/2 min-h-2/5"></image>
								<button className="text-black md:p-4 md:text-lg lg:p-3 lg:text-xl">
									BREAKING NEWS MAIN STORY MUST CLICK!!!
								</button>
							</div>
							<div className="h-6 w-1/4 bg-slate-800"></div>
						</div>
					</main>
				</div>
			</div>
		</Document>
	)
}
