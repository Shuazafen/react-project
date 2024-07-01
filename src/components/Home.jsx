import React from 'react'
import { BsBank2 } from "react-icons/bs";
import { SlUser } from "react-icons/sl";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";


const Home = () => {
  return (
    <div>
    <div className="flex shadow-md bg-white">
    <div className="pt-[2rem] ml-[14rem]">
      <BsBank2 className='w-12 h-12 text-blue-400 hover:text-green-400 transition-0.5s duration-200' />
      <p className="text-base font-medium">Accounts & Deposits</p>
      </div>

      <div className="pt-[2rem] ml-[10rem]">
      <SlUser className='w-12 h-12 text-blue-400 hover:text-green-400 transition-0.5s duration-200'/>
      <p className="">Personal Loans</p>
      </div>

      <div className='pt-[2rem] ml-[10rem]'>
      <FaRegCreditCard className='w-12 h-12 text-blue-400 hover:text-green-400 transition-0.5s duration-200'/>
      <p className="">Credit card</p>
      </div>

      <div className="pt-[2rem] ml-[10rem]  items-center">
<IoCard className='w-12 h-12 text-blue-400  hover:text-green-400 transition-0.5s duration-200'/>
<p className="ml-[5px]">Debit card</p>
      </div>

      <div className="pt-[2rem] ml-[10rem]">
<FaHandHoldingUsd className='w-12 h-12 text-blue-400 hover:text-green-400 transition-0.5s duration-200'/>
<p className="">Wealth</p>
      </div>
    </div>

    <div className="m-10 ml-[40px] inline">
      <div className="flex w-[100%]">
        <h1 className='text-bold text-3xl pr-2 ml-[40px]'>Promotions</h1>
        <p className="text-gray-600 ml-[1000px]">View more</p>
      </div>


      
    </div>
    
  </div>
      
      
      
  )
}

export default Home
