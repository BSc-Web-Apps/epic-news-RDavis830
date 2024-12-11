import { type MetaFunction } from '@remix-run/node'
import { json, Link, useLoaderData } from '@remix-run/react'
import StoriesGridBot from '#app/components/molecules/StoriesGridBottom.tsx'
import StoriesGridMid from '#app/components/molecules/StoryGridMiddle.tsx'
import ArticleCard from '#app/components/organisms/ArticleCard.tsx'
import { Button } from '~/components/atoms/Button.tsx'
import HeroCallToAction from '~/components/organisms/Hero/HeroCallToAction.tsx'
import { prisma } from '~/utils/db.server.ts'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export async function loader() {
	const allArticles = await prisma.article.findMany({
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
		},
	})

	return json({ allArticles })
}

export default function Index() {
	const { allArticles } = useLoaderData<typeof loader>()
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
			<div className="container py-16">
				<h2 className="mb-8 text-h2 font-normal">Latest news</h2>
				<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
					'
					{allArticles.length > 0 ? (
						allArticles.map(article => (
							<ArticleCard
								key={article.id}
								articleId={article.id}
								title={article.title}
								category={article.category?.name}
								imageId={article.images[0]?.id}
							/>
						))
					) : (
						<p>No articles found</p>
					)}
				</div>
			</div>
		</main>
	)
}
