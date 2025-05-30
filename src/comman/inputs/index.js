import "./input.css"

const CommanInputs = ({ id, type = "text", value, handleChange, placeholder, isTextArea = false }) => {
    return isTextArea ? (
        <textarea
            id={id}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="common-input textarea"
        />
    ) : (
        <input
            id={id}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="common-input"
        />
    );
};

export default CommanInputs;
