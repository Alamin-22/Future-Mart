import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: isAdmin, isPending: adminLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/admin/${user.email}`);
            // console.log(res.data);

            // Return the data you want to use in your component
            return res.data; // Assuming res.data contains the isAdmin value
        }
    });


    return [isAdmin, adminLoading];
};

export default useAdmin;
