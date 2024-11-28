import { Link } from '@remix-run/react'

export default function storiesGrid() {
	return (
		<div className="mb-3 flex w-11/12 space-x-1">
			<div className="w-4/5 rounded-md bg-gray-200 drop-shadow-md">
				<Link to="/">
					<h1 className=" text-3xl font-bold">BIG NEWS!</h1>
				</Link>
			</div>
			<div className=" h-auto w-1/5 flex-col rounded-md bg-gray-200 drop-shadow-md">
				<Link to="/">
					<h2>News story</h2>
				</Link>
				<p>Info</p>
			</div>
			<div className="h-96 w-1/5 rounded-md bg-gray-200 drop-shadow-md">
				<Link to="/">
					<h2>News story</h2>
				</Link>
				<p>Info</p>
			</div>
		</div>
	)
}
