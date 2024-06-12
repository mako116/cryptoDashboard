import React from 'react'
import { Leftside } from './Leftside'
import { Rightside } from './Rightside'
import { Footer } from '../Footer/Footer'

export const Homesection = () => {
  return (
    <div className="w-full h-[100vh] flex justify-between flex-col">
        <div className='flex'>
        <div className="w-full">
        <Leftside/>
        </div>
        <div className="w-[500px]">
        <Rightside/>
        </div>
    </div>
    <div className="">
        <Footer/>
    </div>
    </div>
  )
}