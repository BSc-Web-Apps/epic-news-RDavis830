import { type MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import { Button } from '#app/components/ui/button.tsx'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export default function Index() {
	return (
		<main className="grid h-full place-items-center">
			<div className="w-full py-16">
				<HeroCallToAction
					image="app\assets\jpg\portrait-01.jpg"
					imageRight={true}
					hasBackgroundColour={true}
				>
					<div className="flex h-full flex-1 flex-col justify-between bg-gray-200 p-16 text-gray-800 dark:bg-white">
						<div className="flex flex-col gap-8">
							<h2 className="text-h2">Welcome to News!</h2>
							<p className="text-lg">
								Your no.1 spot for all tech news and more.
							</p>
						</div>
						<Button
							asChild
							variant="default"
							size="lg"
							className="bg-white text-gray-800 hover:bg-red-600 hover:text-white dark:bg-gray-200 hover:dark:bg-red-600"
						>
							<Link to="/signup">Sign up</Link>
						</Button>
					</div>
				</HeroCallToAction>
			</div>
			<div className="mb-3 flex w-11/12 space-x-1">
				<div className="w-4/5 rounded-md bg-gray-200 drop-shadow-md dark:bg-white">
					<Link to="/">
						<h1 className="text-3xl font-bold hover:underline hover:drop-shadow-md dark:text-gray-800">
							BIG NEWS!
						</h1>
					</Link>
				</div>
				<div className="h-auto w-1/5 flex-col rounded-md bg-gray-200 drop-shadow-md dark:bg-white">
					<Link to="/">
						<h2 className="hover:drop-shadow-md dark:text-gray-800">
							News story
						</h2>
					</Link>
					<p className="dark:text-gray-800">Info</p>
				</div>
				<div className="h-96 w-1/5 rounded-md bg-gray-200 drop-shadow-md dark:bg-white">
					<Link to="/">
						<h2 className="hover:drop-shadow-md dark:text-gray-800">
							News story
						</h2>
					</Link>
					<p className="dark:text-gray-800">Info</p>
				</div>
			</div>
			<div className="flex w-11/12 flex-row space-x-1">
				<div className="h-48 w-2/5 rounded-md bg-gray-200 text-right drop-shadow-md dark:bg-white">
					<Link to="/">
						<h2 className="m-2 hover:drop-shadow-md dark:text-gray-800">
							News story
						</h2>
					</Link>
					<p className="m-2 dark:text-gray-800">More info</p>
				</div>
				<div className="h-48 w-2/5 rounded-md bg-gray-200 text-right drop-shadow-md dark:bg-white">
					<Link to="/">
						<h2 className="m-2 hover:drop-shadow-md dark:text-gray-800">
							News story
						</h2>
					</Link>
					<p className="m-2 dark:text-gray-800">More info</p>
				</div>
				<div className="h-48 w-2/5 rounded-md bg-gray-200 text-right drop-shadow-md dark:bg-white">
					<Link to="/">
						<h2 className="m-2 hover:drop-shadow-md dark:text-gray-800">
							News story
						</h2>
					</Link>
					<p className="m-2 dark:text-gray-800">More info</p>
				</div>
			</div>
		</main>
	)
}
