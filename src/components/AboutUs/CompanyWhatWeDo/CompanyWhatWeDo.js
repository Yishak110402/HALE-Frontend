import "./CompanyWhatWeDo.css"
import Job from "./Job"
export default function CompanyWhatWeDo(){
    return(
        <div className="what-we-do">
            <h1>What We Do</h1>
            <div className="jobs-container">
                <Job/>
                <Job/>
                <Job/>
                <Job/>
                <Job/>
            </div>
        </div>
    )
}