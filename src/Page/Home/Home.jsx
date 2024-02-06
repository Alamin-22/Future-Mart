import { useEffect, useState } from "react";
import CheckOut from "../../Components/CheckOut/CheckOut";
import Gallery from "../../Components/Gallery/Gallery";
import Video from "../../Components/Video/Video";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SlidingText from "../../Components/SlidingText/SlidingText";

const Home = () => {
    const axiosPublic = useAxiosPublic();
    const [product, setProduct] = useState([]);
    // const { Name, PriceBDT, ProductId, YtLink, img1, img2, img3, img4 } = product[0];


    useEffect(() => {
        axiosPublic.get("/page1-product")
            .then(res => {
                // console.log(res.data);
                setProduct(res.data[0])
            })
    }, [axiosPublic])

    // console.log(product);



    return (
        <div>
            {
                product.length == 0 ?
                    <>
                        <div className="flex flex-col gap-4 w-full h-screen">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>

                    </>
                    :
                    <>
                        <div>
                            <SlidingText ></SlidingText>
                            <Video Name={product?.Name} YtLink={product?.YtLink}></Video>
                            <h2 className="text-center text-3xl md:text-5xl font-semibold  my-5">
                                আমাদের পণ্য
                            </h2>
                            <Gallery
                                img1={product?.img1} img2={product?.img2}
                                img3={product?.img3} img4={product?.img4}></Gallery>
                            <h2 className="text-center text-3xl text-red-600 md:text-4xl font-semibold  my-5">
                                অর্ডার করতে সঠিক তথ্য দিয়ে নিচের ফর্ম পূরন করুন
                            </h2>
                            <CheckOut ProductId={product?.ProductId} img1={product?.img1} Price={product?.PriceBDT}></CheckOut>
                        </div>
                    </>
            }


        </div>
    );
};

export default Home;