



import { FaceBookIcon, InstagramIcon, TwiterIcon, Youtube } from "../Icons";
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <img src="images/footer_image.jpg" className="footer-image" alt="Footer Image" />

      <div className="text-overlay">
        
        <div className="footer-content">
          <div className="Footer-logo">
                <img src="images/vaikuntlogo.png" className="footer-vaikunta-logo" alt="Vaikunta Logo" />
            </div>
            <div>
              
            </div>
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
              <li>Email: info@vaikuntamaharuchulu.com</li>
              <li>Phone: 7900368003</li>
              <li>Door. No. 50-121-60/1A, 4th Town Police Station Road, Balayya Sastry Layout, Seethammadhara, Visakhapatnam – 530 013</li>
              <li>Support</li>
            </ul>
          </div>


        </div>
        <div className="social-media-icon">

           
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaceBookIcon />
              </a>
              <a href="https://www.youtube.com/channel/UCjLMcurPc2E0pAxYzi1srVQ" target="_blank"><InstagramIcon /> </a>
              <a href="https://x.com/maharuchul23219" target="_blank"><TwiterIcon /></a>
              <a href="https://www.youtube.com/@VaikuntaMahaRuchulu" target="_blank"><Youtube /></a>
           


        </div>
      </div>

    </div>
  );
};

export default Footer;
