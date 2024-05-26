/* eslint-disable react/no-unescaped-entities */
import { headerImage } from '../assets/exporter'
import MainBtn from './button/MainBtn'

export default function Header() {
    return (
        <header className="flex xl:px-20 lg:px-10 md:px-4 px-3 py-5 md:gap-10 items-center justify-center bg-yellow-50 mt-3 rounded-md text-black">
            <div className="flex-1 mt-10">
                <h1 className="font-semibold xl:text-3xl md:text-2xl sm:text-xl">Hello👋, My name is <span className=" text-yellow-500 pb-1 px-2 rounded-md ">Mengkorng Ly</span>✨<br />A Student at Passerelles Numeriques Cambodia</h1>
                <MainBtn
                    link={'/contact'}
                    text="Contact Me" 
                    className="font-semibold mt-5 rounded-sm" 
                />
            </div>
            <div className="bg-yellow-100 px-5 bg-image">
                <img className='xl:w-64 lg:w-56 md:w-44 w-36 drop-shadow-xl' src={headerImage} alt="" />
            </div>
        </header>
    )
}