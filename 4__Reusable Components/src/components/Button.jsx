const Button = ({ children, onClick, variant= "primary" }) => {
    let buttonClasses = "px-4 py-2 rounded font-medium"; // Base classes

    if (variant === "primary") {
        buttonClasses += " bg-blue-500 text-white hover:bg-blue-600";
    } else if (variant === "danger") {
        buttonClasses += " bg-red-500 text-white hover:bg-red-600";
    } else if (variant === "secondary") {
        buttonClasses += " bg-gray-300 text-gray-800 hover:bg-gray-400";
    }
    return (
        <button className={buttonClasses} onClick={onClick} >
            {children}
        </button >
    )
}

export default Button
