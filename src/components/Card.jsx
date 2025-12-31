const Card = ({ image, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={image}
                alt="Product"
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {title}
                </h3>
                <p className="text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;