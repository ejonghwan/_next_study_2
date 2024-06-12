// rafce
"use client"

import Link from "next/link";
import { Button } from "./ui/button";

import { usePathname } from 'next/navigation';

const links = [
    {
        name: 'home',
        path: "/"
    },
    {
        name: 'home',
        path: "/"
    },
    {
        name: 'home',
        path: "/"
    },
    {
        name: 'home',
        path: "/"
    },
    {
        name: 'home',
        path: "/"
    },
]


const Nav = () => {
    return (
       <nav className="flex">
            {links.map(item => <li key={item.name}>{item.name}</li>)}
       </nav>
    )
}

export default Nav;