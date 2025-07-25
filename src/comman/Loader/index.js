import "./loader.css";

const Loader = ({isTrueLoader}) => {
  return (
    <>
    {
      isTrueLoader ? <><div className="loader"></div></> :  <div className="loader-container">
      <img src="assets/images/vaikuntlogo.png" alt="Loading..." className="logo-spinner" loading="lazy"/>
      <div className="loader"></div>
    </div>
    }
    </>
   
  );
};

export default Loader;
