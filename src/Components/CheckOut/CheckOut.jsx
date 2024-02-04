import { IoIosLock } from "react-icons/io";
const CheckOut = () => {


    let price = 950;
    let totalPrice = price + 120;

    return (
        <div className="">
            <div className="md:flex gap-3  ">
                <div className=" w-full ">
                    <div className="card shrink-0 w-full h-full  bg-base-200">
                        <form className="card-body ">
                            <h2 className="text-xl text-center font-medium">Billing Information </h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium md:text-lg">আপনার নাম লিখুন <span className="text-red-600">*</span></span>
                                </label>
                                <input type="text" name="name" placeholder="আপনার নাম লিখুন " className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium md:text-lg">আপনার ঠিকানা লিখুন  <span className="text-red-600">*</span></span>
                                </label>
                                <input type="text" name="name" placeholder="বাড়ি নং, রাস্তা নং, উপজেলা, জেলা" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium md:text-lg">আপনার মোবাইল নাম্বারটি লিখুন  <span className="text-red-600">*</span></span>
                                </label>
                                <input type="number" name="name" placeholder="অনুগ্রহ করে আপনার বর্তমান ফোন নম্বর লিখুন যা সব সময় খোলা থাকবে" className="input input-bordered" required />
                            </div>
                            <div className="md:flex justify-between">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium md:text-lg">আপনার সাইজ সিলেক্ট করুন  <span className="text-red-600">*</span></span>
                                    </label>
                                    <div className="space-y-2 space-x-3">
                                        <label className="inline-flex cursor-pointer items-center">
                                            <input type="radio" className="form-radio text-indigo-600" name="size" value="M" />
                                            <span className="ml-1">M</span>
                                        </label>

                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="radio" className="form-radio text-indigo-600" name="size" value="L" />
                                            <span className="ml-1">L</span>
                                        </label>

                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="radio" className="form-radio text-indigo-600" name="size" value="XL" />
                                            <span className="ml-1">XL</span>
                                        </label>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="radio" className="form-radio text-indigo-600" name="size" value="XXL" />
                                            <span className="ml-1">XXL</span>
                                        </label>
                                    </div>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium md:text-lg">আপনি কতটি সেট চান লিখুন<span className="text-red-600">*</span></span>
                                    </label>
                                    <input type="number" name="name" placeholder="1" className="input input-bordered" required />
                                </div>
                            </div>
                            <div>
                                <p className="text-2xl text-center pt-11 text-red-400">মনোযোগ সহকারে ফর্ম পূরণ করুন</p>
                            </div>

                        </form>
                    </div>
                </div>
                <div className=" w-full ">
                    <div className=" card shrink-0 w-full   bg-base-200">

                        <form className="card-body">
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
                                                        <img src="https://i.ibb.co/n3C8wDh/img4.jpg" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>M14</td>
                                            <td className="text-lg">{price} Tk</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr className="bg-zinc-200">
                                            <td className="font-medium text-lg">Shipping Fee</td>
                                            <td>--------------</td>
                                            <td>
                                                <div className="flex flex-col text-lg">
                                                    <label className="inline-flex cursor-pointer items-center">
                                                        <input type="radio" className="form-radio text-indigo-600" name="locationPrice" value={60} />
                                                        <span className="ml-1">ঢাকার ভিতরে: <br />  60.00 Tk</span>
                                                    </label>

                                                    <label className="inline-flex items-center cursor-pointer">
                                                        <input type="radio" className="form-radio text-indigo-600" name="locationPrice" value={120} />
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
                                    Total: 2530 Tk
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;