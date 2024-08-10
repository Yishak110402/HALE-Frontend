import { useContext } from "react"
import {GeneralContext} from "./../../../hooks/GeneralContext"

export default function Team(){
    const {teams} = useContext(GeneralContext)
    return(
        <div className="team">
            <img src={teams[0].image} />
            <h2>{teams[0].name}</h2>
            <h4>{teams[0].position}</h4>
            <button>Learn More</button>
        </div>
    )
}