import { useState } from "react"
import CommonButton from "../../comman/Button"
import CommanInputs from "../../comman/inputs"
import Maincard from "../../comman/maincard"
import "./catering.css"
const Catering = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNo: "",
        eventType: "",
        message: ""


    })
    const [error, setErrors] = useState({})
    const [success, SetSuccess] = useState("")

    setTimeout(() => {
        SetSuccess("")
    }, 10000)
    const handelChangeFormData = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const submitForm = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        }

        if (!formData.phoneNo.trim()) {
            newErrors.phoneNo = "Phone Number is required";
        }

        if (!formData.eventType.trim()) {
            newErrors.eventType = "Event Type is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {

            SetSuccess("Thanks for reaching out to us!");
            setFormData(formData);
        }
    };



    return (
        <>
            <div>
                <Maincard
                    image={"images/Delicious Catering.svg"}
                    title={"VEGETARIAN CATERING FOR EVERY EVENT"}
                    textClass={"top-left"}
                    style={{ paddingTop: '80px', left: "20px", wnameth: "400px" }}

                ></Maincard>

                <div
                    className="cateraing-conainer"
                    style={{ backgroundImage: "url('/images/informationCard.jpg')" }}
                >
                    <div className="catering-info">
                        <div className="catering-content">
                            <img src="images/Catering-logo.svg" alt="Catering" className="catering-log" />


                            <p>
                                At <spam style={{ fontWeight: '700' }}>Vaikunta Maha Ruchulu</spam> we craft authentic, homestyle pure veg meals using time-honored recipes and the freshest ingredients. From lavish wedding feasts to intimate gatherings, our culinary team brings generations of expertise to your plate – cooked with love, served with perfection.<br style={{ paddingTop: "8px" }} />


                                <div style={{ paddingTop: "15px" }}>
                                    <strong >
                                        Why Choose Us?
                                    </strong>
                                    <ul style={{ paddingTop: "10px" }}>
                                        <li>
                                            100% Traditional Recipes – Grandmother’s secrets, modern presentation
                                        </li>
                                        <li>
                                            Pure & Hygienic – No onion/garlic (optional), Jain/Sattvik menus available
                                        </li>
                                        <li>

                                            Customizable Thalis – Regional specialties (North/South Indian, Maharashtrian, etc.)
                                        </li>
                                    </ul>
                                </div>




                            </p>
                        </div>
                        <div className="catering-contact-details">

                            CRAVING AUTHENTIC, HOMESTYLE VEGETARIAN CATERING? CALL US AT <spam style={{ color: "rgb(18, 49, 18)", fontWeight: '700' }}>7900368003</spam> OR EMAIL <spam style={{ color: "rgb(18, 49, 18)", fontWeight: '700' }}>INFO@VAIKUNTAMAHARUCHULU.COM</spam> FOR A DELICIOUS EXPERIENCE! LEAVE YOUR DETAILS BELOW, AND WE’LL HANDLE THE REST!

                        </div>

                        <div className="catering-form">
                            <form onSubmit={submitForm}>
                                <CommanInputs
                                    name="name"
                                    value={formData.name}
                                    handleChange={handelChangeFormData}
                                    placeholder="Full Name"
                                    error={error.name}
                                />
                                <CommanInputs
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    handleChange={handelChangeFormData}
                                    placeholder="Email"
                                    error={error.email}
                                />
                                <CommanInputs
                                    name="phoneNo"
                                    type="tel"
                                    value={formData.phoneNo}
                                    handleChange={handelChangeFormData}
                                    placeholder="Phone Number"
                                    error={error.phoneNo}
                                />
                                <CommanInputs
                                    name="eventType"
                                    type=""
                                    value={formData.eventType}
                                    handleChange={handelChangeFormData}
                                    placeholder="Event Type"
                                    error={error.eventType}

                                />
                                <CommanInputs
                                    name="message"
                                    value={formData.message}
                                    handleChange={handelChangeFormData}
                                    placeholder="Message"
                                    isTextArea={true}
                                    error={error.message}
                                />
                                {success ? <p className="success-message-catering">{success}</p> : ""}

                                <div>
                                    <CommonButton
                                        title={"Submit"}
                                        type=""
                                        onSubmit={submitForm}

                                    />
                                </div>


                            </form>


                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default Catering