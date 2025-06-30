
import Maincard from "../../comman/maincard"
import "./about.css"

const About = () => {
    return (
        <>
            <div>
                <Maincard
                    image={"images/4.png"}
                    title={"ABOUT US"} />
            </div>
            <div className="about-container">
                <div className="about-card-wrapper">
                    <img src="images/informationCard.jpg" className="about-card" />
                    <div className="about-text-overlay">
                        <section className="about-section">
                            <p className="about-heading">ABOUT US</p>
                            <p className="about-paragraph">
                                At <spam style={{ fontWeight: '700' }}>Vaikunta Maha Ruchulu  Restaurant</spam>, brings generations of authentic Andhra/Telugu vegetarian recipes to your plate. Our dishes are crafted with handpicked ingredients, traditional spices, and a promise of purity (no onion, no garlic options available). From humble beginnings as a family kitchen to becoming Visakhaptanm’s favorite pure veg eatery, we take pride in preserving the taste of heritage<br /><br />
                                <strong>   Why dine with us?</strong><br />
                                ✔ No Compromise on Taste: 100% traditional, 0% artificial flavors<br />
                                ✔ Grandmother’s Recipes: Time-tested flavors, passed down for decades.<br />
                                ✔ Farm-to-Table Freshness: Locally sourced veggies, daily preparations.<br />
                                ✔ Hygienic & Sacred: Sattvik cooking in a pristine environment.
                            </p>

                            <h1 className="about-heading">FARM TO TABLE THE VAIKUNTA WAY</h1>
                            <p className="about-paragraph">
                                At <spam style={{ fontWeight: '700' }}>Vaikunta Maha Ruchulu  Restaurant</spam>  isn't just a catchy phrase - it's our unwavering promise. It means we're deeply committed to sourcing the freshest, highest-quality ingredients directly from local farms and trusted growers.<br /><br />

                                Imagine vegetables picked at their peak ripeness, vibrant and bursting with natural flavor. Or meats and dairy from animals raised with care, contributing to a superior taste and texture. This direct connection ensures that every ingredient on your plate has traveled the shortest possible distance, preserving its nutritional value and bringing you an unparalleled dining experience.<br /><br />

                                It's food as nature intended: pure, honest, and incredibly delicious.
                            </p>
                        </section>


                    </div>
                </div>
            </div>


        </>
    )
}
export default About