const Input = ({
    label,
    type = "text",
    placeholder = "",
    value,
    onChange,
    error
}) => {
    return (
        <div className="space-y-2 flex flex-col">
            <label className="font-medium text-gray-700">{label}</label>
            <input
                className={`border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300'
                    }`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
};
export default Input;