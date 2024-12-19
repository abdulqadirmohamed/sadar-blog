import React from 'react'

const Subscribe = () => {
  return (
    <div className='md:w-2/3 w-[85%] mx-auto text-center bg-gray-100 rounded-lg py-14 my-10'>
        <h1 className="text-4xl my-5 font-semibold">Subscribe by email</h1>
        <p className="text-gray-500">Get the full posts by email every week.</p>
        <div className='bg-white pl-6 pr-2 py-2 rounded-md border flex justify-center items-center w-2/6 mx-auto my-5'>
            <input type="text" placeholder='Your email address' className='outline-none w-full' />
            <button className='bg-black text-white px-4 py-2 rounded-lg'>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe