/* eslint-disable react/prop-types */
export default function TalkBtn(props) {
  return (
    <button  className={'px-3 py-1.5 rounded-md text-black transition-all bg-[#FFEF5C] active:bg-[#fbea52] '+ props.className}>{props.text}</button>
  )
}