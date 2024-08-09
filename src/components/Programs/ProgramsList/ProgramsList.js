import { useContext } from "react";
import "./ProgramsList.css";
import { GeneralContext } from "../../../hooks/GeneralContext";
import Program from "./Program";
import "./ProgramsList.css"
export default function ProgramsList() {
  const { programs } = useContext(GeneralContext);
  return (
    <div className="programs-list">
      {programs.map((prg, index) => (
        <Program
          name={prg.name}
          dOne={prg.description.dOne}
          dTwo={prg.description.dTwo}
          dThree={prg.description.dThree}
        />
      ))}
    </div>
  );
}
