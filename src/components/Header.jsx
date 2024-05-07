/* eslint-disable react/no-unescaped-entities */

// import { headerImage } from '../assets/exporter'

export function Header() {
  return (
    <header className="flex justify-between p-8 gap-10 bg-teal-600 rounded-md text-white">
        <div className="flex-2 mt-10">
            <h1 className="font-bold text-3xl">Hi, I'm <span className="text-orange-300">Mengkorng Ly</span><br />A Student at Passerelles Numeriques Cambodia</h1>
        </div>
        <div className="flex-1">
            {/* <img className='w-60' src={headerImage} alt="" /> */}
        </div>
    </header>
  )
}