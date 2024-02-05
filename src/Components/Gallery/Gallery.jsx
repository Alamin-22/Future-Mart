import PropTypes from 'prop-types';


const Gallery = ({ img1, img2, img3, img4 }) => {
    return (
        <div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mx-auto ">

                    <img alt="Product Image" className="w-full h-full object-cover rounded shadow-sm min-h-48"
                        src={img1} draggable={false}/>
                    <img alt="Product Image" className="w-full h-full object-cover rounded shadow-sm min-h-48"
                        src={img2} draggable={false}/>
                    <img alt="Product Image" className="w-full h-full object-cover rounded shadow-sm min-h-48"
                        src={img3} draggable={false}/>
                    <img alt="Product Image" className="w-full h-full object-cover rounded shadow-sm min-h-48"
                        src={img4} draggable={false}/>
                </div>
            </section>
        </div>
    );
};



Gallery.propTypes = {
    img1: PropTypes.string,
    img2: PropTypes.string,
    img3: PropTypes.string,
    img4: PropTypes.string,
};
export default Gallery;




