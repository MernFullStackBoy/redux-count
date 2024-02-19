import React from 'react'
import Button from './components/button'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, removeCount, resetCount } from './reducers/count'

function App() {

  const state = useSelector(state => state.count)

  const dispatch = useDispatch()

  return (
    <div className=' w-170px mx-auto mt-[150px] '>
      <h1 className=' text-center text-[30px] font-bold '>Counter with redux</h1>
      <h1 className='text-center text-[70px] font-bold '>{state}</h1>
      <div className=' w-[200px] flex justify-between my-[30px] mx-auto '>
        <Button bg={"bg-red-500"} onclick={() => dispatch(addCount())} children={"Plus"} />
        <Button bg={"bg-blue-500"} onclick={() => dispatch(removeCount())} children={"Minus"} />
        <Button bg={"bg-black"} children={"Reset"} onclick={() => dispatch(resetCount())} />
      </div>
    </div>
  )
}

export default App