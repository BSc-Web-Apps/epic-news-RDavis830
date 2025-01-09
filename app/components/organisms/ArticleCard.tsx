import { Link } from '@remix-run/react'
import {
	MdOutlineBusinessCenter,
	MdOutlineTheaters,
	MdOutlineDesktopMac,
	MdOutlineNewspaper,
} from 'react-icons/md'
import siteLogo from '#app/assets/png/Logo.png'
import { getArticleImgSrc } from '~/utils/misc.tsx'

interface ArticleCardProps {
	articleId: string
	index: number
	title: string
	category?: string
	imageId?: string
}

export default function ArticleCard({
	articleId,
	index,
	title,
	category = 'General news',
	imageId,
}: ArticleCardProps) {
	const imageSrc = imageId ? getArticleImgSrc(imageId) : siteLogo
	const isMainArticle = index === 0

	const categoryIcons: { [key: string]: JSX.Element } = {
		Business: <MdOutlineBusinessCenter size={20} className="text-white" />,
		Entertainment: <MdOutlineTheaters size={20} className="text-white" />,
		Technology: <MdOutlineDesktopMac size={20} className="text-white" />,
		'General news': <MdOutlineNewspaper size={20} className="text-white" />,
	}

	return (
		<Link
			to={`/article/${articleId}`}
			className={`${isMainArticle ? 'col-span-2' : 'col-span-2 md:col-span-1 lg:col-span-1'}`}
		>
			<div className="cursor-pointer decoration-white transition-all duration-500 hover:scale-105">
				<div>
					<img
						src={imageSrc}
						alt={title}
						className="h-64 w-full rounded-t object-cover"
					/>
				</div>
				<div className="flex h-64 flex-col justify-between rounded-b bg-red-600 p-4">
					<h3 className="line-clamp-3 text-xl font-bold text-white hover:underline">
						{title}
					</h3>

					<div className="flex items-center gap-2">
						{categoryIcons[category]}
						<p className="text-sm text-white">{category}</p>
					</div>
				</div>
			</div>
		</Link>
	)
}
