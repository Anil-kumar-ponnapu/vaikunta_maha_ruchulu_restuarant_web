import { useState, useRef } from "react";
import CommonButton from "../../comman/Button";
import CommanInputs from "../../comman/inputs";
import Maincard from "../../comman/maincard";
import "./catering.css";
import emailjs from "@emailjs/browser";
import Loader from "../../comman/Loader";

const Catering = () => {
    const form = useRef(null);
    const [error, setErrors] = useState({});
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    // Auto clear success message
    setTimeout(() => {
        setSuccess("");
    }, 10000);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        const formElements = form.current.elements;
        const name = formElements.name.value.trim();
        const email = formElements.email.value.trim();
        const phoneNo = formElements.phoneNo.value.trim();
        const eventType = formElements.eventType.value.trim();
        const message = formElements.message.value.trim();

        const newErrors = {
            name: name ? '' : 'Name is required',
            email: email ? '' : 'Email is required',
            phoneNo: phoneNo ? '' : 'Phone number is required',
            eventType: eventType ? '' : 'Event type is required',
            message: message ? '' : 'Message is required',
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(err => err !== '');
        if (hasErrors) {
            setLoading(false);
            return;
        }
        setLoading(true)
        emailjs.sendForm('service_w68limb', 'template_vhhlk33', form.current, {
            publicKey: 'gifp0Fn_0JoJw3eVj',
        })

            .then(() => {
                setLoading(false);
                e.target.reset();
                setErrors({});
                setSuccess("Thanks from Vaikunta Maha Ruchulu!");

            })
            .catch((error) => {
                setSuccess('FAILED...');
                setLoading(false);
            });
    };

    return (
        <div>
            <Maincard
                image={"images/Delicious Catering.svg"}
                title={"VEGETARIAN CATERING FOR EVERY EVENT"}
                textClass={"top-left"}
                style={{ paddingTop: '80px', left: "20px", width: "400px" }}
            />

            <div
                className="cateraing-conainer"
                style={{ backgroundImage: "url('/images/informationCard.jpg')" }}
            >
                <div className="catering-info">
                    <div className="catering-content">
                        <img src="images/Catering-logo.svg" alt="Catering" className="catering-log" />

                        <div style={{}}>
                            <p>
                                At <span style={{ fontWeight: '700' }}>Vaikunta Maha Ruchulu</span> we craft authentic, homestyle pure veg meals using time-honored recipes and the freshest ingredients...
                            </p>
                            <p>

                                <strong>Why Choose Us?</strong>
                            </p>
                            <div className="choose-content">

                                <ul >

                                    <li>100% Traditional Recipes – Grandmother’s secrets, modern presentation</li>
                                    <li>Pure & Hygienic – No onion/garlic (optional), Jain/Sattvik menus available</li>
                                    <li>Customizable Thalis – Regional specialties (North/South Indian, Maharashtrian, etc.)</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="catering-contact-details">
                        CRAVING AUTHENTIC, HOMESTYLE VEGETARIAN CATERING? CALL US AT <span style={{ color: "rgb(18, 49, 18)", fontWeight: '700' }}>7900368003</span> OR EMAIL <span style={{ color: "rgb(18, 49, 18)", fontWeight: '700' }}>INFO@VAIKUNTAMAHARUCHULU.COM</span> FOR A DELICIOUS EXPERIENCE!
                    </div>

                    <div className="catering-form">
                        <form ref={form} onSubmit={handleSubmit}>
                            <CommanInputs
                                name="name"
                                placeholder="Full Name"
                                error={error.name}
                            />
                            <CommanInputs
                                name="email"
                                type="email"
                                placeholder="Email"
                                error={error.email}
                            />
                            <CommanInputs
                                name="phoneNo"
                                type="tel"
                                placeholder="Phone Number"
                                error={error.phoneNo}
                            />
                            <CommanInputs
                                name="eventType"
                                placeholder="Event Type"
                                error={error.eventType}
                            />
                            <CommanInputs
                                name="message"
                                placeholder="Message"
                                isTextArea={true}
                                error={error.message}
                            />
                            {loading && <div className="success-message-catering">
                                <Loader isTrueLoader={true} /> </div>}
                            {!loading && success && <p className="success-message-catering">{success}</p>}
                            <div>
                                <CommonButton
                                    title={"Submit"}
                                    type="submit"
                                    disabled={loading}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catering;
