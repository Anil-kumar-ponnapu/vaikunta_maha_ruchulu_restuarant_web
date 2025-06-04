import "./input.css"

const CommanInputs = ({ name, type = "text", value, handleChange, placeholder, isTextArea = false, error }) => {
    return (
       <>
            {isTextArea ? (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    className="common-input textarea"
                    onChange={handleChange}
                />
            ) : (
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className="common-input"
                    onChange={handleChange}
                />
            )}
            {error && <p className="error-text">{error}</p>}
      </>
    );
};

export default CommanInputs;
