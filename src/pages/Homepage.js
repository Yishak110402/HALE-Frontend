import AboutUsOverview from "../components/Homepage/AboutUsOverview/AboutUsOverview";
import Activities from "../components/Homepage/Activities/Activities";
import Hero from "../components/Homepage/Hero/Hero";
import ProgramsOverview from "../components/Homepage/ProgramsOverview/ProgramsOverview";

export default function Homepage(){
    return(
        <div className="homepage">
            <Hero/>
            <Activities/>
            <AboutUsOverview/>
            <ProgramsOverview/>
        </div>
    )
}