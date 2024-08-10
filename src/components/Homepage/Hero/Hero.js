import "./Hero.css"
import { useNavigate } from "react-router-dom"
export default function Hero(){
    const navigate = useNavigate()
    return(
        <div className="hero">
            <img src="https://i.postimg.cc/FzymWWXP/hero-bg.jpg" alt="" className="hero-image"/>
            <div className="hero-txt">
                <h1>HALE</h1>
                <h3>Human Right and Inclusion Network</h3>
                <p>"Championing Human Rights, Building Inclusive Futures."</p>
                <div className="hero-cta-btns">
                    <button onClick={()=>(navigate("/aboutus"))}>Learn More</button>
                    <button onClick={()=>(navigate("/contact"))}>Contact Us</button>
                </div>
            </div>
        </div>
    )
}