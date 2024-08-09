import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>

      <div className='flex flex-col gap-4'>
      <p>Are you ready for some</p>
      <h1 className='uppercase font-bold text4xl sm:text-5xl md:text-6xl lg:text-7xl'>GYM <span className='text-blue-400 font-medium'>GAINS</span>?!</h1>
      </div>
     
      <p className='text-sm md:text-base font-light'>Fated brothers and sister's of fitness, the time has come to obtain <span className='text-blue-400 font-medium'>Forbidden Knowledge</span>, and engage in the <span className='text-blue-400 font-medium'>Secret Learnings</span> that will transform your gym experience into one of <span className='text-blue-400 font-medium'>Omnicient Productivity! </span>With just a few clicks, your personalised workout will be complete</p>

     <Button func={() => {
      window.location.href = '#generate'
     }} text={"Acquire Wisdom"} />
    </div>
  )
}
