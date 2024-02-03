import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo-removebg-preview.png"
import { IoLogoYoutube } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { FaLink } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-gray-200 ">
                <aside>
                    <img className="w-20 h-20" src={logo} alt="logo" />
                    <p className="font-semibold text-xl">
                        Future Mart LTD. <br />Providing reliable cloth since 2018
                    </p>
                    <p>Copyright © 2024 - All right reserved</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link target="_blank" to={"https://www.facebook.com/profile.php?id=100064576424047&mibextid=ZbWKwL"}>
                            <FaFacebookSquare className="transition cursor-pointer duration-300 delay-100 hover:text-blue-600 text-3xl" />
                        </Link>
                        <Link target="_blank" to={"https://www.youtube.com/@riponahmed9468/videos"}>
                            <IoLogoYoutube className="transition cursor-pointer duration-300 delay-100 hover:text-red-600 text-3xl" />
                        </Link>
                    </div>

                </nav>
            </footer>
            <div className="bg-gray-200">
                <div className="border-b-2 border-gray-50"></div>
                <div className="flex  justify-between max-w-6xl mx-auto items-center">
                    <p className="font-medium">Developed by <br />Md. Al Amin Mollik</p>
                    <p className=" flex items-center justify-center gap-2 font-medium">Lets build your Dream Website together  <FaLongArrowAltRight /></p>
                    <div className="flex gap-2">
                        <a target="_blank" href="https://www.linkedin.com/in/md-al-amin-mollik/" rel="noreferrer">
                            <FaLinkedin className="text-2xl transition cursor-pointer duration-300 delay-100 hover:text-blue-600 " />
                        </a>
                        <a target="_blank" href="mailto:mdalaminmollik96@gmail.com" rel="noreferrer">
                            <AiTwotoneMail className="text-2xl transition cursor-pointer duration-300 delay-100 hover:text-red-400 " />
                        </a>
                        <a target="_blank" href="https://protfolioofalamin.netlify.app/" rel="noreferrer">
                            <FaLink className="text-2xl transition cursor-pointer duration-300 delay-100 hover:text-green-700 " />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;

