import { IoMdNotifications } from 'react-icons/io'
import { RiVideoAddFill } from 'react-icons/ri'
import { IoSearchOutline } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
// import avatar from '../../assets/Icons/jean-AI.png'
import { IconContext } from 'react-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProfileSet({searchBarToggle , hidden}) {

    const [UserState, setUserState] = useState({
        FullName : localStorage.getItem('FullName'),
        email : localStorage.getItem('email'),
        profilePicture : localStorage.getItem('profilePicture'),
        isSignIn : localStorage.getItem('isSignIn')
    })

    console.log(UserState.email);

    

  return (
    <div className='End flex items-center space-x-3 sm:space-x-6 pr-1.5'>
        <div onClick={searchBarToggle} className='sm:hidden mr-1'>
            {
                !hidden &&
                <IconContext.Provider value={{size: 24}}>
                    <IoSearchOutline />
                </IconContext.Provider>
            }
        </div>
        <div className="create m-0 max-sm:hidden">
        <IconContext.Provider value={{ size: 24 , className : 'm-0'}}>
            <RiVideoAddFill />
        </IconContext.Provider>
        </div>
        <div className="notic max-sm:hidden">
        <IconContext.Provider value={{ size: 24 }}>
            <IoMdNotifications />
        </IconContext.Provider>
        </div>

        {/* here start flowbit */}

        <div className='profileState '>
            {
                UserState.isSignIn === "signIn" ?
                <button 
                    type="button"
                    id="dropdownAvatarNameButton" 
                    data-dropdown-toggle="dropdownAvatarName-test" 
                    className="flex items-center text-sm font-medium text-gray-900 rounded-full  " >
                        <img className="w-8 h-8 min-w-[32px] rounded-full" src={UserState.profilePicture} alt="user photo" />
                </button>
                : <Link to='/signIn'>
                    <button type='button' className='flex items-center gap-2 text-base text-BlueColor py-1 px-2 rounded-2xl border border-solid border-BordersColor'>
                        <IconContext.Provider value={{className : 'text-xl font-extralight'}} >
                            <CgProfile />
                        </IconContext.Provider>
                        <div className='mb-0.5 whitespace-nowrap' to='/signIn'>Sign In </div>
                    </button>
                </Link>
            }

            <div 
                id="dropdownAvatarName-test" 
                className="inset-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-fit dark:bg-gray-700 dark:divide-gray-600 absolute top-2.5 right-24">
                    <div className="flex items-center gap-4 px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div className=''>
                            <img className='w-9 rounded-full' src={UserState.profilePicture} alt='' />
                        </div> 
                        <div>
                            <div className="font-medium ">{UserState.FullName}</div>
                            <div className="truncate">{UserState.email}</div>
                        </div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                    </ul>
                    <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </div>
            </div>
        </div>





    </div>
  )
}


// {
//     <div className="Profile">
//     <img  id="avatarButton"  type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-9 h-9 rounded-full cursor-pointer" src={avatar} alt="User dropdown" />
//     {/* add absolute top and rigth and remove hidden */}
//     <div id="userDropdown" className={`hidden z-100 absolute top-2.5 right-[90px]  divide-y divide-gray-500 rounded-lg shadow w-fit min-w-[200px] bg-blackButtonsColor_38 dark:divide-gray-600`}>
//         {
//             // state.SignIn === "signIn" ?
//             // <div className='flex gap-4 px-4 py-3'>
//             //     <div className=''>
//             //         <img className='rounded-full w-9 h-9' src={state.profilPic} alt=''/>
//             //     </div>
//             //     <div className=" text-sm ">
//             //         <div>{state.fullName}</div>
//             //         <div className="font-medium truncate">{state.email}</div>
//             //     </div>
//             // </div>
//             // :
//              <button type='submit'  className='px-4 py-3 text-sm hover:bg-slate-400 text-left w-full'>Sign In</button>
//         }
//         <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
//             <li>
//             <a href="/" className="block px-4 py-2 text-white ">Dashboard</a>
//             </li>
//             <li>
//             <a href="/" className="block px-4 py-2 text-white ">Settings</a>
//             </li>
//             <li>
//             <a href="/" className="block px-4 py-2 text-white ">Earnings</a>
//             </li>
//         </ul>
//         <div className="py-1">
//             <a href="/" className="block px-4 py-2 text-sm text-white">Sign out</a>
//         </div>
//     </div>
//     </div>
// }