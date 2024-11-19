import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../assests/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div class="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#EEEEEE] text-black">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: '50px' }}></img>
      </div>

      {/*Menu*/}
      <ul className=' hidden md:flex'>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li><Link to="about" smooth={true} duration={500}>
          About
        </Link></li>
        <li><Link to="skill" smooth={true} duration={500}>
          Skill
        </Link></li>
        <li><Link to="project" smooth={true} duration={500}>
          Project
        </Link></li>
        <li><Link to="mytrip" smooth={true} duration={500}>
          My Trip
        </Link></li>
        <li><Link to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
      </ul>

      {/*Burgir*/}
      <div onClick={handleClick} className='absolute right-0 w-16 z-10'>
        {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>

      {/*Mobile Menu*/}
      <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#EEEEEE] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link></li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="skill" smooth={true} duration={500}>
          Skill
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="project" smooth={true} duration={500}>
          Project
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="mytrip" smooth={true} duration={500}>
          My Trip
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
      </ul>

      {/*Social Icons*/}
      <div>
        <ul className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-500'>
            <a className='flex justify-between items-center w-full text-gray-100'
              href='/'>
              Linkedin <FaLinkedin size={30}></FaLinkedin>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-100'
              href='/'>
              GitHub <FaGithub size={30}></FaGithub>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-white'>
            <a className='flex justify-between items-center w-full text-black'
              href='/'>
              Instagram <FaInstagram size={30}></FaInstagram>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#c71610]'>
            <a className='flex justify-between items-center w-full text-gray-100'
              href='/'>
              Email <HiOutlineMail size={30}></HiOutlineMail>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar