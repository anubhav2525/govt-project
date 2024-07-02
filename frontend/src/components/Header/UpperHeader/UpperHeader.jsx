import React from 'react'

const UpperHeader = () => {
  return (
    <div className='grid grid-cols-2 gap-1 sm:grid-cols-4 md:grid-cols-6 w-full py-1 px-4'>
      <a href="#" className="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded text-xs text-center sm:text-sm px-3 py-2 ">राजस्थान सरकार</a>
      <a href="#" className="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded text-xs sm:text-sm px-3 py-2 md:col-span-3">राजस्थान सरकार</a>
      <a href="#" className="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded text-xs sm:text-sm px-3 py-2 text-center">राजस्थान सरकार</a>
      <a href="#" className="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded text-xs sm:text-sm px-3 py-2 text-center">राजस्थान सरकार</a>
    </div>
  )
}

export default UpperHeader
