
const Gallery = () => {
    return (
        <div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mx-auto ">
                    
                    <img alt="" className="w-full h-full  rounded shadow-sm min-h-48" src="https://i.ibb.co/gz7z8gS/img1.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48" src="https://i.ibb.co/sRZRPGm/img2.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48" src="https://i.ibb.co/h1GP4KF/img3.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48" src="https://i.ibb.co/n3C8wDh/img4.jpg" />
                </div>
            </section>
        </div>
    );
};

export default Gallery;