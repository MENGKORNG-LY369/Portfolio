import { Link } from "react-router-dom";
import Button from "./button/Button";

export default function Navbar() {
    const menuItems = [
        {id: 1, path: "/", text: "Home"},
        {id: 2, path: "/about", text: "About"},
        {id: 3, path: "/contact", text: "Contact"},
    ];
  return (
    <nav className="flex justify-between items-center px-20 py-0 border-b border-slate-500">
        <div className="">
            <Link to='/'>
                <h3 className="text-lg font-bold">
                    Mengkorng
                </h3>
            </Link>
        </div>
        <ul className="flex xl:gap-6">
            {menuItems.map(item => (
                <li className="py-3 sticky top-0" key={item.id}><Link to={`${item.path}`}>{item.text}</Link></li>
            ))}
        </ul>
        <div className="">
            <Button text="Let`s talk" />
        </div>
    </nav>
  )
}
