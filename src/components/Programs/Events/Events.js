import "./Events.css"
export default function Events({title,imgName}){
    return(  
            <div className="event">
                <div className="eventImg">
                    <img src={imgName} alt="event" />
                </div>
                <div className="eventTitle">
                    <h3>{title}</h3>
                </div>
                <div className="eventButton">
                    <button>Read more</button>
                </div>
            </div>
        
    )
}