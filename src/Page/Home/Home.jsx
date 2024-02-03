import Video from "../../Components/Video/Video";

const Home = () => {
    return (
        <div>
            <Video></Video>
            <h2 className="text-center text-3xl md:text-5xl font-semibold  my-5"> আমাদের পণ্য </h2>
            <img className="lg:w-4/5 mx-auto" src="https://i.ibb.co/ftK6Wfn/Garlic-Bread.jpg" alt="Product Image" />
        </div>
    );
};

export default Home;