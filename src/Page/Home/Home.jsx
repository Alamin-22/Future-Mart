import CheckOut from "../../Components/CheckOut/CheckOut";
import Gallery from "../../Components/Gallery/Gallery";
import Video from "../../Components/Video/Video";

const Home = () => {
    return (
        <div>
            <Video></Video>
            <h2 className="text-center text-3xl md:text-5xl font-semibold  my-5"> আমাদের পণ্য </h2>
            <Gallery></Gallery>
            <h2 className="text-center text-3xl text-red-600 md:text-5xl font-semibold  my-5"> অর্ডার করতে সঠিক তথ্য দিয়ে নিচের ফর্ম পূরন করুন</h2>
            <CheckOut></CheckOut>
        </div>
    );
};

export default Home;