

import { FaceBookIcon, InstagramIcon, TwiterIcon, Youtube } from "../Icons"
import "./Footer.css"

const Footer = () => {

    const handlePhoneCall = () => {
        const phoneNumber = "7900368003";
        if (phoneNumber) {

            window.location.href = `tel:${phoneNumber}`;
        }
    };

    const handleEmailClick = () => {
        const email = "info@vaikuntamaharuchulu.com";
        if (email) {

            window.location.href = `mailto:${email}`;
        }
    };

    return (
        <>
            <div className="footer-main-container"

                style={{
                    backgroundImage: "url('images/footer_image.jpg')",

                }}>


                <div className="footer-container">
                    <div className="log-container">
                        <img src="images/vaikuntlogo.png" className="footer-vaikunta-logo" alt="Vaikunta Logo" />

                    </div>

                    <div className="info-footer">

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
                            <h3>About</h3>
                            <ul>
                                <li>Web Development</li>
                                <li>Mobile Apps</li>
                                <li>UI/UX Design</li>
                                <li>SEO Optimization</li>
                            </ul>
                        </div>

                        <div className="footer-section1">
                            <h3>Contact Us</h3>
                            <ul >
                                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffa500" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
                                    </svg>
                                    <p onClick={handleEmailClick} className="hover-underline">
                                        info@vaikuntamaharuchulu.com
                                    </p>
                                </li>

                                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffa500" viewBox="0 0 24 24">
                                        <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                                    </svg>
                                    <p onClick={handlePhoneCall} className="hover-underline">
                                        7900368003
                                    </p>
                                </li>

                                <li style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "5px" }}>
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffa500" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd" />
                                    </svg>
                                    <a
                                        href="https://maps.app.goo.gl/4YWX56DjYoxaNKdY7"
                                        target="_blank"

                                        className="hover-underline"
                                    >
                                        50-121-60/1A, 4th Town Police Station Road,
                                        <br /> Seethammadhara, Visakhapatnam – 530013
                                    </a>
                                </li>

                                <li>
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffa500" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
                                    </svg>
                                    Opens Timings 6:00 Am – 11:30 Pm,
                                </li>
                                <li>
                                    <div className="footer-contact-us-container">
                                        <h2 className="footer-contact-heading">GET IN ToUCH</h2>
                                        <div className="footer-contact-icons">
                                            <a href="https://www.facebook.com/profile.php?id=61576739745925" target="_blank" rel="noopener noreferrer">
                                                <FaceBookIcon />
                                            </a>
                                            <a href="https://x.com/maharuchul23219" target="_blank"><TwiterIcon /></a>
                                            <a href="https://www.instagram.com/vaikuntamaharuchulu/" target="_blank"><InstagramIcon /> </a>

                                            <a href="https://www.youtube.com/@VaikuntaMahaRuchulu" target="_blank"><Youtube /></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>

                    </div>


                </div>
            </div>


        </>
    )
}
export default Footer