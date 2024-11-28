import { type MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import StoriesGridBot from '#app/components/molecules/StoriesGridBottom.tsx'
import StoriesGridMid from '#app/components/molecules/StoryGridMiddle.tsx'
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
			<div className="flex flex-col gap-4">
				<StoriesGridMid />
				<StoriesGridBot />
			</div>
		</main>
	)
}
