import { invariant } from '@epic-web/invariant'
import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import ArticleCard from '#app/components/organisms/ArticleCard.tsx'
import { toTitleCase } from '#app/utils/stringUtils.ts'
import { prisma } from '~/utils/db.server.ts'

export async function loader({ params }: LoaderFunctionArgs) {
	const { category } = params

	invariant(typeof category === 'string', 'Category not found')
	const categoryTitle = toTitleCase(category)

	const filteredArticles = await prisma.article.findMany({
		where: {
			isPublished: true,
			category: {
				slug: category, // Retrieves only articles in the specified category
			},
		},
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
		},
	})

	return json({ categoryTitle, filteredArticles })
}

export default function NewsCategoryPage() {
	const { categoryTitle, filteredArticles } = useLoaderData<typeof loader>()

	return (
		<div className="container py-16">
			<h2 className="text-h2 text-gray-800 dark:text-white">{categoryTitle}</h2>
			<div className="my-4 grid grid-cols-5 gap-6">
				{filteredArticles.map(article => {
					return (
						<ArticleCard
							key={article.id}
							articleId={article.id}
							title={article.title}
							category={categoryTitle}
							imageId={article.images[0]?.id}
						/>
					)
				})}
			</div>
			<div className="grid grid-cols-5 gap-6"></div>
		</div>
	)
}
