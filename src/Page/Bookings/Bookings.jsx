import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const Bookings = () => {

    const axiosPublic = useAxiosPublic();


    const { data: Bookings = [], isPending: reservationPending, refetch } = useQuery({
        queryKey: ["Bookings",],
        queryFn: async () => {
            const res = await axiosPublic.get(`/page1-booking`);
            return res.data;
        }
    });



    const handleCancelBooking = (reserved) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel this reservation",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Do it!",
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic
                    .delete(`/delete-bookings/${reserved._id}`)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `Booking for ${reserved?.name} has been Deleted.`,
                                icon: "success",
                            });
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });



            }
        });
    };




    return (
        <div className="">
            {
                reservationPending ?
                    <>
                        <div className="flex flex-col gap-4 w-full">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    </>
                    :
                    <>
                        <div className="overflow-x-auto ">
                            <div className="min-w-full overflow-hidden overflow-x-scroll">
                                <table className="table table-zebra table-auto w-full">
                                    <thead className="bg-slate-200 text-gray-700">
                                        <tr>
                                            <th>No</th>
                                            <th><span className="text-slate-200">Name </span>Name <span className="text-slate-200">NameName</span></th>
                                            <th>Product Id</th>
                                            <th>Order Date</th>
                                            <th ><span className="text-slate-200">Address</span> Address<span className="text-slate-200">Address</span> </th>
                                            <th>Phone </th>
                                            <th>Size & Quantity</th>
                                            <th> Area<span className="text-slate-200">AreaArea</span></th>
                                            <th>Total Price</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Bookings?.map((reserved, idx) => (
                                            <tr key={reserved._id}>
                                                <th>{idx + 1}</th>
                                                <td>{reserved?.name}</td>
                                                <td className="text-blue-500 hover:underline cursor-pointer">
                                                    {reserved?.ProductId}
                                                </td>

                                                <td>
                                                    {reserved?.OrderDate}
                                                </td>
                                                <td className="w-full sm:w-96 lg:w-80">
                                                    {reserved?.address}
                                                </td>
                                                <td>
                                                    {reserved?.number}
                                                </td>

                                                <td>
                                                    {reserved?.size} & {reserved?.quantity}
                                                </td>


                                                <td>
                                                    {
                                                        reserved?.shippingFee == 60 ?
                                                            <>
                                                                <p className="font-medium">Dhaka</p>
                                                            </>
                                                            :
                                                            <>
                                                                <p className="font-medium">Out Side Dhaka</p>
                                                            </>
                                                    }
                                                </td>
                                                <td>
                                                    {reserved?.TotalPrice} Tk
                                                </td>
                                                <td>
                                                    <button onClick={() => handleCancelBooking(reserved)}>
                                                        <MdDeleteForever className=" text-red-600 text-3xl active:text-2xl" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default Bookings;



