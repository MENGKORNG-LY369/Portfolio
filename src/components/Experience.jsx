import SkillCard from "./card/SkillCard";


export default function Experience() {
  const four = [1, 2, 3, 4];
  return (
    <section className="grid xl:grid-cols-4 px-20 gap-6">
      {four.map(one => (
        <SkillCard key={one} titile="Hello world" text="Hello world from khmer" />
      ))}
    </section>
  )
}
