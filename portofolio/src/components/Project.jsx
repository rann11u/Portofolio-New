import React from 'react'
import DD from '../assests/project/DD.png'
import madara2 from '../assests/project/madara2.jpg'
import liebert from '../assests/project/liebert.png'
import game from '../assests/project/Game.png'
import prediksi from '../assests/project/prediksi.png'
import Gombal from '../assests/project/Gombal.png'

const Project = () => {
  return (
    <div name='project' className='w-full md:h-screen text-black bg-[#EEEEEE]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-black border-[#00ADB5] flex justify-center'>Project</p>
          <p className='py-4'>== Checek out some of my recent Project</p>
        </div>

        {/* container */}
        <div name='hover' className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 font-semibold'>

          {/* grid item 1*/}
          <div style={{ backgroundImage: `url(${game})` }} className='shadow-lg shadow-slate-350 group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover efek */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-semibold text-[#ffffff] tracking-wider'>
                Js Pixel Game
              </span>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEEEEE] text-[#393E46] font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEEEEE] text-[#393E46] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item 2*/}
          <div style={{ backgroundImage: `url(${liebert})` }} className='shadow-lg shadow-slate-350 group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover efek */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-semibold text-[#ffffff] tracking-wider'>
                Liebert Portofolio
              </span>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEEEEE] text-[#393E46] font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEEEEE] text-[#393E46] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item 3*/}
          <div style={{ backgroundImage: `url(${DD})` }} className='shadow-lg shadow-slate-350 group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover efek */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-semibold text-[#ffffff] tracking-wider'>
                Jurnal matdis
              </span>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEEEEE] text-[#393E46] font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEEEEE] text-[#393E46] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item 4*/}
          <div style={{ backgroundImage: `url(${Gombal})` }} className='shadow-lg shadow-slate-350 group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover efek */}
            <div name='hover' className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-[#ffffff] tracking-wider'>
                Gombalan Js
              </span>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEEEEE] text-[#393E46] font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEEEEE] text-[#393E46] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${madara2})` }} className='shadow-lg shadow-slate-350 group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover efek 5*/}
            <div name='hover' className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-[#ffffff] tracking-wider'>
                Blender render
              </span>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEEEEE] text-[#393E46] font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEEEEE] text-[#393E46] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${prediksi})` }} className='shadow-lg shadow-slate-350 group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover efek 6*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-semibold text-[#ffffff] tracking-wider'>
                Prediksi gender
              </span>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEEEEE] text-[#393E46] font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#EEEEEE] text-[#393E46] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project