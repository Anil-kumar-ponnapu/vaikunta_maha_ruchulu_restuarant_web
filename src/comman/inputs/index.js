import "./input.css"

const CommanInputs = ({ name, type = "text", value, handleChange, placeholder, isTextArea = false }) => {
    return isTextArea ? (
        <textarea
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="common-input textarea"
        />
    ) : (
        <input
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="common-input"
        />
    );
};

export default CommanInputs;
