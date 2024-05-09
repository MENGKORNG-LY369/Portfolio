import { Link } from "react-router-dom";
import TalkBtn from "../button/TalkBtn";

export default function Navbar() {
    const menuItems = [
        {id: 1, path: "/", text: "Home"},
        {id: 2, path: "/about", text: "About"},
        {id: 3, path: "/work", text: "Work"},
        {id: 4, path: "/contact", text: "Contact"},
    ];
    return (
    <nav className="flex justify-between items-center px-12 py-1.5 sticky top-0 backdrop-blur-sm shadow-sm bg-white/40 w-full">
        <Link to='/'> <h3 className="text-lg font-bold text-orange-400"> Mengkorng </h3> </Link>
        <ul className="flex xl:gap-10 font-medium text-slate-800">
            {menuItems.map(item => (
                <li className="py-3 sticky top-0 hover:text-slate-900 active:text-orange-900 hover:font-medium transition-all" key={item.id}><Link to={`${item.path}`}>{item.text}</Link></li>
            ))}
        </ul>
        <div className="">
            <TalkBtn text="Let`s talk" />
        </div>
    </nav>
    )
}
