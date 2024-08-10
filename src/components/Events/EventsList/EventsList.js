import { useContext } from "react";
import { GeneralContext } from "../../../hooks/GeneralContext";
import "./EventsList.css"
import Event from "./Event";
export default function EventsList(){
    const {events} = useContext(GeneralContext)
    return(
        <div className="events-list">
            <Event name={events[0].name}/>
            <Event name={events[0].name}/>
            <Event name={events[0].name}/>
            <Event name={events[0].name}/>
        </div>
    )
}