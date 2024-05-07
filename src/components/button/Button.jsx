/* eslint-disable react/prop-types */
export default function Button(props) {
  return (
    <button className="px-3 py-1.5 rounded-md text-white transition-all bg-orange-300 active:bg-orange-400">{props.text}</button>
  )
}