import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Toaster/>
            <Footer/>
            
        </div>
    );
};

export default Layout;