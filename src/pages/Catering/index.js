import { useState, useRef } from "react";
import CommonButton from "../../comman/Button";
import CommanInputs from "../../comman/inputs";
import Maincard from "../../comman/maincard";
import "./catering.css";
import emailjs from "@emailjs/browser";
import Loader from "../../comman/Loader";
import SEO from "../../comman/SEO"
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
                setSuccess("Thanks From Vaikunta Maha Ruchulu!");

            })
            .catch((error) => {
                setSuccess('FAILED...');
                setLoading(false);
            });
    };

    return (
        <div>

            <SEO
                title="Vaikunta Maha Ruchulu – Pure Veg Andhra Restaurant in Vizag"
                description="Vaikunta Maha Ruchulu – Vizag’s best pure veg restaurant. Enjoy authentic South Indian meals, special thalis, and homely flavors in a family-friendly setting. Visit us today!"
                keywords="
    Vaikunta Maha Ruchulu,
    Traditional Andhra thali in Visakhapatnam,
    Andhra veg meals Vizag,
    Andhra vegetarian restaurant near me,
    authentic Indian vegetarian Vizag,
    Authentic Telugu meals Vizag,
    best biryani in vizag,
    best breakfast Vizag,
    best dine-in in vizag,
    Best gongura pappu in Vizag,
    Best pure veg restaurant in Vizag,
    best tiffins in vizag,
    best veg food Vizag,
    best veg restaurant vizag,
    Best vegetarian restaurant Vizag,
    Biryani,
    brahmins food restaurant Vizag,
    Budget veg meals near me,
    Budget veg restaurant Vizag,
    Dosa lover,
    south indian food vizag,
    South Indian specialties,
    South Indian thali Vizag,
    South Indian veg food Vizag,
    Temple-style meals Andhra,
    Thali,
    Tiffins in Vizag,
    Top veg dining places Visakhapatnam,
    traditional andhra food,
    Traditional vegetarian food Visakhapatnam,
    Traditional, homemade-style food,
    vaikunta Ruchulu,
    vaishyas food restaurant Vizag,
    Veg biryani Vizag,
    veg Chinese Vizag,
    Veg family restaurant Vizag,
    veg Tandoori Vizag,
    Vegetarian restaurant in Seethammadara,
    vegetarian restaurant Visakhapatnam,
    vegetarian thali vizag,
    Vizag pure veg lunch,
    Vizag veg biryani near me,
    Family dinner pure veg restaurant Visakhapatnam,
    family restaurant Vizag,
    food near Balayya Sastri Layout,
    healthy veg food Vizag,
    home style veg meals vizag,
    Idli dosa restaurant Vizag,
    Jain food restaurant Vizag,
    kshatriyas food restaurant Vizag,
    Maha Ruchulu,
    North Indian thali Vizag,
    North Indian veg restaurant Vizag,
    Paneer dishes Vizag,
    Pure veg buffet Seethammadhara,
    Pure veg restaurant in Vizag,
    Pure vegetarian Andhra meals,
    pure vegetarian thali Vizag,
    restaurant near Police Station Road Vizag,
    Sattvik food Vizag (no onion/garlic),
    Sattvik meals Vizag,
    Satvik food in Vizag
  "
                url="https://vaikuntamaharuchulu.com/"

            />

            <Maincard
                image={"assets/delicious-catering.svg"}
                title={"VEGETARIAN CATERING FOR EVERY EVENT"}
                textClass={"top-left"}
                style={{ paddingTop: '80px', left: "20px", width: "400px" }}
            />

            <div
                className="cateraing-conainer"
                style={{ backgroundImage: "url('assets/images/informationCard.jpg')" }}
            >
                <div className="catering-info">
                    <div className="catering-content">
                        <img src="assets/images/Catering-logo.svg" alt="Catering" className="catering-log" />

                        <div style={{}}>
                            <p>
                                At <span style={{ fontWeight: '700' }}>Vaikunta Maha Ruchulu</span> we craft authentic, homestyle pure veg meals using time-honored recipes and the fresh ingredients...
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
