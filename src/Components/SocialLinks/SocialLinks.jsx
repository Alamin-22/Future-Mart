import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

const SocialLinks = () => {
    return (
        <div>
            <div className="grid grid-flow-col gap-4">
                <Link target="_blank" to={"https://www.facebook.com/profile.php?id=100064576424047&mibextid=ZbWKwL"}>
                    <FaFacebookSquare className="transition cursor-pointer duration-300 delay-100 text-blue-500 hover:text-blue-600 text-3xl" />
                </Link>
                <Link target="_blank" to={"https://www.instagram.com/ripon.ahmed.34?igsh=a3M1MDFrMHF4Yjg0"}>
                    <FaInstagram className="transition cursor-pointer duration-300 delay-100 hover:text-red-600 text-3xl" />
                </Link>
                <Link target="_blank" to={"https://www.tiktok.com/@riponahmed4686?_t=8jg1sh5rYY6&_r=1"}>
                    <FaTiktok className="transition cursor-pointer duration-300 delay-100 hover:text-gray-800 text-3xl" />
                </Link>
                <Link target="_blank" to={"https://www.youtube.com/@riponahmed9468/videos"}>
                    <IoLogoYoutube className="transition cursor-pointer duration-300 delay-100 text-red-400 hover:text-red-600 text-3xl" />
                </Link>
            </div>
        </div>
    );
};

export default SocialLinks;