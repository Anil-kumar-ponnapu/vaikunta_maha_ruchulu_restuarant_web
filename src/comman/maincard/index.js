// Maincard.jsx
const Maincard = ({ image, title, textClass, children, style, middleContent }) => {
    return (
        <div className="card-container">
            <img src={image} className="card-image" alt="Card" />

            {middleContent && (
                <div className="middle_content">
                    {middleContent}
                </div>
            )}

            <div className={`card-text${textClass ? ` ${textClass}` : ''}`} style={style}>
                {title}
                {children && <div className="maincard-children">{children}</div>}
            </div>
        </div>

    );
};

export default Maincard;
