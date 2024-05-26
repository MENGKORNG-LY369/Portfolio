import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MainBtn from "../button/MainBtn";

export default function Navbar() {
    const currentLocation = useLocation().pathname;
    const menuItems = [
        { id: 1, path: "/", text: "About", colorOpacity: '/' == currentLocation ? '200' : '500' },
        { id: 2, path: "/work", text: "Work", colorOpacity: '/work' == currentLocation ? '200' : '500' },
        { id: 3, path: "/contact", text: "Contact", colorOpacity: '/contact' == currentLocation ? '200' : '500' },
    ];

    return (
        <nav className="flex justify-between items-center xl:px-20 lg:px-10 md:px-6 px-3 py-1.5 sticky top-0 backdrop-blur-sm shadow-sm bg-white-100/55 w-full z-50">
            <Link to='/'> <h3 className="text-lg font-semibold text-yellow-400 drop-shadow-sm"> Mengkorng Ly </h3> </Link>
            <ul className="flex xl:gap-10 text-yellow-800 lg:gap-8 md:gap-5 gap-4 font-medium ">
                {menuItems.map(item => (
                    <li className={`py-3 sticky top-0 text-yellow-${item.colorOpacity} transition-all`} key={item.id}>
                        <NavLink to={`${item.path}`}>{item.text}</NavLink>
                    </li>
                ))}
            </ul>
            <div className="">
                <MainBtn
                    link={'/contact'}
                    text="Let`s talk"
                    className="rounded-sm font-medium"
                />
            </div>
        </nav>
    )
}
