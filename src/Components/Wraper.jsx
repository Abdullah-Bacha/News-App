import React from 'react'

function Wraper({children}) {
  return (
    <div className='max-w-[75rem] m-auto'>{children}</div>
  )
}

export default Wraper