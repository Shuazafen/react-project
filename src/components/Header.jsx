import React,{useState} from 'react'
import { Dropdown } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import {IoSearch} from "react-icons/io5"
import {MdArrowDropDown} from "react-icons/md"

const Header = () => {
  
    const [openModal, setOpenModal] = useState(false);
  
  return (
    <div className='flex justify-between px-[200px] bg-gray-200 items-center'>
      <main className='flex items-center'>
      <div>
        You are in
      </div>

     <div>
      
   <div>
    <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className='text-black 
    font-extrabold focus:ring-blue-300 text-sm px-2 text-center inline-flex items-center dark:bg-blue-600
    dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='button'>Dropdown header <svg className='w-2.5 h-2.5 ms-3'
aria-hidden="true" xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
  <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='ml 1 4 4 4-4' />
    </svg>

    </button>

    <div id="dropdownInformation" className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44
     dark:bg-gray-700 dark:divide-gray-600'>
<div className='px-4 py-3 text-sm text-gray-900 dark:text-white'>
  <div>Master shua</div>
  <div className='font-medium truncate'>shua@flowbite.com</div>
</div>
<ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownInformationButton'>
  <li>
    <a href="#" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Dashboard</a>
  </li>
  <li>
    <a href="#" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Settings</a>
  </li>
  <li>
    <a href="#" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Earnings</a>
  </li>
  <li>
    <a href="#" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Sign-out</a>
  </li>
</ul>
    </div>
   </div>

     </div>
      </main>

      <main className='flex'>
      
      <span className='mr-2'>
        Services
      </span>

      <span className='mr-2'>
        Digital currencies
      </span>
      
      
      <span className='pt-[5px] mr-2'>
        <IoSearch />
      </span>





    <div>
      <p className='flex items-center' onClick={() => setOpenModal(true)}><span>Toogle modal</span>
      <span><MdArrowDropDown/ ></span></p>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  
</main>
      

<div className="bg-color-black ">
  <img src={img1} alt="" />
</div>

    </div>

    
  )
}

export default Header
