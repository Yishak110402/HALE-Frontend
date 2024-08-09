import "./Program.css";
export default function Program({ name, dOne = "", dTwo = "", dThree = "" }) {
  return (
    <div className="program">
      <div>
        <h2>{name}</h2>
        <p>{dOne}</p>
        {dTwo !== "" && <p>{dTwo}</p>}
        {dThree !== "" && <p>{dThree}</p>}
      </div>
      <img src="./assets/advocacy.jpg" alt="" />
    </div>
  );
}
