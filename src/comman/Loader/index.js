import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src="images/vaikuntlogo.png" alt="Loading..." className="logo-spinner" />
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
