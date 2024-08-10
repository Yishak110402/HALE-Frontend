import { useContext } from "react";
import { GeneralContext } from "../../../hooks/GeneralContext";
import "./EventsList.css"
import Event from "./Event";
export default function EventsList(){
    const {events} = useContext(GeneralContext)
    return(
        <div className="events-list">
          {
            events.map((event, i)=>(
                <Event name={event.name} i={i} />
            ))
          }
        </div>
    )
}