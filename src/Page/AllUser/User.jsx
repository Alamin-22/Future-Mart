import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";


const User = () => {
    const axiosPublic = useAxiosPublic();
    const [users, setUser] = useState();


    useEffect(() => {
        axiosPublic.get("/all-users")
            .then(res => {
                // console.log(res.data);
                setUser(res.data)
            })
    }, [axiosPublic])

    const handleMakeAdmin = (user) => {
        axiosPublic.patch(`/users/admin/${user._id}`).then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                Swal.fire("Congratulations", `${user?.Name} is now Admin!!`, "success");
            }
        });
    };


    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic
                    .delete(`/users/${user._id}`)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
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
        <div>
            <div className="overflow-x-auto min-h-screen">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="bg-slate-200 text-gray-700">
                        <tr>
                            <th>No</th>
                            <th>Photo</th>
                            <th >Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, idx) => (
                            <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>

                                    <div className="avatar ">
                                        <div className="w-14 h-14 rounded-full">
                                            {<img src={user?.photo} />}
                                        </div>
                                    </div>


                                </td>
                                <td >{user?.Name}</td>
                                <td className="text-blue-500 hover:underline cursor-pointer">
                                    {user?.email}
                                </td>

                                <td>
                                    {user?.role === "admin" ? (
                                        "Admin"
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-outline btn-success btn-sm "
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)}>
                                        <MdDeleteForever className=" text-red-600 text-3xl active:text-2xl" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
