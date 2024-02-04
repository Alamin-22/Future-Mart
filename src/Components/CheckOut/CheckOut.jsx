
const CheckOut = () => {
    return (
        <div className="h-screen border">
            <div className="md:flex  bg-red-50 h-screen">
                <div className=" w-full bg-green-200">
                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                        <form className="card-body">

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

                        </form>
                    </div>
                </div>
                <div className=" w-full  bg-red-200">

                    asldkalsdk;
                </div>
            </div>
        </div>
    );
};

export default CheckOut;