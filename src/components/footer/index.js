// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaServicestack } from "react-icons/fa";
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <img src="images/footer_image.jpg" className="footer-image" alt="Footer Image" />
      
     <div className="text-overlay">
  <div className="footer-content">
    <div className="footer-section">
      <h3>Services</h3>
      <ul>
        <li>Web Development</li>
        <li>Mobile Apps</li>
        <li>UI/UX Design</li>
        <li>SEO Optimization</li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>About Us</h3>
      <ul>
        <li>Our Story</li>
        <li>Mission & Vision</li>
        <li>Team</li>
        <li>Careers</li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Contact Us</h3>
      <ul>
        <li>Email: info@example.com</li>
        <li>Phone: +1 234 567 890</li>
        <li>Address: 1234 Street Name, City</li>
        <li>Support</li>
      </ul>
    </div>
    
    
  </div>
</div>

    </div>
  );
};

export default Footer;
