import { IconContext } from 'react-icons'
import { FiMenu } from 'react-icons/fi'
import YoutubeLogo from '../../assets/Icons/Youtube logo.png'
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { categories , MainBoxCategories } from '../../utils/constants/Constants'


const SideEffect = () => {

  // const [open , useOpen ] = useState(true) 


  return (
    <div id="sideBar" className={`
      sidebar fixed bg-[#0f0f0f] min-w-[72px] max-w-[240px] w-full h-full flex flex-col mt-14 pb-16 px-3 text-[#fff] transition-all
      hover:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-sideBarBg`
    }>

      <div className='sidebar-head fixed  px-3.5 py-4 flex items-center space-x-5  bg-red-500'>
        <div  className='megaMenu cursor-pointer '>
          <IconContext.Provider value={{size: 24,className: 'hover:bg-SecondaryColor hover:bg-opacity-50 rounded-full '}}>
              <FiMenu  />
          </IconContext.Provider>
        </div>
        <div className="mainLogo min-w-[90px] h-[20px]">
          <a to='/'>
            <img className="w-full" src={YoutubeLogo} alt="" />
          </a>
        </div>     
      </div>

      <div className='categories mt-14 py-4 flex flex-col'>

        <ul>
          {MainBoxCategories.map(cat => {
            return (
              <li key={cat.name} className='FirstClass flex items-center py-2 px-3.5 space-x-7 hover:bg-zinc-700 rounded-xl'>
                <div className='icon'>
                  {cat.icon}
                </div>
                <div className='tag'>{cat.name}</div>
              </li>
            )
          })}
        </ul>

        <hr className='my-3 -ml-3 bg-slate-900 dark:bg-gray-900' />

        <ul>
        {categories.map(cat => {
          return (
            <li key={cat.name} className='SecondClass flex items-center py-2 px-3.5 space-x-7 hover:bg-zinc-700 rounded-xl'>
              {cat.icon}
              <div>{cat.name}</div>
            </li>
          )
        })}
        </ul>
      </div>
      

    </div>
  )

}

export default SideEffect


// return (
//   <div className={`Start flex items-center h-14 max-h-14 bg-red-500 `}>
//         <div  className='megaMenu cursor-pointer flex max-sm:hidden'>
//             <IconContext.Provider value={{size: 24,className: 'hover:bg-SecondaryColor hover:bg-opacity-50 rounded-full '}}>
//                 <FiMenu />
//             </IconContext.Provider>
//         </div>
//         <div className="mainLogo min-w-[90px] h-[20px]">
//           <a to='/'>
//             <img className="w-full" src={YoutubeLogo} alt="" />
//           </a>
//         </div>

//       </div>
// )
