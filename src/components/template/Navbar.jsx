import { Link } from "react-router-dom";
import TalkBtn from "../button/TalkBtn";
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const currentLocation = useLocation().pathname;
    const menuItems = [
        {id: 1, path: "/", text: "About", colorOpacity: '/' == currentLocation ? '900': '500'},
        {id: 2, path: "/work", text: "Work", colorOpacity: '/work' == currentLocation ? '900': '500'},
        {id: 3, path: "/contact", text: "Contact", colorOpacity: '/contact' == currentLocation ? '900': '500'},
    ];
    
    return (
    <nav className="flex justify-between items-center xl:px-20 lg:px-10 md:px-6 px-3 py-1.5 sticky top-0 backdrop-blur-sm shadow-sm bg-white/70 w-full">
        <Link to='/'> <h3 className="text-lg font-bold "> Mengkorng Ly </h3> </Link>
        <ul className="flex xl:gap-10 lg:gap-8 md:gap-5 gap-4 font-medium ">
            {menuItems.map(item => (
                <li className={`py-3 sticky top-0 text-slate-${item.colorOpacity} hover:text-slate-900 transition-all`} key={item.id}><Link to={`${item.path}`}>{item.text}</Link></li>
            ))}
        </ul>
        <div className="">
            <TalkBtn text="Let`s talk" />
        </div>
    </nav>
    )
}
