export default function Box({ position, value, onClick = () => {}}) {
  return <div onClick={onClick} className="w-10 h-10 border bg-white border-black -ml-[1px] -mt-[1px] flex justify-center items-center"> 
    {value}
  </div>
}