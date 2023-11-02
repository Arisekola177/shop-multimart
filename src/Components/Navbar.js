import React from 'react'
import { logo } from '../assets/images'

const Navbar = () => {
    const links = [
        {name: "Home", path: '/'},
        {name: "Shop", path: '/shop'},
        {name: "About", path: '/about'},
        {name: "Contact", path: '/contact'},
    ]
  return (
    <div className='w-full h-20 border sticky border-none shadow-lg'>
        <div className='px-4 flex py-8 flex-col gap-80 md:flex-row md:justify-between  md:items-center'>
             <div>
                <img className='w-20' src={logo} alt='logo' />
             </div>
             <div className='flex gap-10 items-center  '>
                {

                    links.map((link) => (
                        <ul className=''  key={link.name}>
                            <li className=''>
                                <a className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"href={link.path}>{link.name}</a>
                             
                            </li>
                        </ul>
                    ))
                }
             </div>
        </div>
    </div>
  )
}

export default Navbar