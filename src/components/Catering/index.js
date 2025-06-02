import CommonButton from "../../comman/Button"
import CommanInputs from "../../comman/inputs"
import Maincard from "../../comman/maincard"
import "./catering.css"
const Catering = () => {
    return (
        <>
            <div>
                <Maincard
                    image={"images/Delicious Catering.svg"}
                    title={"VEGETARIAN CATERING FOR EVERY EVENT"}
                    textClass={"top-left"}
                    style={{ paddingTop: '80px', left: "20px", wnameth: "400px" }}

                ></Maincard>

                <section
                    className="cateraing-conainer"
                    style={{ backgroundImage: "url('/images/informationCard.jpg')" }}
                >
                    <div className="catering-info">
                        <div className="catering-content">
                            <img src="asdcds">
                            </img>
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
                            <form >
                                <CommanInputs
                                name="name"
                                    value={""}

                                    placeholder="Full Name"
                                />
                                <CommanInputs
                                    name="email"
                                    type="email"
                                    value={""}

                                    placeholder="Email"
                                />
                                <CommanInputs
                                    name="phone"
                                    type="tel"
                                    value={""}

                                    placeholder="Phone Number"
                                />
                                 <CommanInputs
                                    name="eventType"
                                    type=""
                                    value={""}

                                    placeholder="Event Type"
                                    
                                />
                                <CommanInputs
                                    name="message"
                                    value={""}

                                    placeholder="Message"
                                    isTextArea={true}
                                />
                                 
                                <div>
                                    <CommonButton
                                        title={"Submit"}
                                        type=""

                                    />
                                </div>

                            </form>


                        </div>
                    </div>
                </section>
            </div>

        </>

    )
}
export default Catering