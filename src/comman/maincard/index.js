// Maincard.jsx
const Maincard = ({ image, title, textClass, children, style }) => {
    return (
        <div className="card-container">
            <img src={image} className="card-image" alt="Card" />

            <div
                className={`card-text${textClass ? ` ${textClass}` : ''}`}
                style={style}  // <-- Apply style prop here
            >
                {title}
                {children && <div className="maincard-children">{children}</div>}
            </div>
        </div>
    );
};

export default Maincard;
