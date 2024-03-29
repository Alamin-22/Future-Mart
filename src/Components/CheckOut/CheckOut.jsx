import { IoIosLock } from "react-icons/io";
import { useForm } from "react-hook-form"
import { Element } from "react-scroll";
import PropTypes from 'prop-types';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import moment from "moment";



const CheckOut = ({ Price, img1, ProductId }) => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm()
    let currentDate = moment().format("Do MMM YY");
    const onSubmit = (data) => {
        console.log(data);

        data["TotalPrice"] = totalPrice;
        data["ProductId"] = ProductId;
        data["OrderDate"] = currentDate;



        axiosPublic.post("/post-booking", data)
            .then(() => {
                // console.log(res.data);
                Swal.fire("আপনার অর্ডার গ্রহণ করা হয়েছে।", "আমরা খুব শীঘ্রই আপনার সাথে যোগাযোগ করব", "success");
                reset();
            })
            .catch(err => {
                Swal.fire("আমরা দুঃখিত", "অনুগ্রহ করে অর্ডার করার জন্য আবার চেষ্টা করুন", "error")
                console.log(err);
            })
    }



    const calculateTotalPrice = (data) => {
        const QuantityInt = parseInt(data.quantity);
        const shippingFee = parseInt(data.shippingFee) || 0;
        return QuantityInt * Price + shippingFee;
    };
    const quantity = watch("quantity");
    const totalPrice = calculateTotalPrice({ ...watch() });

    return (
        <div className=" mb-10">
            <Element name="order" >
                <form onChange={() => calculateTotalPrice(watch())} onSubmit={handleSubmit(onSubmit)} className="lg:flex gap-3  ">
                    <div className=" w-full ">
                        <div className="card shrink-0 w-full h-full  bg-base-200">
                            <div className="card-body ">
                                <h2 className="text-xl text-center font-medium">Billing Address </h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium md:text-lg">আপনার নাম লিখুন <span className="text-red-600">*</span></span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name="name" placeholder="আপনার নাম লিখুন " className="input input-bordered" />
                                    {errors.name && <span className="text-red-500 text-center">উপরের ঘরটি অবশ্যই পূরণ করতে হবে</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium md:text-lg">আপনার ঠিকানা লিখুন  <span className="text-red-600">*</span></span>
                                    </label>
                                    <input type="text" {...register("address", { required: true })} name="address" placeholder="বাড়ি নং, রাস্তা নং, উপজেলা, জেলা" className="input input-bordered" />
                                    {errors.address && <span className="text-red-500 text-center">উপরের ঘরটি অবশ্যই পূরণ করতে হবে</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium md:text-lg">আপনার মোবাইল নাম্বারটি লিখুন  <span className="text-red-600">*</span></span>
                                    </label>
                                    <input
                                        type="number"
                                        {...register('number', {
                                            required: 'আপনার চলমান ফোন নম্বর প্রদান করুন',
                                            pattern: {
                                                value: /^\d{11,}$/, // Regular expression for at least 11 digits
                                                message: 'ফোন নম্বরটি কমপক্ষে 11 সংখ্যার হতে হবে',
                                            },
                                        })}
                                        name="number"
                                        placeholder="অনুগ্রহ করে আপনার বর্তমান ফোন নম্বর লিখুন যা সব সময় খোলা থাকবে"
                                        className="input input-bordered"
                                    />
                                    {errors.number && <p className="text-red-600 ">{errors.number.message}</p>}
                                </div>
                                <div className="md:flex justify-between">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium md:text-lg">আপনার সাইজ সিলেক্ট করুন  <span className="text-red-600">*</span></span>
                                        </label>
                                        <div className="space-y-2 space-x-3">
                                            <label className="inline-flex cursor-pointer items-center">
                                                <input type="radio" className="form-radio text-indigo-600"{...register("size", { required: true })} name="size" value="M" />
                                                <span className="ml-1">M</span>
                                            </label>

                                            <label className="inline-flex items-center cursor-pointer">
                                                <input type="radio" className="form-radio text-indigo-600"
                                                    {...register("size", { required: true })} name="size" value="L" />
                                                <span className="ml-1">L</span>
                                            </label>

                                            <label className="inline-flex items-center cursor-pointer">
                                                <input type="radio" className="form-radio text-indigo-600"
                                                    {...register("size", { required: true })} name="size" value="XL" />
                                                <span className="ml-1">XL</span>
                                            </label>
                                            <label className="inline-flex items-center cursor-pointer">
                                                <input type="radio" className="form-radio text-indigo-600"
                                                    {...register("size", { required: true })} name="size" value="XXL" />
                                                <span className="ml-1">XXL</span>
                                            </label>
                                            <p>

                                                {errors.size && <span className="text-center text-red-500">আপনাকে পোশাকের Size নির্বাচন করতে হবে</span>}
                                            </p>
                                        </div>

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium md:text-lg">আপনি কতটি সেট চান লিখুন<span className="text-red-600">*</span></span>
                                        </label>
                                        <input type="number" {...register("quantity",
                                            { required: true, })} name="quantity" min={1} max={10} placeholder="1" defaultValue={1} pattern="[1-9]*"
                                            inputMode="numeric" className="input input-bordered" />
                                        {errors.quantity && <span className="text-red-500 text-center">আপনি কতটি কাপড় চান পূরণ করতে হবে</span>}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-2xl text-center pt-11 text-red-400">মনোযোগ সহকারে ফর্ম পূরণ করুন</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className=" w-full ">
                        <div className=" card shrink-0 w-full   bg-base-200">

                            <div className="card-body">
                                <h2 className="text-xl text-center font-medium">Your Order Information </h2>
                                <div className="overflow-x-auto">
                                    <table className="table min-w-full">
                                        {/* head */}
                                        <thead>
                                            <tr className="text-lg">
                                                <th className="sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4">Product</th>
                                                <th className="sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4">ProductId</th>
                                                <th className="sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4">Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* row 1 */}
                                            <tr className="bg-zinc-200">
                                                <td>
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={img1} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{ProductId}</td>
                                                <td className="text-lg">{quantity} * {Price} Tk</td>
                                            </tr>
                                            {/* row 2 */}
                                            <tr className="bg-zinc-200">
                                                <td className="font-medium text-lg">Shipping Fee</td>
                                                <td>---{errors.shippingFee && <span className="text-red-500 text-center">আপনি আপনার পণ্য কোথায় পেতে চান তা নির্বাচন করতে হবে
                                                </span>}-------</td>
                                                <td>
                                                    <div className="flex flex-col text-lg">
                                                        <label className="inline-flex cursor-pointer items-center">
                                                            <input type="radio" className="form-radio text-indigo-600"
                                                                {...register("shippingFee", { required: true })} name="shippingFee" value={60} />
                                                            <span className="ml-1">ঢাকার ভিতরে: <br />  60.00 Tk</span>

                                                        </label>

                                                        <label className="inline-flex items-center cursor-pointer">
                                                            <input type="radio" className="form-radio text-indigo-600"  {...register("shippingFee", { required: true })} name="shippingFee" value={120} />
                                                            <span className="ml-1">ঢাকার বাহিরে: <br /> 120.00 Tk</span>

                                                        </label>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* row 3 */}
                                            <tr className="bg-zinc-200">
                                                <td className="font-medium text-lg">Total Price</td>
                                                <td>--------------</td>
                                                <td>
                                                    <div className=" text-lg">
                                                        {totalPrice} Tk
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="bg-zinc-200 p-5 rounded-md">
                                    <div className="text-xl text-red-500 font-medium">ক্যাশ অন ডেলিভারি</div>
                                    <span>পন্য হাতে পেয়ে ডেলিভারি ম্যানকে পেমেন্ট করুন</span>
                                </div>

                                <div className="mt-2">
                                    <button className="btn btn-lg text-gray-50 btn-error w-full">
                                        <IoIosLock className="text-3xl" />
                                        Place Order
                                        Total: {totalPrice} Tk
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Element>
        </div>
    );
};

CheckOut.propTypes = {
    Price: PropTypes.number,
    img1: PropTypes.string,
    ProductId: PropTypes.string,
};

export default CheckOut;



