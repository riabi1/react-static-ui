const Button = ({ children, variant = "primary", className = "" }) => {
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
    };

    return (
        <button className={`px-8 py-3 rounded-lg text-lg font-semibold ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};
export default Button;