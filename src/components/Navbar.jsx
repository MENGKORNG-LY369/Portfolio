import { Link } from "react-router-dom";
import Button from "./button/Button";

export default function Navbar() {
    const menuItems = [
        {id: 1, path: "/", text: "Home"},
        {id: 2, path: "/about", text: "About"},
        {id: 3, path: "/work", text: "Work"},
        {id: 4, path: "/contact", text: "Contact"},
    ];
    return (
    <nav className="flex justify-between items-center px-12 py-1.5">
        <div className="">
            <Link to='/'>
                <h3 className="text-lg font-bold text-orange-300">
                    Mengkorng
                </h3>
            </Link>
        </div>
        <ul className="flex xl:gap-10 font-light text-slate-600">
            {menuItems.map(item => (
                <li className="py-3 sticky top-0 hover:text-slate-900 hover:font-medium transition-all" key={item.id}><Link to={`${item.path}`}>{item.text}</Link></li>
            ))}
        </ul>
        <div className="">
            <Button text="Let`s talk" class="hi"/>
        </div>
    </nav>
    )
}
