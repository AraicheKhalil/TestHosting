
import YoutubeLogo from '../../assets/Icons/Youtube logo.png';
import { FiMenu } from 'react-icons/fi';
import { IconContext } from "react-icons";

export default function SidebareToggle ({ hidden , handleMenuToggle}) {


  return (
    <div className={`Start flex items-center sm:space-x-5 max-sm:space-x-1.5 mr-3 ${hidden && 'hidden'}`}>
      <div onClick={handleMenuToggle}  className='megaMenu cursor-pointer flex max-sm:hidden'>
          <IconContext.Provider value={{size: 24,className: 'hover:bg-SecondaryColor hover:bg-opacity-50 rounded-full '}}>
              <FiMenu />
          </IconContext.Provider>
      </div>
      <div className="mainLogo min-w-[90px] h-[20px]">
        <a to='/'>
          <img className="w-full" src={YoutubeLogo} alt="" />
        </a>
      </div>

    </div>
  )
}
  