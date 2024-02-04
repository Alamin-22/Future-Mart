import Gallery from "../../Components/Gallery/Gallery";
import Video from "../../Components/Video/Video";

const Home = () => {
    return (
        <div>
            <Video></Video>
            <h2 className="text-center text-3xl md:text-5xl font-semibold  my-5"> আমাদের পণ্য </h2>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;