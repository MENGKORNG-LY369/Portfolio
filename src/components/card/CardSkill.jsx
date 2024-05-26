/* eslint-disable react/prop-types */

export default function CardSkill(props = { style: String, image: String, title: String, class: String, description: String }) {
    return (
        <article className={`rounded-lg text-center px-2 py-3 border hover:border-yellow-50 hover:bg-yellow-50 hover:shadow-sm select-none transition-all flex flex-col justify-between + ${props.class}`}>
            <div className="">
                <img className={`${props.style} mx-auto`} src={props.image} alt="" />
            </div>
            <div className="">
                <h3 className="font-medium py-1">
                    {props.title}
                </h3>
                <p className="text-pretty">{props.description}</p>
            </div>
        </article>
    )
}
