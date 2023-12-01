import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset, incrementByAmount } from '../redux/counterSlice'

function Counter() {

  // state for input box
  const [amount,setAmount] = useState("")

  // used to extract data from the Redux store.
  const count = useSelector((state)=>state.counter.count) 
  const dispatch = useDispatch()

  // function to increment from input box value
  const handleIncrement =()=>{
    if(!amount){
      alert("Please Provide Amount")
    }else{
      // update State in Store
      dispatch(incrementByAmount(Number(amount)))
    }
  }
  
  return (

    <div style={{ height: '70vh' }} className='w-100 d-flex justify-content-center align-items-center'>

      <div className='d-flex justify-content-center align-items-center border rounded p-5 flex-column'>

        <h1 style={{ fontSize: '100px' }}>{count}</h1>

        <div className='d-flex justify-content-between w-100 mt-5'>
          <button onClick={()=>dispatch(decrement())} className="btn btn-warning">Decrement</button>
          <button onClick={()=>dispatch(reset())} className="btn btn-danger">Reset</button>
          <button onClick={()=>dispatch(increment())} className="btn btn-success">Increment</button>
        </div>

        <div className="d-flex mt-5">
          <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control' placeholder='Enter Amount to be incremented!!!' />
          <button onClick={handleIncrement} className="btn btn-primary ms-3">Increment by Amount</button>
        </div>

      </div>

    </div>
  )
}

export default Counter
