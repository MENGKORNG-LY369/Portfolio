/* eslint-disable react/no-unescaped-entities */

import { headerImage } from '../assets/exporter'
import TalkBtn from './button/TalkBtn'

export function Header() {
  return (
    <header className="flex px-20 py-5 gap-10 items-center rounded-md text-black">
        <div className="flex-1 mt-10">
            <h1 className="font-semibold text-3xl">Hi👋, My name is <span className="bg-[#FFEF5C] px-2 rounded-md ">Mengkorng Ly</span><br />A Student at Passerelles Numeriques Cambodia</h1>
            <TalkBtn text="Learn more" style="mt-7" />
        </div>
        <div className="bg-[#FFEF5C] rounded-md px-5">
          <img className='w-60' src={headerImage} alt="" />
        </div>
    </header>
  )
}