import React from 'react'

const Item = ({x}) => {
  return (
    <div className='bg-green-700 text-white mx-[40px] w-[200px]'>
      <h3>{x.title}</h3>
      <p>{x.body}</p>
    </div>
  )
}

export default Item
