import { Link } from "react-router-dom";
import "./CompanyToPrograms.css";
export default function CompanyToPrograms() {
  return (
    <div className="company-to-programs">
      <div>
        <p>Some of our programs include:</p>
        <ul>
          <li>Gender Equality Programs</li>
          <li>Children Rights Initiatives</li>
        </ul>
        <Link to={"/programs"}>Learn More About Our Programs</Link>
      </div>
      <img src="./assets/man-helping.jpg" alt="" />
    </div>
  );
}
