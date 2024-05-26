import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function MainBtn(props = { text: String, className: String, link: String, btnType: String }) {
  return (
    <Link to={props.link}>
      <button type={props.btnType} className={'px-3 py-1.5 text-white transition-all bg-yellow-400 shadow-yellow-300 hover:shadow-md active:bg-yellow-500 ' + props.className}>{props.text}</button>
    </Link>
  )
}