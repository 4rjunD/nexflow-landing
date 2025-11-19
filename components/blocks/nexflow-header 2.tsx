"use client"

import React from 'react';
import { Activity, MenuIcon, SearchIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CommandItem, SearchModal } from '@/components/ui/search-modal';

export function NexFlowHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{
			label: 'Features',
			href: '#features',
		},
		{
			label: 'Pricing',
			href: '#pricing',
		},
		{
			label: 'About',
			href: '#about',
		},
	];

	const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault();
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setOpen(false);
	};

	return (
		<header
			className={cn(
				'sticky top-0 z-50 w-full border-b backdrop-blur-lg',
				'bg-background/95 supports-[backdrop-filter]:bg-background/80',
			)}
		>
			<nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
				<a
					href="#"
					onClick={(e) => {
						e.preventDefault();
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
					className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100"
				>
					<Activity className="size-6" />
					<p className="font-mono text-xl font-bold">NexFlow</p>
				</a>
				<div className="flex items-center gap-2">
					<div className="hidden items-center gap-1 lg:flex">
						{links.map((link) => (
							<a
								key={link.href}
								className={buttonVariants({ variant: 'ghost' })}
								href={link.href}
								onClick={(e) => scrollToSection(e, link.href)}
							>
								{link.label}
							</a>
						))}
						<Button
							variant="outline"
							onClick={() => window.open('https://cal.com/arjun-dixit-0nwkzi/30min', '_blank')}
						>
							Book Demo
						</Button>
						<Button onClick={() => alert('Coming Soon!')}>
							Download App
						</Button>
					</div>
					<SearchModal data={searchItems}>
						<Button
							variant="outline"
							className="relative size-9 cursor-pointer p-0 md:border xl:h-9 xl:w-60 xl:justify-between xl:px-3 xl:py-2"
						>
							<span className="hidden xl:inline-flex">Search...</span>
							<span className="sr-only">Search</span>
							<SearchIcon className="size-4" />
						</Button>
					</SearchModal>
					<Sheet open={open} onOpenChange={setOpen}>
						<Button
							size="icon"
							variant="outline"
							onClick={() => setOpen(!open)}
							className="lg:hidden"
						>
							<MenuIcon className="size-4" />
						</Button>
						<SheetContent
							className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
							showClose={false}
							side="left"
						>
							<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
								{links.map((link) => (
									<a
										key={link.href}
										className={buttonVariants({
											variant: 'ghost',
											className: 'justify-start',
										})}
										href={link.href}
										onClick={(e) => scrollToSection(e, link.href)}
									>
										{link.label}
									</a>
								))}
							</div>
							<SheetFooter>
								<Button
									variant="outline"
									onClick={() => window.open('https://cal.com/arjun-dixit-0nwkzi/30min', '_blank')}
								>
									Book Demo
								</Button>
								<Button onClick={() => alert('Coming Soon!')}>
									Download App
								</Button>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}

const searchItems: CommandItem[] = [
	{
		id: 'feature-1',
		title: 'Real-Time Monitoring',
		description: 'Continuous tracking of vitals and activity',
		category: 'Features',
	},
	{
		id: 'feature-2',
		title: 'AI Disease Models',
		description: 'Multi-disease prediction across health domains',
		category: 'Features',
	},
	{
		id: 'feature-3',
		title: 'Risk Score',
		description: 'AI-powered disease risk assessment',
		category: 'Features',
	},
	{
		id: 'pricing-1',
		title: 'Consumer App',
		description: 'Free, $4.99, or $24.99/month - Personal health monitoring',
		category: 'Pricing',
	},
	{
		id: 'pricing-2',
		title: 'Professional Plan',
		description: 'Clinical dashboard for small-medium clinics',
		category: 'Pricing',
	},
	{
		id: 'pricing-3',
		title: 'Enterprise Plan',
		description: 'Custom solutions for health systems',
		category: 'Pricing',
	},
];
