import YoutubeDrakLogo from '../assets/Icons/YoutubeDark.png';
// import sign1 from '../assets/Icons/Vector.png';
import backgroundImage from '../assets/images/Rectangle 4.png';
import { IconContext } from 'react-icons';
import {RiLockPasswordFill} from 'react-icons/ri'
// import { useState } from 'react';
import { FacebookAuth , FacebookProvider } from '../firebase/FacebookAuth';
import { GoogleAuth , GoogleProvider } from '../firebase/GoogleAuth';
import { signInWithPopup } from 'firebase/auth';
import {redirect}  from 'react-router-dom'


function SignIn() {

    const signInWithGoogle_auth = () => {
        signInWithPopup(GoogleAuth , GoogleProvider)
        .then((result) => {
            const fullName = result.user.displayName
            const email = result.user.email
            const profilePicture = result.user.photoURL;
            const isSignIn = result.operationType;
            console.log(result);

            localStorage.setItem('FullName',fullName)
            localStorage.setItem('email',email)
            localStorage.setItem('profilePicture',profilePicture)
            localStorage.setItem('isSignIn',isSignIn)

            console.log(result);

            redirect('/')
            

        }).catch((error) => {
            console.log(error);
        })
    }

    const signInWithFacebook_auth = () => {
        signInWithPopup(FacebookAuth , FacebookProvider)
        .then((result) => {
            const fullName = result.user.displayName
            const email = result.user.email
            const profilePicture = result.user.photoURL;
            const isSignIn = result.operationType;
            console.log(result);

            localStorage.setItem('FullName',fullName)
            localStorage.setItem('email',email)
            localStorage.setItem('profilePicture',profilePicture)
            localStorage.setItem('isSignIn',isSignIn)

            console.log(result);
        }).catch((error) => {
            console.log(error);
        })
    }


  return (
    <div className='all h-[100vh]  py-10 '>
        <section className="container  bg-white mx-auto h-full w-full font-Poppins">
            <div className="MainContet h-full flex items-center ">

                <div className="right basis-1/2 flex justify-center items-center">
                    <div className="">

                        <div  className='w-full flex justify-center py-2'>
                            <img  className='w-[120px]' src={YoutubeDrakLogo} alt='' />
                        </div>

                        <div className='flex flex-col items-center p-3'>
                            <p className='title font-Smooch text-gray-900 font-bold text-[120px] leading-none '>Welcome</p>
                            <p className='-mt-4 text-gray-900 text-sm font-normal'>We are glad to see you back with us</p>
                        </div>

                        <form className='p-3 flex flex-col content-center justify-center gap-3'>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                    </svg>
                                </div>
                                <input type="text" id="email-address-icon" className="bg-[#F2F2F2] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <IconContext.Provider value={{className : 'h-5 w-5 text-gray-500 dark:text-gray-400 -ml-[1px]'}}>
                                        <RiLockPasswordFill />
                                    </IconContext.Provider>
                                </div>
                                <input type="text" id="email-address-icon" className="bg-[#F2F2F2] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
                            </div>
                            <button className='w-full bg-gray-900 text-sm not-italic font-bold rounded-xl capitalize text-white py-3 ' >Next</button>


                        </form>

                        <div className='relative w-full text-center p-4'>
                            <div className='font-bold absolute top-1/2 left-1/2 px-2 bg-white -translate-x-1/2 -translate-y-1/2'>Sign In <span className=' font-normal text-neutral-600'>With Others</span></div>
                            <hr className='bg-[#F0EDFF] '/>
                        </div>

                        <div className='flex flex-col gap-1 items-center w-full p-3 '>
                            <button 
                            onClick={signInWithGoogle_auth}  
                            type="button" className=" text-white bg-[#4285F4]  hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                                </svg>
                                Sign in with Google
                            </button>
                            <button onClick={signInWithFacebook_auth} type="button" className=" text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                                </svg>
                            Sign in with Facebook
                            </button>
                        </div>

                    </div>
                </div>

                <div className="left  basis-1/2 flex items-center justify-center ">
                    <img className='w-[500px]' src={backgroundImage} alt="" />
                </div>

            </div>
        </section>
    </div>
  )
}

export default SignIn