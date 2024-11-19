import React from 'react'

import HTML from '../assests/html.png';
import JavaScript from '../assests/javascript.png';
import CSS from '../assests/css.png';
import Node from '../assests/node.png';
import React2 from '../assests/react.png';
import GitHub from '../assests/github-logo.png';
import Blender from '../assests/blender.png';
import C from '../assests/c.png';


const skill = () => {
  return (
    <div name='skill' className='w-full h-screen bg-[#EEEEEE] text-black'>
        {/* Container */}
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#00ADB5] flex justify-center '>Experience</p>
                <p className='py-4'>// These These are some skills or experiences that I am currently developing</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-slate-350 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='html logo'></img>
                </div>
                <div className='shadow-md shadow-slate-350 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='html logo'></img>
                </div>
                <div className='shadow-md shadow-slate-350 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='html logo'></img>
                </div>
                <div className='shadow-md shadow-slate-350 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt='html logo'></img>
                </div>
                <div className='shadow-md shadow-slate-350 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={React2} alt='html logo'></img>
                </div>
                <div className='shadow-md shadow-slate-350 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt='html logo'></img>
                </div>
                <div className='shadow-md shadow-slate-350 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Blender} alt='html logo'></img>
                </div>
                <div className='shadow-md shadow-slate-350 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={C} alt='html logo'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default skill