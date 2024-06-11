import { useSelector, useDispatch } from 'react-redux'
import { changeHidden1, changeHidden2,
  changeHidden3, changeHidden4 } from "./store/textSlice/textSlice"

export default function App() {
  const text = useSelector((state) => state.texts.value)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col gap-4 overflow-auto h-dvh pt-20 items-center text-xl select-none bg-amber-300">
      <div className='text-4xl mb-5 bg-green-400 p-3 border-8 border-red-400'>{text.title}</div>
      <div className="w-[40%] cursor-pointer bg-red-400" onClick={() => dispatch(changeHidden1())}>
        <div className='flex border-8 border-green-500 p-3'>
          <div className='flex-1'>{text.p1.question}</div>
          {(text.p1.hidden) ? <div className='text-2xl'>+</div> : <div className='text-2xl'>-</div>}
        </div>
        {!text.p1.hidden && <div className='border-r-8 border-l-8 border-b-8 bg-green-300 border-green-500 p-3'>{text.p1.content}</div>}
      </div>
      <div className="w-[40%] cursor-pointer bg-red-400" onClick={() => dispatch(changeHidden2())}>
        <div className='flex border-8 border-green-500 p-3'>
          <div className='flex-1'>{text.p2.question}</div>
          {(text.p2.hidden) ? <div className='text-2xl'>+</div> : <div className='text-2xl'>-</div>}
        </div>
        {!text.p2.hidden && <div className='border-r-8 border-l-8 border-b-8 bg-green-300 border-green-500 p-3'>{text.p2.content}</div>}
      </div>
      <div className="w-[40%] cursor-pointer bg-red-400" onClick={() => dispatch(changeHidden3())}>
        <div className='flex border-8 border-green-500 p-3'>
          <div className='flex-1'>{text.p3.question}</div>
          {(text.p3.hidden) ? <div className='text-2xl'>+</div> : <div className='text-2xl'>-</div>}
        </div>
        {!text.p3.hidden && <div className='border-r-8 border-l-8 border-b-8 bg-green-300 border-green-500 p-3'>{text.p3.content}</div>}
      </div>
      <div className="w-[40%] cursor-pointer bg-red-400" onClick={() => dispatch(changeHidden4())}>
        <div className='flex border-8 border-green-500 p-3'>
          <div className='flex-1'>{text.p4.question}</div>
          {(text.p4.hidden) ? <div className='text-2xl'>+</div> : <div className='text-2xl'>-</div>}
        </div>
        {!text.p4.hidden && <div className='border-r-8 border-l-8 border-b-8 bg-green-300 border-green-500 p-3'>{text.p4.content}</div>}
      </div>
    </div>
  )
}
