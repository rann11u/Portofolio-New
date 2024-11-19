import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#EEEEEE] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/bqooemmb' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00ADB5]'>Contact</p>
                <p className='py-4'>// Submit teh form or contact this email direcly 2410631250033@student.unsika.ac.id</p>
            </div>
            <input className='p-1 bg-[#10375C] text-white' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#10375C] text-white' type="text" placeholder='Email' name='email' />
            <textarea className='bg-[#10375C] text-white p-2 rounded-lg' name="massage" rows='10' placeholder='Massage'></textarea>
            <button className='border-2 border-black hover:bg-[#222831] hover:border-[#222831] px-4 py-3 my-8 mx-auto flex items-center mx-auto hover:text-white'>Let's team up</button>
        </form>

    </div>
  )
}

export default Contact