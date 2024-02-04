import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
const Login = () => {
    const { GoogleSingIn, Login } = AuthContext();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();






    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        // login
        console.log(email, password)


        Login(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                Swal.fire({
                    title: "Success",
                    text: "User Successfully Logged in",
                    icon: "success"
                });
                navigate("/")
            })
            .catch(error => {
                console.log(error);
                const message = error.message;
                Swal.fire({
                    title: "Error!",
                    text: `${message.slice(10, 50)}`,
                    icon: "error"
                });
            })



    }





    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                console.log(res.user);
                // send to db
                const info = {
                    email: res.user?.email,
                    Name: res.user?.displayName,
                    photo: res.user?.photoURL,
                    Status: "Active",
                }
                axiosPublic.post("/users", info)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Success",
                                text: "User Successfully Logged in",
                                icon: "success"
                            });
                        }
                        Swal.fire({ title: "Success", text: "User Successfully Logged in", icon: "success" });
                        navigate("/")
                    })
                    .catch(error => {
                        console.log(error)
                    })

            })
            .catch(error => {
                console.log(error)
            })
    }




    return (
        <div >
            <div className=" hero flex justify-center items-center min-h-[95vh] " style={{ backgroundImage: 'url(https://i.ibb.co/JcsjxJP/bannere3.jpg)' }}>

                <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-emerald-50 rounded-lg shadow-lg  lg:max-w-4xl">
                    <div className="hidden bg-cover lg:block lg:w-1/2"
                        style={{ backgroundImage: `url('https://i.ibb.co/X2nH1ww/login.jpg')` }}>
                    </div>
                    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">


                        <p className="mt-3 text-xl text-center text-gray-600 ">
                            Welcome back!
                        </p>

                        <button onClick={() => handleSocialLogin(GoogleSingIn)} className="btn w-full bg-[#219ebc] hover:bg-[#3c738f] border-none text-white">
                            <FcGoogle className="text-3xl" />
                            <span className="text-lg">Sign in with Google</span>
                        </button>

                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b  lg:w-1/4"></span>

                            <p className="text-xs text-center text-gray-700 uppercase  font-medium ">or login
                                with email</p>
                            <span className="w-1/5 border-b  lg:w-1/4"></span>
                        </div>

                        <form onSubmit={handleLogin} >

                            <div className="mt-4">
                                <label className="block mb-2 text-sm font-medium text-gray-600 " htmlFor="LoggingEmailAddress">Email Address</label>
                                <input id="LoggingEmailAddress" name="email" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-[#219ebc] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#b7e3eeca] input-accent" placeholder="example@gmail.com" type="email" />
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block mb-2 text-sm font-medium text-gray-600 " htmlFor="loggingPassword">Password</label>
                                    <Link className="text-xs text-gray-500  hover:underline">Forget Password?</Link>
                                </div>

                                <input id="loggingPassword" name="password" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-[#219ebc] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#b7e3eeca] input-accent " placeholder="Your Password" type="password" />
                            </div>

                            <div className="mt-6">
                                <button className="w-full btn  bg-[#219ebc] hover:bg-[#3c738f] border-none text-white">
                                    Sign In
                                </button>
                            </div>

                        </form>


                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b  md:w-1/4"></span>

                            <Link to={"/singUp"} className="text-sm text-gray-700 font-medium uppercase ">or <span className="text-blue-700">sign up</span></Link>

                            <span className="w-1/5 border-b  md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;