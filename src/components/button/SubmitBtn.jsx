/* eslint-disable react/prop-types */
export default function SubmitBtn(props = {btnType: String, className: String, text: String }) {
  return (
    <button type={props.btnType} className={'px-3 py-1.5 text-white transition-all bg-yellow-400 shadow-yellow-300 hover:shadow-md active:bg-yellow-500 ' + props.className}>{props.text}</button>
  )
}
