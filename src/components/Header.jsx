import { useEffect, useState } from "react"
import { Nav } from "./Nav"
import { NavMobile } from "./NavMobile"
import { Socials } from "./Socials"

export const Header = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        })
    }, [])
    return (
        <header className={`${bg ? "bg-tertiary h-20" : "h-24"} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
            <div className="container mx-auto h-full flex items-center justify-between">
                <a href="" className="font-inter">
                    <img src="" alt="" />
                    Matias Seeber
                </a>
                <div className="hidden lg:block w-[33%]">
                    <Nav />
                </div>
                <div className="hidden lg:block">
                    <Socials />
                </div>
                <div className="lg:hidden">
                    <NavMobile />
                </div>
            </div>
        </header>
    )
}