
import Maincard from "../../comman/maincard"
import SEO from "../../comman/SEO"
import "./about.css"

const About = () => {
    return (
        <>
            <SEO
                title="Vaikunta Maha Ruchulu – Pure Veg Andhra Restaurant in Vizag"
                description="Vaikunta Maha Ruchulu – Vizag’s best pure veg restaurant. Enjoy authentic South Indian meals, special thalis, and homely flavors in a family-friendly setting. Visit us today!"
                keywords="
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
    Vizag veg biryani near me
  "
                url="https://vaikuntamaharuchulu.com/"
                image="https://vaikuntamaharuchulu.com/banner.jpg"
            />

            <div>
                <Maincard
                    image={"assets/public-card.png"}
                    title={"ABOUT US"}
                />

            </div>
            <div className="about-container">
                <div className="about-card-wrapper">
                    <img src="assets/images/informationCard.jpg" className="about-card" loading="lazy" />
                    <div className="about-text-overlay">
                        <section className="about-section">
                            <p className="about-heading">ABOUT US</p>
                            <p className="about-paragraph">
                                At <spam style={{ fontWeight: '700' }}>Vaikunta Maha Ruchulu Restaurant</spam>, brings generations of authentic Andhra/Telugu vegetarian recipes to your plate. Our dishes are crafted with handpicked ingredients, traditional spices, and a promise of purity (no onion, no garlic options available). From humble beginnings as a family kitchen to becoming Visakhapatnam’s favorite pure veg eatery, we take pride in preserving the taste of heritage<br /><br />
                                <strong>   Why dine with us?</strong><br />
                                ✔ No Compromise on Taste: 100% traditional, 0% artificial  flavours<br />
                                ✔ Grandmother’s Recipes: Time-tested  flavours, passed down for decades.<br />
                                ✔ Farm-to-Table Freshness: Locally sourced veggies, daily preparations.<br />
                                ✔ Hygienic & Sacred: Sattvik cooking in a pristine environment.
                            </p>

                            <h1 className="about-heading">FARM TO TABLE THE VAIKUNTA WAY</h1>
                            <p className="about-paragraph">
                                A <span style={{ fontWeight: '700' }}>Vaikunta Maha Ruchulu Restaurant</span> we believe that great food starts at the roots quite literally.
                                Our Farm to Table philosophy means we source fresh, seasonal, and locally grown ingredients directly from trusted farmers to craft every dish with purity and purpose.
                                <br />

                                <div style={{ height: '16px' }}></div>

                                We take pride in offering a pure vegetarian dining experience that honors authentic Indian flavours, nourishes the soul, and supports local farming communities.
                                From lush green fields to your plate, every meal at Vaikunta is a celebration of nature, culture, and care just the way it’s meant to be.
                                <br />

                                <div style={{ height: '16px' }}></div>

                                <p style={{ paddingTop: '5px' }}>
                                    Come, experience clean, soulful food... the Vaikunta way.
                                </p>
                            </p>
                        </section>


                    </div>
                </div>
            </div>


        </>
    )
}
export default About