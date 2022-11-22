import { useEffect, useState } from "react"
import { navigation } from "../data";

import { MenuAlt3Icon } from "@heroicons/react/outline";

import { Link } from "react-scroll";

export const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen)
            document.body.style.overflow = 'hidden'
        else
            document.body.style.overflow = "auto"
    }, [isOpen])


    return (
        <nav>
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
                <MenuAlt3Icon className="w-8 h-8" />
            </div>
            <ul className={`lg:hidden bg-accent absolute ${isOpen ? "left-0" : "-left-[220%]"} top-0 z-10 w-screen h-screen transition-all duration-500 flex flex-col justify-center items-center`} onClick={() => setIsOpen(false)}>
                {navigation.map((item, idx) => {
                    return (
                        <li key={idx} className='mb-8 hover:scale-125 transition-all duration-500'>
                            <Link
                                to={item.href}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className='text-xl cursor-pointer capitalize'
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}
