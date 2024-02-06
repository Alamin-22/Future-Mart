import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const UpdateProduct = () => {

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const [product, setProduct] = useState([]);


    useEffect(() => {
        axiosPublic.get("/page1-product")
            .then(res => {
                // console.log(res.data);
                setProduct(res.data[0])
            })
    }, [axiosPublic])
    // console.log(product);

    const HandleUpdateProduct = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const Name = form.get("name");
        const YtLink = form.get("ytLink");
        const PriceBDT = form.get("price");
        const ProductId = form.get("ProductId");
        const img1 = form.get("img1");
        const img2 = form.get("img2");
        const img3 = form.get("img3");
        const img4 = form.get("img4");

        const NewProduct = {
            Name,
            YtLink,
            ProductId,
            img1, img2,
            img3, img4,
            PriceBDT: parseFloat(PriceBDT),
        };

        console.log(NewProduct);

        // Send data to the server
        axiosPublic.patch(`/patch-product/${product?._id}`, NewProduct)
            .then(res => {
                Swal.fire("success", `${Name} Successfully Added`, "success");
                console.log(res.data);
                navigate("/")
            })
            .catch(error => {
                console.log(error);
            });

    };

    return (
        <div>
            {
                product.length == 0 ?
                    <>
                        <h2 className="text-9xl text-center text-red-500">
                            <span className="loading loading-spinner loading-lg"></span>
                        </h2>
                    </>
                    :
                    <>
                        <div className="max-w-4xl mx-auto shadow-2xl">
                            <form onSubmit={HandleUpdateProduct} className=" bg-rose-50" >
                                <div className="p-3 ">
                                    <h1 className=" text-xl md:text-3xl text-center font-bold my-2">Product Description Form</h1>
                                    {/*Title and Category */}
                                    <div className="md:flex mb-8 gap-4">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text text-xl font-medium ">আপনার পণ্যের শিরোনাম লিখুন</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="name" placeholder="আপনার পণ্যের শিরোনাম লিখুন" className="block w-full px-5 py-3 bg-white  text-gray-700  border  rounded-md focus:border-rose-300 focus:ring-rose-400 focus:ring-opacity-40  focus:outline-none focus:ring border-rose-300" required />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text text-xl font-medium">আপনার YouTube ভিডিও লিঙ্ক লিখুন</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="ytLink"
                                                    placeholder="শেয়ারে ক্লিক করুন এবং তারপর এম্বেড নির্বাচন করুন তারপর src লিঙ্কে অনুলিপি করুন" className="block w-full px-5 py-3 bg-white  text-gray-700  border  rounded-md focus:border-rose-300 focus:ring-rose-400 focus:ring-opacity-40  focus:outline-none focus:ring border-rose-300" required />
                                            </label>
                                        </div>

                                    </div>


                                    {/*  */}
                                    <div className="md:flex justify-between gap-5 mb-8">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text text-xl font-medium">আপনার পণ্যের আইডি নম্বর লিখুন</span>
                                            </label>
                                            <label className="input-group">
                                                <input className="block w-full px-5 py-3 bg-white  text-gray-700 border  rounded-md focus:border-rose-300 focus:ring-rose-400 focus:ring-opacity-40  focus:outline-none focus:ring border-rose-300" required
                                                    type="text"
                                                    name="ProductId"
                                                    placeholder="A34"
                                                />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text text-xl font-medium">পণ্যের মূল্য লিখুন</span>
                                            </label>
                                            <label className="input-group">
                                                <input className="block w-full px-5 py-3 bg-white  text-gray-700 border  rounded-md focus:border-rose-300 focus:ring-rose-400 focus:ring-opacity-40  focus:outline-none focus:ring border-rose-300" required
                                                    type="number"
                                                    name="price"
                                                    placeholder="1150"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    {/* All Image Row*/}
                                    <div className="md:flex justify-between gap-5 mb-8">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text font-medium">ছবি নং: 1</span>
                                            </label>
                                            <label className="input-group">
                                                <input className="block w-full px-5 py-3   text-gray-700 bg-white border  rounded-md focus:border-rose-300 focus:ring-rose-400 focus:ring-opacity-40  focus:outline-none focus:ring border-rose-300" required
                                                    type="text"
                                                    name="img1"
                                                    placeholder="upload only img Link"
                                                />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text font-medium">ছবি নং:2</span>
                                            </label>
                                            <label className="input-group">
                                                <input className=" block w-full px-5 py-3   text-gray-700 bg-white border  rounded-md focus:border-rose-300 focus:ring-rose-400 focus:ring-opacity-40  focus:outline-none focus:ring border-rose-300 " required
                                                    type="text"
                                                    name="img2"
                                                    placeholder="upload only img Link"
                                                />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text font-medium">ছবি নং:3</span>
                                            </label>
                                            <label className="input-group">
                                                <input className="block w-full px-5 py-3  text-gray-700 bg-white border  rounded-md focus:border-rose-300 focus:ring-rose-400 focus:ring-opacity-40  focus:outline-none focus:ring border-rose-300" required
                                                    type="text"
                                                    name="img3"
                                                    placeholder="upload only img Link"
                                                />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text font-medium">ছবি নং:4</span>
                                            </label>
                                            <label className="input-group">
                                                <input className="block w-full px-5 py-3  text-gray-700 bg-white border  rounded-md focus:border-rose-300 focus:ring-rose-400 focus:ring-opacity-40  focus:outline-none focus:ring border-rose-300" required
                                                    type="text"
                                                    name="img4"
                                                    placeholder="upload only img Link"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" className="py-2 my-3 px-4 flex justify-center items-center  bg-red-500 hover:bg-red-600 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z">
                                            </path>
                                        </svg>
                                        Upload Product
                                    </button>

                                </div>
                            </form>
                        </div>
                    </>
            }

        </div>
    );
};

export default UpdateProduct;


