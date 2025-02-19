import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='flex flex-row justify-center gap-2 items-center  mb-3 text-[3rem]'>
        <h1 className='font-bold text-white'> {text1} <span className='text-white font-bold '>{text2}</span></h1>
        <div className='w-[8vw]  h-[4px] bg-white'></div>
    </div>
  )
}

export default Title