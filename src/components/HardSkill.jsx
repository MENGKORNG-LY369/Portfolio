import { bootstrapLogo, gitHub, htmlCss, jiraLogo, jsLogo, laravelLogo, mysqlLogo, nodeJs, phpLogo, pythonLogo, reactLogo, sassLogo, tailwindLogo, typescriptLogo, vueLogo } from "../assets/exporter";
import CardSkill from "./card/CardSkill";

export default function HardSkill() {
    const skills = [
        {id: 1, name: "HTML & CSS", image: htmlCss, style: 'w-[105px]'},
        {id: 12, name: "Sass", image: sassLogo, style: 'w-[75px]'},
        {id: 2, name: "Python", image: pythonLogo, style: 'w-[75px]'},
        {id: 3, name: "JavaScript", image: jsLogo, style: 'w-[75px]'},
        {id: 7, name: "TypeScript", image: typescriptLogo, style: 'w-[75px]'},
        {id: 5, name: "Bootstrap", image: bootstrapLogo, style: 'w-[75px]'},
        {id: 6, name: "Tailwindcss", image: tailwindLogo, style: 'w-[75px]'},
        {id: 15, name: "Node JS", image: nodeJs, style: 'w-[75px]'},
        {id: 13, name: "React JS", image: reactLogo, style: 'w-[75px]'},
        {id: 14, name: "Vue JS", image: vueLogo, style: 'w-[75px]'},
        {id: 11, name: "GitHub", image: gitHub, style: 'w-[75px]'},
        {id: 8, name: "Jira", image: jiraLogo, style: 'w-[75px]'},
        {id: 4, name: "MySql", image: mysqlLogo, style: 'w-[75px]'},
        {id: 9, name: "PHP", image: phpLogo, style: 'w-[75px]'},
        {id: 10, name: "Laravel", image: laravelLogo, style: 'w-[75px]'},
    ];
  return (
    <section className="py-10">
        <h2 className="text-2xl text-slate-700 text-center font-medium py-3">Hard Skill</h2>
        <div className="mt-5 grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 xl:gap-10 md:gap-5 sm:gap-3 gap-2 overflow-y-hidden overflow-x-auto">
            {skills.map(skill => (
                <CardSkill 
                    key={skill.id}
                    image={skill.image} 
                    title={skill.name} 
                    style={skill.style}
                />
            ))}
        </div>
    </section>
  )
}
