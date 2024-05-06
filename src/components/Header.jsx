/* eslint-disable react/no-unescaped-entities */

import { profile } from '../assets/exporter'

export default function Header() {
  return (
    <header className="flex justify-between">
        <div className="flex-1">
            <h1 className="font-bold">Hi, <br />I'm Mengkorng Ly</h1>
        </div>
        <div className="flex">
            <img className='flex-grow-0' src={profile} alt="" />
        </div>
    </header>
  )
}
