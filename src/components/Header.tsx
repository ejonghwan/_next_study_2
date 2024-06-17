// rafce

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py12 text-white bg-pink-50/20">
            
            {/* logo */}
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Jong<span className="text-accent">.</span>
                    </h1>
                </Link>

                 {/* desktop Nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href={'/content'}>
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* mobile Nav */}
                <div className="xl:hidden ">
                    <MobileNav />
                    {/* <Link href={'/content'}>
                        <Button>Hire me</Button>
                    </Link> */}
                </div>
            </div>

        


           
        </header>
    )
}

export default Header;