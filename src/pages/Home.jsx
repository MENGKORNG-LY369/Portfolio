import Education from "../components/Education";
import Experience from "../components/Experience";
import { Header } from "../components/Header";
import Skill from "../components/Skill";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="">
          <Header />
        </div>
        <div className="px-24 bg-slate-100">
          <Education />
        </div>
        <div className="px-24">
          <Skill />
        </div>
        <Experience />
      </div>
    </>
  )
}