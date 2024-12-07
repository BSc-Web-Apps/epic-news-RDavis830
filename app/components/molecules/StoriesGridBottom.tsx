import { Link } from '@remix-run/react'

export default function StoriesGrid() {
	return (
		<div className="container grid grid-cols-6 gap-4">
			<Link
				to="/"
				className='"h-48 col-span-2 rounded-md bg-gray-200 text-right drop-shadow-md dark:bg-white'
			>
				<div>
					<h2 className="m-2 hover:drop-shadow-md dark:text-gray-800">
						News story
					</h2>

					<p className="m-2 dark:text-gray-800">More info</p>
				</div>
			</Link>
			<Link
				to="/"
				className='"h-48 col-span-2 rounded-md bg-gray-200 text-right drop-shadow-md dark:bg-white'
			>
				<div>
					<h2 className="m-2 hover:drop-shadow-md dark:text-gray-800">
						News story
					</h2>

					<p className="m-2 dark:text-gray-800">More info</p>
				</div>
			</Link>
			<Link
				to="/"
				className='"h-48 col-span-2 rounded-md bg-gray-200 text-right drop-shadow-md dark:bg-white'
			>
				<div>
					<h2 className="m-2 hover:drop-shadow-md dark:text-gray-800">
						News story
					</h2>

					<p className="m-2 dark:text-gray-800">More info</p>
				</div>
			</Link>
		</div>
	)
}
