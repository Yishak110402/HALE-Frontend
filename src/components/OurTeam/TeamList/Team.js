import { useContext } from "react"
import {GeneralContext} from "./../../../hooks/GeneralContext"

export default function Team({team}){
    const {teams} = useContext(GeneralContext)
    return(
        <div className="team">
            <img src={team.image} />
            <h2>{team.name}</h2>
            <h4>{team.position}</h4>
            <button>Learn More</button>
        </div>
    )
}