import { bootstrapLogo, cssLogo, htmlLogo, jsLogo, laravelLogo, phpLogo, pythonLogo, reactLogo, sassLogo, tailwindLogo, typescriptLogo, vueLogo } from "../assets/exporter";

export default function Skill() {
    const skills = [
        {id: 1, name: "HTML", src: htmlLogo },
        {id: 2, name: "CSS", src: cssLogo },
        {id: 3, name: "Sass", src: sassLogo },
        {id: 4, name: "JavaScript", src: jsLogo },
        {id: 5, name: "TypeScript", src: typescriptLogo },
        {id: 6, name: "Bootstrap", src: bootstrapLogo },
        {id: 7, name: "Tailwindcss", src: tailwindLogo },
        {id: 8, name: "Python", src: pythonLogo },
        {id: 9, name: "PHP", src: phpLogo },
        {id: 10, name: "React JS", src: reactLogo },
        {id: 11, name: "Vue JS", src: vueLogo },
        {id: 12, name: "Laravel", src: laravelLogo },
    ]
  return (
    <div className="mt-10 grid xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-10 overflow-y-hidden overflow-x-auto">
        {skills.map(skill => (
            <div className="flex flex-col gap-1 items-center justify-between" key={skill.id}>
                {skill.name == "Tailwindcss" ? 
                (<img className="w-24 hover:drop-shadow-2xl" src={skill.src} alt={skill.name} />) : 
                <img className="w-16 hover:drop-shadow-2xl" src={skill.src} alt={skill.name} />}
                <span className="font-light">{skill.name}</span> 
            </div>
        ))}
    </div>
  )
}
