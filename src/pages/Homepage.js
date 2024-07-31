import Activities from "../components/Homepage/Activities/Activities";
import Hero from "../components/Homepage/Hero/Hero";

export default function Homepage(){
    return(
        <div className="homepage">
            <Hero/>
            <Activities/>
        </div>
    )
}