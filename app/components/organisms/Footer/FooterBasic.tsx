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
		<footer className="bg-red-600 py-16">
			<div className="container flex flex-col items-center justify-between gap-y-8 lg:flex-row">
				<div className="w-20">
					<Link to="/">
						<img src={logo} alt={'News Logo'} />
					</Link>
				</div>
				<div>
					<Link
						to="/about-us"
						prefetch="intent"
						className="text-sm font-semibold text-muted-foreground text-white transition hover:drop-shadow-md"
					>
						About Us
					</Link>
				</div>
				<div>
					<Link
						to="/contact-us"
						prefetch="intent"
						className="text-sm font-semibold text-muted-foreground text-white transition hover:drop-shadow-md"
					>
						Contact Us
					</Link>
				</div>
				<div>
					<Link
						to="/news"
						className="text-sm font-semibold text-muted-foreground text-white transition hover:drop-shadow-md"
					>
						New Stories
					</Link>
				</div>
				<div>
					<Link
						to="/sign-up"
						className="text-sm font-semibold text-muted-foreground text-white transition hover:drop-shadow-md"
					>
						Sign Up
					</Link>
				</div>

				<div className="dark:text-dark-muted-foreground text-xs text-muted-foreground text-white">
					&copy; {companyName} | {new Date().getFullYear()}
				</div>
			</div>
			<div className="mt-10 flex justify-center">
				<div className="flex text-center text-xs text-white">
					All content on this website is the exclusive property of Nnews limited
					and protected by copyright laws. Any unauthorized use, reproduction,
					or distribution of this content may result in legal action.
				</div>
			</div>
		</footer>
	)
}

export default FooterBasic
