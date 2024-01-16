import { Outlet } from "react-router-dom"
import { HomePage } from "../../pages/HomePage/HomePage"
import Header from "../../User/components/Header"
import Banner from "../../User/components/Banner"

const UserLayout = () => {

    return (
        <>
            <Header />
            {/* <Banner /> */}
            <Outlet />
        </>
    )
}

export default UserLayout