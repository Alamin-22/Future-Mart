import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const [showPassword, setShowPassword] = useState(false);
    const { CreateUser, UpdateProfile } = useAuth();
    const navigate = useNavigate();




    const handleSignUp = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        const FirstName = form.get("FirstName");
        const LastName = form.get("LastName");
        const Name = FirstName + " " + LastName;

        const formData = new FormData();
        formData.append('image', form.get("photo"));

        fetch(image_hosting_api, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {

                const photo = data.data.url;
                const info = { Name, email, password, photo };
                console.log(info);

                CreateUser(email, password)
                    .then(result => {
                        console.log(result.user);
                        UpdateProfile(Name, photo)
                            .then(() => {
                                // send to db
                                axiosPublic.post("/post-user", info)
                                    .then(res => {
                                        if (res.data.insertedId) {
                                            Swal.fire(`Success`,` User ${Name} is created Successfully`,"success")
                                            navigate('/');
                                        }
                                    })
                                    .catch(error => {
                                        console.log(error)
                                    })
                            })
                    })
                    .catch(error => {
                        console.log(error);
                        const message = error.message;
                        Swal.fire("Error!", `${message.slice(10, 50)}`, "error")
                    });
            })
            .catch((error) => {
                console.error("Error uploading image:", error);
                Swal.fire("Error!", `Error uploading image`, "error")
            });
    };



    return (
        <div>
            <div className=" hero flex justify-center items-center min-h-[100vh] " style={{ backgroundImage: 'url(https://i.ibb.co/JcsjxJP/bannere3.jpg)' }}>
                <div className="w-full lg:w-2/3 mx-auto mt-6 mb-9">
                    <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                        <form onSubmit={handleSignUp} className="card-body bg-emerald-50 shadow-2xl rounded-xl ">
                            <h1 className="text-3xl text-center font-semibold">SingUp for daily update!</h1>
                            <div className="flex gap-5">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" name="FirstName" placeholder="First Name" className="input input-bordered input-accent" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" name="LastName" placeholder="Last Name" className="input input-bordered input-accent" required />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="example@gmail.com" className="input input-bordered input-accent" required />
                            </div>
                            {/* password row */}
                            <div className="form-control ">

                                <div className="flex flex-col md:flex-row gap-5">

                                    <div className="md:w-1/2 ">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                placeholder="password"
                                                className="input input-bordered input-accent w-full"
                                                required
                                            />
                                            <span className="absolute right-3 bottom-3 cursor-pointer" onClick={() => { setShowPassword(!showPassword) }} >
                                                {showPassword ? <AiFillEye className="text-2xl " /> : <AiFillEyeInvisible className="text-2xl " />}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Photo</span>
                                            </label>
                                            <input type="file" name="photo" className="file-input file-input-bordered file-input-accent w-full max-w-xl" required />
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#219ebc] hover:bg-[#3c738f] border-none text-white">Register</button>
                            </div>
                            <p className="text-center">Already have an account? <Link to={"/ripon-login"} className="font-semibold text-blue-600 underline" >LogIn</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
