"use client"

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react';
import { CiMenuFries } from "react-icons/ci";

const MobileNav = () => {

    const pathname = usePathname();
    const links = [
        {
            name: 'home',
            path: "/"
        },
        {
            name: 'services',
            path: "/services"
        },
        {
            name: 'resume',
            path: "/resume"
        },
        {
            name: 'work',
            path: "/work"
        },
        {
            name: 'contact',
            path: "/contact"
        },
    ]


    console.log('pathname', pathname)

  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-accent' />
        </SheetTrigger>
        <SheetContent className='bg-primary border-none'>
            <div className='mt-32 mb-40 text-center text-3xl'>
                <Link href="/">
                    <h1>Jong<span className='text-accent'>.</span></h1>
                </Link>
            </div>
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map(link => <Link href={link.path} className="text-xl capitalize hover:text-accent transition-all" key={link.name}>{link.name}</Link>)}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav