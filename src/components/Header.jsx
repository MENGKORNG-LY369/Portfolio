/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import { headerImage } from '../assets/exporter'
import TalkBtn from './button/TalkBtn'

export default function Header() {
  return (
    <header className="flex xl:px-20 lg:px-10 md:px-4 px-3 py-5 gap-10 items-center justify-center bg-[#fbf8f6] mt-3 rounded-md text-black">
        <div className="flex-1 mt-10">
            <h1 className="font-semibold xl:text-3xl md:text-2xl sm:text-xl">Hi👋, My name is <span className="bg-[#FFEF5C] px-2 rounded-md ">Mengkorng Ly</span>✨<br />A Student at Passerelles Numeriques Cambodia</h1>
            <Link to={'/contact'}>
              <TalkBtn text="Contact Me" className="mt-7 font-semibold" />
            </Link>
        </div>
        <div className="bg-[#FFEF5C] px-5 bg-image">
          <img className='w-64' src={headerImage} alt="" />
        </div>
    </header>
  )
}