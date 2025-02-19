import { type MetaFunction } from '@remix-run/node'
import { json, Link, useLoaderData } from '@remix-run/react'
import ArticleCard from '#app/components/organisms/ArticleCard.tsx'
import { Button } from '~/components/atoms/Button.tsx'
import HeroCallToAction from '~/components/organisms/Hero/HeroCallToAction.tsx'
import { prisma } from '~/utils/db.server.ts'

export const meta: MetaFunction = () => [{ title: 'News' }]

export async function loader() {
	const allArticles = await prisma.article.findMany({
		where: { isPublished: true },
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
		},
		orderBy: {
			publishedAt: 'desc', // Sorts by createdAt in descending order (most recent first)
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
					<div className="flex h-full flex-1 flex-col justify-center gap-8 bg-gray-200 p-16 text-gray-800 dark:bg-white ">
						<div className="lg:pt-10flex flex-col items-center">
							<h2 className=" text-center text-4xl font-bold text-gray-800 lg:text-h2">
								Welcome to News!
							</h2>
							<h1 className="pt-2 text-center text-lg font-bold text-gray-800">
								Your no.1 spot for all tech news and more.
							</h1>
							<p className="pt-3 text-center text-sm text-gray-800 lg:text-base">
								Stay informed with the latest updates and in-depth stories by
								signing up for our news website. Get real-time news coverage and
								expert analysis. Whether you're interested in breaking news,
								politics, business, entertainment, or Technology, we’ve got you
								covered. Don’t miss out on important stories—join our community
								today for reliable, timely, and comprehensive news at your
								fingertips.
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
			<div className="h-1 w-4/5 bg-red-600"></div>
			<div className="container py-16">
				<h2 className="mb-8 text-h2 font-bold ">Latest news</h2>
				<div className="grid grid-cols-2 grid-rows-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
					{allArticles.length > 0 ? (
						allArticles.map((article, index) => (
							<ArticleCard
								key={article.id}
								index={index}
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
