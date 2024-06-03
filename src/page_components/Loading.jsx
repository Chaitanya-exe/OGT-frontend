import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";


const Loading = () => {
  return (
    <div className='flex justify-center  items-center h-screen w-screen text-center'>
      <PropagateLoader
    color={'#D8BFD8'}
        loading={true}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        className=''
      />
    </div>
  )
}

export default Loading
