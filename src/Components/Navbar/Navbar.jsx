import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../assets/Images/logo-removebg-preview.png"
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {

    const isAdmin = "admin";
    const { user, logOut } = useAuth();



    return (
        <div>
            <div className="navbar bg-gray-50 shadow-xl">
                <div className="navbar max-w-7xl mx-auto">
                    <div className="flex-1">
                        <Link to={"/"} className="btn btn-ghost text-lg">
                            <img className="w-9 h-9" src={logo} alt="logo" />
                            Future Mart
                        </Link>
                    </div>

                    <div className="flex-none">

                        <div>

                            {
                                user ?
                                    <>
                                        {
                                            isAdmin === "admin" &&
                                            <div className="dropdown dropdown-end">
                                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                                    <div className="indicator">
                                                        <IoMdMenu className="text-2xl" />
                                                    </div>
                                                </div>
                                                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">

                                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                        <li><Link to={"/updateProduct"}>Update Product</Link></li>
                                                        <li><Link to={"/bookings"}>Bookings</Link></li>
                                                        <li><Link to={"/all-users"}>All User</Link></li>
                                                    </ul>

                                                </div>
                                            </div>
                                        }
                                        <div className="dropdown dropdown-end">
                                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                                </div>
                                            </div>
                                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                <li>
                                                    <p className="justify-between">
                                                        {user?.displayName}
                                                    </p>
                                                </li>
                                                {
                                                    isAdmin === "admin" &&
                                                    <li><Link to={"/dash-board"}>Dashboard</Link></li>
                                                }
                                                <li>
                                                    <button onClick={logOut} className="text-red-600 font-semibold">
                                                        Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <Link to={"/singIn"}>
                                            <div className="btn btn-outline btn-sm">Login</div>
                                        </Link>
                                    </>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;