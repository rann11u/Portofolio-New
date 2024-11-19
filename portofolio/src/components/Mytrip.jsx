import React from 'react'
import { hiArrowNarrowfromRight, HiArrowNarrowRight } from 'react-icons/hi'
import padang from '../assests/daerah/padang.jpeg';
import lembang from '../assests/daerah/lembang.jpg';
import surabaya from '../assests/daerah/surabaya.jpg';
import palembang from '../assests/daerah/palembang.jpg'

export const Mytrip = () => {
    return (
        <div name='mytrip' className=' text-black bg-[#EEEEEE]'>
            <div className='max-w-[1400px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
                <div className='pb-8'>
                    <div className='w-full h-[100px] flex justify-between items-center px-7'>
                        <button className='text 1-xl font-normal text-white rounded-full group px-6 py-3 my-2 flex items-center bg-[#222831] hover:bg-[#00ADB5] duration-200'>View more</button>
                        <div className='absoulute w-16'>
                            <HiArrowNarrowRight className='ml-3' />follow
                        </div>
                    </div>
                    <p className='text-3xl inline font-bold  text-black flex border-b-4 border-[#00ADB5] py-4'>Just some of my trips to voriuos place </p>

                    {/* container */}
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 py-4'>
                        <div className='container mx-auto'>
                            <div className='border rounded-lg shadow-lg p-10 bg-[#222831] text-white'>
                                <div className='w-2 h-10 cursor-pointer'>
                                    <HiArrowNarrowRight className='text m-auto' />
                                </div>
                                <img src={padang} alt='padang' className='w-[200px] float-left mr-4'></img>
                                <h1 className='font-bold'>Padang</h1>
                                <h3 className='italic'>20 Juli 2023</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, esse quos. Excepturi aut eius obcaecati eum dolor, inventore facere consequuntur porro amet vero nobis nulla enim provident mollitia itaque quisquam!</p>
                            </div>
                        </div>
                        <div className='container mx-auto'>
                            <div className='border rounded-lg shadow-lg p-10 bg-[#222831] text-white'>
                                <div className='w-2 h-10 cursor-pointer'>
                                    <HiArrowNarrowRight className='text m-auto' />
                                </div>
                                <img src={palembang} alt='padang' className='w-[200px] float-left mr-4'></img>
                                <h1 className='font-bold'>Palembang</h1>
                                <h3 className='italic'>20 Juli 2023</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, esse quos. Excepturi aut eius obcaecati eum dolor, inventore facere consequuntur porro amet vero nobis nulla enim provident mollitia itaque quisquam! lorem lorem dikit</p>
                            </div>
                        </div>
                        <div className='container mx-auto'>
                            <div className='border rounded-lg shadow-lg p-10 bg-[#222831] text-white'>
                                <div className='w-2 h-10 cursor-pointer'>
                                    <HiArrowNarrowRight className='text m-auto' />
                                </div>
                                <img src={lembang} alt='padang' className='w-[200px] float-left mr-4'></img>
                                <h1 className='font-bold'>Lembang</h1>
                                <h3 className='italic'>20 Juli 2023</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, esse quos. Excepturi aut eius obcaecati eum dolor, inventore facere consequuntur porro amet vero nobis nulla enim provident mollitia itaque quisquam!</p>
                            </div>
                        </div>
                        <div className='container mx-auto'>
                            <div className='border rounded-lg shadow-lg p-10 bg-[#222831] text-white'>
                                <div className='w-2 h-10 cursor-pointer'>
                                    <HiArrowNarrowRight className='text m-auto' />
                                </div>
                                <img src={surabaya} alt='padang' className='w-[200px] float-left mr-4'></img>
                                <h1 className='font-bold'>Surabaya</h1>
                                <h3 className='italic'>20 Juli 2023</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, esse quos. Excepturi aut eius obcaecati eum dolor, inventore facere consequuntur porro amet vero nobis nulla enim provident mollitia itaque quisquam!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mytrip