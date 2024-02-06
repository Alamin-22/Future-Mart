import PropTypes from 'prop-types';


const Gallery = ({ img1, img2, img3, img4 }) => {
    return (
        <div>
            <section className="py-6 ">
                <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mx-auto ">

                    <img
                        alt="Product Image"
                        className="w-full h-full object-cover rounded shadow-sm min-h-48 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        src={img1}
                        draggable={false}
                    />
                    <img alt="Product Image" className="w-full h-full object-cover rounded shadow-sm min-h-48 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        src={img2} draggable={false} />
                    <img alt="Product Image" className="w-full h-full object-cover rounded shadow-sm min-h-48 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        src={img3} draggable={false} />
                    <img alt="Product Image" className="w-full h-full object-cover rounded shadow-sm min-h-48 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        src={img4} draggable={false} />
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




