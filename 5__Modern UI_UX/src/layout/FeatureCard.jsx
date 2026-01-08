const FeatureCard = ({ title, description }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default FeatureCard;