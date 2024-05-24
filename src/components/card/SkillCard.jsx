/* eslint-disable react/prop-types */
export default function SkillCard(props) {
  return (
    <article className="rounded-lg text-center px-2 py-3 border hover:border-yellow-100 hover:bg-yellow-100 transition-all flex flex-col justify-between gap-3">
      <div className="">
        <img className={`${props.style} mx-auto`} src={props.image} alt="" />
      </div>
      <div className="">
        <h3 className="font-medium">
          {props.title}
        </h3>
      </div>
    </article> 
  )
}
