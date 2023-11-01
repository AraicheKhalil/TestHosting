import { useState } from "react"
import { IconContext } from "react-icons"
import { IoSearchOutline } from 'react-icons/io5'
import { MdOutlineClear } from 'react-icons/md'

export  default function AppSearch({DisplaySearch}) {

    const [inputFeild, setInputFeild] = useState('')

    return (
        <div className={`Center ${DisplaySearch ? 'active' : 'max-sm:hidden'} relative flex items-center w-1/2 space-x-2 max-sm:w-full`}>
            <input id="searchInput" type="text" placeholder="Search" value={inputFeild} onChange={e => setInputFeild(e.target.value)} className=" max-h-9 w-full  rounded-l p-4 text-white border border-BordersColor focus:outline-none focus:ring-1 focus:ring-focusColor focus:border-transparent bg-[#121212] " />
            <button type='submit' className='h-9  bg-SecondaryColor  sm:px-5 max-sm:px-2.5 absolute top-0 right-0'>
                <IconContext.Provider value={{size: 24}}>
                    <IoSearchOutline />
                </IconContext.Provider>
            </button>
            <button onClick={e => {
                setInputFeild('');
                e.preventDefault();}} 
                className={` ${inputFeild ? 'flex' : 'hidden'} absolute top-0 h-9 rounded-full w-9 justify-center items-center sm:right-16 right-11 hover:bg-SecondaryColor hover:bg-opacity-50`}>
                    <IconContext.Provider value={{size: 24}}>
                        <MdOutlineClear />
                    </IconContext.Provider>
            </button>
        </div>
    )
}
  