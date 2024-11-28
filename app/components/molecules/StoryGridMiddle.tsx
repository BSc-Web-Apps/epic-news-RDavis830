import { Link } from '@remix-run/react'

export default function StoriesGridMid() {
	return (
		<div className="container grid grid-cols-6 gap-4 space-x-1">
			<Link
				to="/"
				className="col-span-4 rounded-md bg-gray-200 drop-shadow-md hover:underline hover:drop-shadow-md dark:bg-white"
			>
				<div>
					<h1 className="text-3xl font-bold dark:text-gray-800">BIG NEWS!</h1>
				</div>
			</Link>
			<Link
				to="/"
				className="col-span-1 h-auto flex-col rounded-md bg-gray-200 drop-shadow-md hover:drop-shadow-md dark:bg-white"
			>
				<div>
					<h2 className=" dark:text-gray-800">News story</h2>

					<p className="dark:text-gray-800">Info</p>
				</div>
			</Link>
			<Link
				to="/"
				className="col-span-1 h-96 rounded-md bg-gray-200 drop-shadow-md hover:drop-shadow-md dark:bg-white"
			>
				<div>
					<h2 className=" dark:text-gray-800">News story</h2>

					<p className="dark:text-gray-800">Info</p>
				</div>
			</Link>
		</div>
	)
}
