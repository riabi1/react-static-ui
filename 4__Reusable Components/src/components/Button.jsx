const Button = ({ children, onClick, variant = "primary", size = "medium", disabled = false }) => {
    const buttonClasses = "rounded font-medium"; // Base classes
    const variantClasses = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400"
    };
    const sizeClasses = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-5 py-3 text-lg"
    }
    const disabledClasses = disabled
        ? "opacity-50 cursor-not-allowed"
        : "";

    return (
        <button
            className={`${buttonClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
