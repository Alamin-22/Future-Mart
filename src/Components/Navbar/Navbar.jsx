import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../assets/Images/logo-removebg-preview.png"
import useAdmin from "../../Hooks/useAdmin";
const Navbar = () => {

    // const isAdmin = "admin";
    const { user, logOut } = useAuth();
    const [isAdminCheck] = useAdmin();
    const isAdmin = isAdminCheck?.admin;
    console.log(isAdmin);



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
                                                    isAdmin &&
                                                    <>
                                                        <li><Link to={"/updateProduct"}>Update Product</Link></li>
                                                        <li><Link to={"/bookings"}>Bookings</Link></li>
                                                        <li><Link to={"/allUsers"}>All User</Link></li>
                                                    </>
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