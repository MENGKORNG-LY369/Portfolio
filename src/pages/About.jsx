import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Skill from "../components/Skill";

export default function About() {
  return (
    <>
      <Header />
      <div className="">
        <AboutMe />
        <Skill />
        <Education />
        <Experience />
      </div>
    </>
  );
}
