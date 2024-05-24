/* eslint-disable react/prop-types */
export default function TalkBtn(props) {

  return (
    <button  className={'px-3 py-1.5 text-white transition-all bg-yellow-400 active:bg-yellow-500 '+ props.className}>{props.text}</button>
  )
}