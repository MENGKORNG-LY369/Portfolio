/* eslint-disable react/prop-types */
export default function TalkBtn(props) {
  return (
    <button className="px-3 py-1.5 rounded-md text-white transition-all bg-orange-400 active:bg-orange-500">{props.text}</button>
  )
}