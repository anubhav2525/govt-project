import React from 'react'
import governmentLogo from "../../assets/image/homePage/government-logo.png"
import imesRajasthan from "../../assets/image/homePage/imes-rajasthan.png"

const LowerHeader = () => {
  return (
    <div className='grid sm:grid-cols-2  gap-1 md:grid-cols-12 w-full mb-1  py-1 px-4'>
      <div className='  md:col-span-9 px-4 py-2'>
        <div className='flex flex-row items-center gap-8 w-full '>
          <div>
            <img src={governmentLogo} alt="Government logo" className='md:h-20 sm:h-16 h-12' />
          </div>
          <div className=''>
            <div className='md:text-base text-xs text-slate-900 dark:text-white'>Government Of Rajasthan</div>
            <div className='md:text-xl text-sm text-red-600 dark:text-red-700'>Excise Department
            </div>
          </div>
        </div>
      </div>
      <div className='md:col-span-3'>
        <div className=''>
          <img src={imesRajasthan} alt="Government logo" className='md:h-24 h-16 ' />
        </div>
      </div>

    </div >
  )
}

export default LowerHeader
