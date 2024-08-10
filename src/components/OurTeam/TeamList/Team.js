export default function Team({team}){
    return(
        <div className="team">
            <img src={team.image} alt=""/>
            <h2>{team.name}</h2>
            <h4>{team.position}</h4>
            <button>Learn More</button>
        </div>
    )
}