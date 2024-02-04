
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
                                    <span className="label-text">আপনার নাম লিখুন  *</span>
                                </label>
                                <input type="text" name="name" placeholder="আপনার নাম লিখুন " className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">আপনার ঠিকানা লিখুন  *</span>
                                </label>
                                <input type="text" name="name" placeholder="বাড়ি নং, রাস্তা নং, উপজেলা, জেলা" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">আপনার মোবাইল নাম্বারটি লিখুন  *</span>
                                </label>
                                <input type="number" name="name" placeholder="অনুগ্রহ করে আপনার বর্তমান ফোন নম্বর লিখুন যা সব সময় খোলা থাকবে" className="input input-bordered" required />
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
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