import { Link } from "react-router-dom"

export default function Event({name, i}){
    let shortName
    if (name.length > 40){
        shortName = name.slice(0,40) + "..."
    }else{
        shortName=name
    }
    return(
        <div className="event">
            <img src="./assets/EventsImages/Event1/img3.jpg" alt="" />
            <h1>{shortName}</h1>
            <Link to={`/events/${i}`}>Read More</Link>
        </div>
    )
}