import CommonButton from "../../comman/Button"
import CommanInputs from "../../comman/inputs"
import Maincard from "../../comman/maincard"
import "./catering.css"
const Catering = () => {
    return (
        <>
            <div>
                <Maincard
                    image={"images/Konark sun temple.jpg"}
                    title={"VEGETARIAN CATERING FOR EVERY EVENT"}
                    textClass={"top-left"}
                    style={{ paddingTop: '80px', left: "20px", width: "400px" }}

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
                                Rayalaseema Ruchulu takes much pride in making life’s every occasion memorable with scrumptious delights of Telugu cuisine. From intimate social events such as wedding parties, fundraising organizations, and social clubs. Our clients include corporations, to comprehensive corporate events for corporates such as Facebook, Wells Fargo, etc Rayalaseema Ruchulu has ensured happy taste buds, happy hearts and a happy tummy to every guest.

                                We offer a variety of options for menu styles including buffet catering. Menus integrate flavors, using local, seasonal, organic ingredients and always can be customised to include gluten-free, dairy-free, and vegetarian options.
                            </p>
                        </div>
                        <div className="catering-contact-details">
                            IF YOU ARE LOOKING FOR DELICIOUS, WHOLESOME FOOD AND CATERING SERVICES THEN ​PLEASE CALL US ON 8688686886 OR EMAIL US AT INFO@RAYALASEEMARUCHULU.COM​ALTERNATIVELY LEAVE US YOUR DETAILS BELOW AND WE WILL GET IN TOUCH WITH YOU
                        </div>
                     
                            <div className="catering-form">
                                <form >
                                    <CommanInputs
                                        id="name"
                                        value={""}

                                        placeholder="Full Name"
                                    />
                                    <CommanInputs
                                        id="email"
                                        type="email"
                                        value={""}

                                        placeholder="Email"
                                    />
                                    <CommanInputs
                                        id="phone"
                                        type="tel"
                                        value={""}

                                        placeholder="Phone Number"
                                    />
                                    <CommanInputs
                                        id="message"
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