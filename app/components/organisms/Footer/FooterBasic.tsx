import { Link } from '@remix-run/react'
import logo from '#/app/assets/png/Logo.png'

export interface FooterProps {
	companyName?: string
	altText?: string
}

const FooterBasic = ({
	companyName = 'News Ltd',
	altText = 'Our company logo',
}: FooterProps) => {
	return (
		<footer className="dark:bg-dark-secondary bg-secondary py-16">
			<div className="container flex flex-col items-center justify-between gap-y-8 lg:flex-row">
				<div className="w-20">
					<Link to="/">
						<img src={logo} alt={'Nnews Logo'} />
					</Link>
				</div>
				<div>
					<Link
						to="/news"
						className="text-sm font-semibold text-muted-foreground transition hover:drop-shadow-md"
					>
						Business
					</Link>
				</div>
				<div>
					<Link
						to="/news"
						className="text-sm font-semibold text-muted-foreground transition hover:drop-shadow-md"
					>
						Sport
					</Link>
				</div>
				<div>
					<Link
						to="/news"
						className="text-sm font-semibold text-muted-foreground transition hover:drop-shadow-md"
					>
						Weather
					</Link>
				</div>
				<div>
					<Link
						to="/news"
						className="text-sm font-semibold text-muted-foreground transition hover:drop-shadow-md"
					>
						Tech
					</Link>
				</div>

				<div className="dark:text-dark-muted-foreground text-xs text-muted-foreground text-opacity-50">
					&copy; {companyName} | {new Date().getFullYear()}
				</div>
			</div>
			<div className="mt-10 flex justify-center">
				<div className=" dark:text-dark-muted-foreground flex text-center text-xs text-muted-foreground text-opacity-50">
					All content on this website is the exclusive property of Nnews limited
					and protected by copyright laws. Any unauthorized use, reproduction,
					or distribution of this content may result in legal action.
				</div>
			</div>
		</footer>
	)
}

export default FooterBasic
