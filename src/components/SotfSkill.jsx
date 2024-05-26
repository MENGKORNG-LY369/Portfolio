import { checkIcon } from "../assets/exporter";
import CardSkill from "./card/CardSkill";

export default function SotfSkill() {
    const softSkill = [
        {id: 1, title: "Honest", description: "To be honest with poeple who work with when something goes wrong"},
        {id: 2, title: "Respect", description: ""},
        {id: 3, title: "Responsibility", description: ""},
        {id: 4, title: "Adaptability", description: ""},
        {id: 5, title: "Problem Solving", description: ""},
        {id: 6, title: "Collaboration", description: ""},
    ];
    return (
        <section className="py-10">
            <h2 className="text-2xl text-slate-700 text-center font-medium py-3">Sotf Skill</h2>
        <div className="mt-5 grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 xl:gap-10 md:gap-5 sm:gap-3 gap-2 overflow-y-hidden overflow-x-auto">
            {softSkill.map(skill => (
                <CardSkill key={skill.id} 
                    image={checkIcon}
                    title={skill.title}
                    // description={skill.description}
                />
            ))}
        </div>
        </section>
    )
}
