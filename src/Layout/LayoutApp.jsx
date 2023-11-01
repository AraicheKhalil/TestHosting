import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"
import SideBar from "../Components/SideBare/Sidebar"
import { useState } from "react"
// import SideEffect from "../Components/SideBare/SideEffect"


function LayoutApp() {

    const [sidebarToggle, setsidebarToggle] = useState(false)

    function handleMenuToggle () {
        setsidebarToggle(prevVal => {
            return !prevVal
        })
    }

    console.log(sidebarToggle);

  return (
        <>
            <Header handleMenuToggle={handleMenuToggle} />
            <div className="flex ">
                {/* <SideBar /> */}
                <SideBar avtiveMenu={sidebarToggle} />
                <Outlet />
            </div>
        </>
    )
}

export default LayoutApp