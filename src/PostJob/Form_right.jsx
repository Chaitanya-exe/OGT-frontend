import React, { useEffect,useState } from 'react'

const Form_right = ({selectedOption}) => {
  const [total, setTotal] = useState(56);
  useEffect(()=>{
    if(selectedOption) {
      setTotal(56)
      setTotal(total + parseInt(selectedOption))
    }
  },[selectedOption])
  
  return (
    <div className='my-28 mx-2 p-2 bg-purple-50 rounded-lg'>
    <div className='flex justify-between   '>
    <h1>total</h1>
    <p>${total}</p>

    </div>
      
    </div>
  )
}

export default Form_right
