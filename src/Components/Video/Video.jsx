
const Video = () => {
    return (
        <div>
            <div className="relative overflow-hidden border">
                <iframe
                    className="w-full md:w-3/4 h-[300px] md:h-[500px]"
                    src="https://www.youtube-nocookie.com/embed/gUdtW1nIdsE?rel=0&loop=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>


        </div>
    );
};

export default Video;