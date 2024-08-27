import React from 'react'

function Query() {
  return (
    <div className="py-4 bg-white border-4 border-blue-600 rounded-xl lg:mx-8 mx-2">
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Query</p>
            <p className='py-6 text-2xl font-semibold'>Submit the Query below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/bejyomda" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input 
                    type="text" 
                    name="name" 
                    placeholder='Enter your name' 
                    className='p-2 bg-transparent border-2 border-gray-500 rounded-md  focus:outline-none'
                />
                <input 
                    type="text" 
                    name="mobile no." 
                    placeholder='Enter your mobile no.' 
                    className='p-2 mt-4 bg-transparent border-2 border-gray-500 rounded-md  focus:outline-none'
                />
                <input 
                    type="text" 
                    name="email" 
                    placeholder='Enter your email' 
                    className='my-4 p-2 bg-transparent border-2 border-gray-500 rounded-md  focus:outline-none'
                />
                <textarea 
                    name="message"
                    placeholder='Enter your query'  
                    rows="10"  
                    className='p-2 bg-transparent border-2 border-gray-500 rounded-md  focus:outline-none'
                > </textarea>

                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
            </form>
        </div>
      </div>  
    </div>
  )
}

export default Query
