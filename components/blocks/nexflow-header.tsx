"use client"

import React from 'react';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NexFlowHeaderProps {
  showPageLinks?: boolean;
  showBookDemo?: boolean;
  showFeatureLinks?: boolean;
  showDownloadApp?: boolean;
  excludeLinks?: string[];
}

export function NexFlowHeader({
  showPageLinks = true,
  showBookDemo = true,
  showFeatureLinks = true,
  showDownloadApp = true,
  excludeLinks = []
}: NexFlowHeaderProps = {}) {
  const [open, setOpen] = React.useState(false);
  const [showComingSoon, setShowComingSoon] = React.useState(false);

  const allLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ];
  
  const links = allLinks.filter(link => !excludeLinks.includes(link.label));

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <header className={cn('sticky top-0 z-50 w-full border-b backdrop-blur-lg', 'bg-background/95 supports-[backdrop-filter]:bg-background/80')}>
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100">
            <p className="text-xl font-regular tracking-tighter text-green-400">NexFlow</p>
          </a>
          {showPageLinks && (
            <div className="hidden md:flex items-center gap-1">
              <a href="/clinics" className={buttonVariants({ variant: 'ghost', size: 'sm' })}>For Clinics</a>
              <a href="/consumers" className={buttonVariants({ variant: 'ghost', size: 'sm' })}>For Users</a>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 lg:flex">
            {showFeatureLinks && links.map((link) => <a key={link.href} className={buttonVariants({ variant: 'ghost' })} href={link.href} onClick={(e) => scrollToSection(e, link.href)}>{link.label}</a>)}
            {showBookDemo && <Button variant="outline" onClick={() => window.open('https://cal.com/arjun-dixit-0nwkzi/30min', '_blank')}>Book Demo</Button>}
            {showDownloadApp && (
              <div className="relative">
                <Button onClick={() => setShowComingSoon(true)}>Download App</Button>
              {showComingSoon && (
                <div className="absolute top-full mt-2 right-0 bg-card border border-border px-6 py-3 rounded-lg shadow-lg text-sm whitespace-nowrap z-50">
                  <p className="font-medium">Coming Soon!</p>
                  <button
                    onClick={() => setShowComingSoon(false)}
                    className="absolute -top-2 -right-2 bg-background border border-border rounded-full w-6 h-6 flex items-center justify-center hover:bg-accent"
                  >
                    ×
                  </button>
                </div>
              )}
              </div>
            )}
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="lg:hidden"><MenuIcon className="size-4" /></Button>
            <SheetContent className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg" showClose={false} side="left">
              <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
                {showPageLinks && (
                  <>
                    <a href="/clinics" className={buttonVariants({ variant: 'ghost', className: 'justify-start' })}>For Clinics</a>
                    <a href="/consumers" className={buttonVariants({ variant: 'ghost', className: 'justify-start' })}>For Users</a>
                    <div className="border-t border-border my-2" />
                  </>
                )}
                {showFeatureLinks && links.map((link) => <a key={link.href} className={buttonVariants({ variant: 'ghost', className: 'justify-start' })} href={link.href} onClick={(e) => scrollToSection(e, link.href)}>{link.label}</a>)}
              </div>
              <SheetFooter>
                {showBookDemo && <Button variant="outline" onClick={() => window.open('https://cal.com/arjun-dixit-0nwkzi/30min', '_blank')}>Book Demo</Button>}
                {showDownloadApp && <Button onClick={() => setShowComingSoon(true)}>Download App</Button>}
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
