
import React from 'react'

const Button = (props) => {
  return (
    <div>
      <div className='flex justify-center items-center gap-6 p-4'>

        <button
          style={{ opacity: props.index === 1 ? 0.5 : 1 }}
          onClick={() => {
            if (props.index > 1) {
              props.setIndex(prev => prev - 1)
              props.setUserData([])
            }
          }}
          className='bg-amber-400 text-black px-4 py-2 text-sm cursor-pointer active:scale-95 font-semibold'
        >
          Previous
        </button>

        <h4>Page {props.index}</h4>

        <button
          onClick={() => {
            props.setIndex(prev => prev + 1)
            props.setUserData([])
          }}
          className='bg-amber-400 text-black px-4 py-2 text-sm cursor-pointer active:scale-95 font-semibold'
        >
          Next
        </button>

      </div>
    </div>
  )
}

export default Button
