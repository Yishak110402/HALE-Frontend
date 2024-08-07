import "./Hero.css"
import heroImg from "./../../../assets/hero-bg.jpg"
export default function Hero(){
    return(
        <div className="hero">
            <img src={heroImg} alt="" className="hero-image"/>
            <div className="hero-txt">
                <h1>HALE</h1>
                <h3>Human Right and Inclusion Network</h3>
                <p>"Championing Human Rights, Building Inclusive Futures."</p>
                <div className="hero-cta-btns">
                    <button>Learn More</button>
                    <button>Contact Us</button>
                </div>
            </div>
        </div>
    )
}