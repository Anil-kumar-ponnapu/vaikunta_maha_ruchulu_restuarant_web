import CommanInputs from "../../comman/inputs";
import Maincard from "../../comman/maincard";
import { FaceBookIcon, InstagramIcon, TwiterIcon, Youtube } from "../Icons";
import "./contactus.css";
import { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    console.log(formData)

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        const phoneNumber = "7799430410"
        const text = `Hello! My name is anil  `;


        const encodedText = encodeURIComponent(text);

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        window.open(whatsappURL, "_blank");

    };

    return (
        <>
            <div>
                <Maincard
                    image={"images/noppon-meenuch-MPLIm0LynRQ-unsplash.jpg"}
                    title={"Contact Us"}
                />
            </div>

            <div className="contact-container">

                <img src="images/informationCard.jpg" className="contact-card" />

                <div className="contact-details">
                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit}>
                            <CommanInputs
                                id="name"
                                value={formData.name}
                                handleChange={handleChange}
                                placeholder="Full Name"
                            />
                            <CommanInputs
                                id="email"
                                type="email"
                                value={formData.email}
                                handleChange={handleChange}
                                placeholder="Email"
                            />
                            <CommanInputs
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                handleChange={handleChange}
                                placeholder="Phone Number"
                            />
                            <CommanInputs
                                id="message"
                                value={formData.message}
                                handleChange={handleChange}
                                placeholder="Message"
                                isTextArea={true}
                            />
                            <div>
                                <button type="submit" className="submit-btn">Submit</button>
                            </div>

                        </form>
                    </div>
                    <div className="contact-info-container">
                        <div className="section">
                            <h2 className="heading">ADDRESS</h2>
                            <div className="info-item">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffa500" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd" />
                                </svg>
                                <p>
                                    Door. No. 50-121-60/1A, 4th Town Police Station Road,
                                    Balayya Sastry Layout, Seethammadhara, Visakhapatnam – 530013
                                </p>
                            </div>
                            <div className="info-item">

                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffa500" viewBox="0 0 24 24">
                                    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                                </svg>
                                <p>7900368003</p>
                            </div>
                            <div className="info-item">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ffa500" viewBox="0 0 24 24">
                                    <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                                    <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                                </svg>

                                <p>info@vaikuntamaharuchulu.com</p>
                            </div>
                        </div>

                        <div className="section">
                            <h2 className="heading">WORKING HOURS</h2>
                            <div className="info-item">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffa500" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
                                </svg>

                                <p>Opens Timings <spam>{"  "}</spam>6:30 Am – 11:30 Pm,</p>
                            </div>
                        </div>

                        <div className="section">
                            <h2 className="heading">FOLLOW US</h2>
                            <div className="social-icons">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaceBookIcon />
                                </a>
                                <a href="https://www.youtube.com/channel/UCjLMcurPc2E0pAxYzi1srVQ" target="_blank"><InstagramIcon /> </a>
                                <a href="https://x.com/maharuchul23219" target="_blank"><TwiterIcon /></a>
                                <a href="https://www.youtube.com/@VaikuntaMahaRuchulu" target="_blank"><Youtube /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ContactUs;
