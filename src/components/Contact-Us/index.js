import CommanInputs from "../../comman/inputs";
import Maincard from "../../comman/maincard";
import { FaceBookIcon, InstagramIcon, TwiterIcon, Youtube } from "../Icons";
import "./contactus.css";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const EmbeddedMap = () => (
    <div style={{ width: '100%', height: '450px' }}>
        <iframe
            title="My Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.1387191184645!2d83.30280877512796!3d17.738101792607203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943439b0ab007%3A0xe0975d1682ebe6c4!2sVaikunta%20Maha%20Ruchulu!5e0!3m2!1sen!2sin!4v1749029930091!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
);



const ContactUs = () => {
    const form = useRef(null);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phoneNo: '',
        message: ''
    });

    const [success, setSuccess] = useState("")

    setTimeout(() => {
        setSuccess("")
    }, 10000)
    const handleSubmit = (e) => {
        e.preventDefault();

        const formElements = form.current.elements;

        const name = formElements.name.value.trim();
        const email = formElements.email.value.trim();
        const phoneNo = formElements.phoneNo.value.trim();
        const message = formElements.message.value.trim();

        const newErrors = {
            name: name ? '' : 'Name is required',
            email: email ? '' : 'Email is required',
            phoneNo: phoneNo ? '' : 'Phone number is required',
            message: message ? '' : 'Message is required',
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(error => error !== '');
        if (hasErrors) return;

        emailjs
            .sendForm('service_x4zqyi6', 'template_7fss39q', form.current, {
                publicKey: 'ViCJ5k1iMjGWvEHS_',
            })
            .then(() => {
                console.log('SUCCESS!');
                e.target.reset();
                setErrors({});
                setSuccess("Thank`s For Contact Us")
            })
            .catch((error) => {
                setSuccess('FAILED...');
            });
    };


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
            <div>
                <Maincard
                    image={"images/noppon-meenuch-MPLIm0LynRQ-unsplash.jpg"}
                    title={"CONTACT US"}
                />
            </div>

            <div
                className="contact-container"
                style={{ backgroundImage: 'url("images/informationCard.jpg")' }}
            >


                <div className="contact-details">
                    <div className="contact-form-container">
                        <form ref={form} onSubmit={handleSubmit}>
                            <CommanInputs
                                name="name"
                                placeholder="Full Name"
                                error={errors.name}
                            />

                            <CommanInputs
                                name="email"
                                type="email"
                                placeholder="Email"
                                error={errors.email}
                            />
                            <CommanInputs
                                name="phoneNo"
                                type="tel"
                                placeholder="Phone Number"
                                error={errors.phoneNo}
                            />
                            <CommanInputs
                                name="message"
                                placeholder="Message"
                                isTextArea={true}
                                error={errors.message}
                            />
                            <p className="success-message">
                                {success ? success : ""}
                            </p>

                            <div>
                                <button type="submit" className="submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>

                    <div className="contact-info-container">
                        <div className="section">
                            <h2 className="heading">ADDRESS</h2>
                            <div className="info-item">
                                <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffa500" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd" />
                                </svg>
                                <a
                                    href="https://maps.app.goo.gl/4YWX56DjYoxaNKdY7"
                                    target="_blank"

                                    className="hover-underline"
                                >
                                    Door. No. 50-121-60/1A, 4th Town Police Station Road,
                                    <br/> Balayya Sastry Layout, Seethammadhara,
                                     Visakhapatnam Pin No– 530 013
                                </a>
                            </div>
                            <div className="info-item">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffa500" viewBox="0 0 24 24">
                                    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                                </svg>
                                <p onClick={handlePhoneCall} className="">
                                    7900368003
                                </p>
                            </div>
                            <div className="info-item">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ffa500" viewBox="0 0 24 24">
                                    <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                                    <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                                </svg>

                                <p>
                                    <p onClick={handleEmailClick} >
                                        info@vaikuntamaharuchulu.com
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div className="section">
                            <h2 className="heading">WORKING HOURS</h2>
                            <div className="info-item">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffa500" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
                                </svg>

                                <p>Opens Timings <spam>{"  "}</spam>6:00 Am – 11:30 Pm,</p>
                            </div>
                        </div>

                        <div className="section">
                            <h2 className="heading">FOLLOW US</h2>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/profile.php?id=61576739745925" target="_blank" rel="noopener noreferrer">
                                    <FaceBookIcon />
                                </a>
                                <a href="https://www.instagram.com/vaikuntamaharuchulu/" target="_blank"><InstagramIcon /> </a>
                                <a href="https://x.com/maharuchul23219" target="_blank"><TwiterIcon /></a>
                                <a href="https://www.youtube.com/@VaikuntaMahaRuchulu" target="_blank"><Youtube /></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div>
                <EmbeddedMap />
            </div>
        </>
    );
};

export default ContactUs;
