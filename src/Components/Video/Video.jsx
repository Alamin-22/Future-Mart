import sizeChart from "../../assets/Images/size.webp"
import { FaRegHandPointDown } from "react-icons/fa";


const Video = () => {
    return (
        <div className=" px-2 grid grid-cols-3 gap-5">
            <div className="col-span-3 md:col-span-2 relative overflow-hidden ">
                <div className=" flex items-center md:gap-2 mt-2">
                    <p className="text-xl md:text-3xl"> মাত্র ৯৯৯ টাকায় ৪ টি টিশার্ট ভিন্ন ডিজাইনে</p>
                    <FaRegHandPointDown className="text-2xl"></FaRegHandPointDown>
                </div>
                <iframe
                    className="w-full h-[300px] md:h-[500px]"
                    src="https://www.youtube-nocookie.com/embed/gUdtW1nIdsE?rel=0&loop=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div className=" col-span-3 md:col-span-1 ">
                <img className="mx-auto h-[500px] md:mt-20 lg:mt-11" src={sizeChart} alt="T-shirt Size" />
            </div>


        </div>
    );
};

export default Video;