import sizeChart from "../../assets/Images/Size-Chart.jpg"
import { FaRegHandPointDown } from "react-icons/fa";
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';





const Video = ({ Name, YtLink }) => {
    return (
        <div className=" px-2 grid grid-cols-3 gap-5">
            <div className="col-span-3 md:col-span-2 relative overflow-hidden ">
                <div className=" flex items-center md:gap-2 mt-3 mb-1">
                    <p className="text-xl md:text-3xl font-medium">{Name}</p>
                    <FaRegHandPointDown className="text-2xl"></FaRegHandPointDown>
                </div>
                <iframe
                    className="w-full h-[300px] md:h-[500px]"
                    src={YtLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div className=" col-span-3 md:col-span-1 ">
                <div className="w-full flex justify-center md:justify-end">
                    <Link to="order"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        <button className="btn mt-1 mb-5 md:mb-0  text-xl btn-error text-white">অর্ডার করুন</button>
                    </Link>
                </div>
                <img className="mx-auto h-[500px] md:mt-9 lg:mt-1" src={sizeChart} alt="T-shirt Size" draggable={false} />
            </div>


        </div>
    );
};
Video.propTypes = {
    Name: PropTypes.string,
    YtLink: PropTypes.string,
};
export default Video;

