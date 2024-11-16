import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#EEEEEE] text-black '>

            {/*Sedikit terjadi eror dimana pada resolusi tertentu about nya msih nyangkut di halaman yang atas*/}
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#00ADB5]'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Trinanda Iman, I'm a beginner let's learn together. </p>
                    </div>
                    <div>
                        <p>
                            As a gamer, I really want to become a professional game developer working at a large game company, such as Tencent, Takes Two, Moonton, or Garena. In addition, I have a variety of hobbies, including playing basketball, playing guitar, creating 3D animations, drawing, and exploring new things.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About