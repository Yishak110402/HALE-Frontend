import "./ProgramsOverview.css"
import programsImg from "./../../../assets/programs-overview-pic.jpg"
export default function ProgramsOverview(){
    return(
        <div className="programs-overview">
            <p>Our organization provides different services for different communities with various needs.</p>
            <button>Find out more about our services</button>
            <img src={programsImg} alt="" />
        </div>

    )
}