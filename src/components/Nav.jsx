import { Link } from "react-scroll";
import { navigation } from "../data";

export const Nav = () => {
    return (
        <nav>
            <ul className="flex space-x-8 capitalize text-[15px]">
                {navigation.map((item, index) =>
                    <li className="text-white  cursor-pointer" key={index}>
                        <Link to={item.href} activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className="transition-all block duration-500 hover:text-accent-hover hover:scale-125">{item.name}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}
