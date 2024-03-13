import React, { useEffect, useReducer, useState } from 'react'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import useWinSize from '../utils/WinCalc';

export const NavBar = () => {
    const [isOpen, setOpen] = useState(false)
    const { w } = useWinSize()

    useEffect(() => {
        if (w > 768) {
            setOpen(false)
        }
    }, [w])
    return (
        <nav className=''>
            <div className={`glass-morph flex flex-col md:flex-row min-w-fit justify-between md:items-center md:px-16 px-4 py-2 mx-6 md:m-0 my-2 border-2 md:border-none transition-transform ease-in-out md:h-fit ${isOpen ? "rounded-lg" : "rounded-full"}`}>
                <section className='flex items-center justify-between'>
                    <div>
                        logo
                    </div>
                    <div className='md:hidden' onClick={() => setOpen(prev => !prev)}>
                        <DragHandleIcon fontSize='large' />
                    </div>
                    <div className='ml-2 hidden md:block'>
                        Joboffers
                    </div>
                </section>
                <section className={` md:block md:opacity-100 md:max-h-fit transition-all ${isOpen ? "opacity-100 menu-open" :"opacity-0 max-h-0"} `}>
                    <ul className={`grid md:grid-cols-4 gap-x-5 md:border-2 md:rounded-full p-2 gap-y-5`}>
                        <li className={`menu-item md:max-h-fit md:opacity-100`}><div className='rounded-full px-2 py-1 text-center md:hover:bg-slate-400 cursor-pointer'>Feature</div></li>
                        <li className={`menu-item md:max-h-fit md:opacity-100`}><div className='rounded-full px-2 py-1 text-center md:hover:bg-slate-400 cursor-pointer'>About</div></li>
                        <li className={`menu-item md:max-h-fit md:opacity-100`}><div className='rounded-full px-2 py-1 text-center md:hover:bg-slate-400 cursor-pointer'>Pricing</div></li>
                        <li className={`menu-item md:max-h-fit md:opacity-100`}><div className='rounded-full px-2 py-1 text-center md:hover:bg-slate-400 cursor-pointer'>Blog</div></li>
                    </ul>
                </section>
                <section className={`flex items-center justify-center text-white md:justify-normal font-normal text-nowrap md:opacity-100 md:h-fit transition-all  ${isOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
                    <div className='rounded-full w-full text-center bg-[#422C9F] px-8 py-2'>
                        <span>Get Started</span>
                    </div>
                </section>
            </div>
        </nav>
    )
}