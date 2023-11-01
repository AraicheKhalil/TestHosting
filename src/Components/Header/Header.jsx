import AppSearch from "./AppSearch"
import SidebareToggle from "./SidebareToggle"
import ProfileSet from "./ProfileState"
import { useEffect, useState } from "react"

function Header({handleMenuToggle}) {



  const [searchBarToggle,setSearchBarToggle] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  function HandlesearchBarToggle() {
        setSearchBarToggle(prevVal => {
            return !prevVal
        })
  }

    
    useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth)
            if (windowWidth > 640 ){
              // console.log(windowWidth);
              setSearchBarToggle(false)
            }
        })
    }, [windowWidth])

  return (
    <header className='Main-header bg-MainColor w-full max-sm:px-0 py-1 fixed top-0  text-white z-[1000]'>
    {/* Header Container */}
      <div className='Container justify-between flex items-center px-2 py-1.5 mx-auto sm:px-6'>
        <SidebareToggle hidden={searchBarToggle} handleMenuToggle={handleMenuToggle} />
        <AppSearch DisplaySearch={searchBarToggle} />
        <ProfileSet searchBarToggle={HandlesearchBarToggle} hidden={searchBarToggle}/>
      </div>
    </header>
  )
}

export default Header