import React from 'react'
import { hiArrowNarrowfromRight, HiArrowNarrowRight } from 'react-icons/hi'
import Foto from '../assests/Foto.png'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#EEEEEE]'>

            {/*container*/}
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center py-20 px-4 md:flex-row'>
                <div className='rounded-2xl mx-auto w-2/3 md:w-full'>
                    <img src={Foto} alt="Foto Image"></img>
                </div>
                <div className='flex- flex-col justify-center h-full'>
                    <p className='text-[#00ADB5]'>Hi, I introduce myself as.</p>
                    <h1 className='text-4xl md:text-6xl font-bold text-[#222831]'>Trinanda Iman</h1>
                    <h2 className='text-4xl md:text-7xl font-bold text-[#393E46]'>Becoming a Game Developer</h2>
                    <p className='text-[#393E46] py-4 max-w-[700px]'>Game development is the process of creating video games, which involves various stages such as planning, design, development, testing, and game release. I want to become a game developer because I used to get scolded by my mom a lot, and now I want to create as many games as possible so that other kids can also get scolded by their moms, haha!</p>
                    <div>
                        <button className='text-white border-2 group px-6 py-3 my-2 flex items-center bg-[#222831] hover:bg-[#00ADB5] duration-200'>
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home