import { useNavigate } from "react-router-dom"

export default function Team({team, index}){
    const navigate = useNavigate()
    return(
        <div className="team">
            <img src={team.image} alt=""/>
            <h2>{team.name}</h2>
            <h4>{team.position}</h4>
            <button onClick={()=>(navigate(`/team/${index}`))}>Learn More</button>
        </div>
    )
}