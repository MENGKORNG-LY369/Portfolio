import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Header from "../components/Header";
import HardSkill from "../components/HardSkill";
import SotfSkill from "../components/SotfSkill";
import Reference from "../components/Reference";

export default function About() {
  return (
    <>
      <Header />
      <div className="">
        <AboutMe />
        <HardSkill />
        <SotfSkill />
        <Education />
        <Experience />
        <Reference />
      </div>
    </>
  );
}