import "./CompanyEthics.css";
export default function CompanyEthics() {
  return (
    <div className="company-values">
      <div className="value">
        <div>
          <h2>Vision</h2>
          <hr/>
          <p>
          Our vision is to create a society where every individual, regardless of their background or circumstances, enjoys equal rights and opportunities. We strive for a future where justice prevails, diversity is celebrated, and all communities, especially the marginalized and vulnerable, are empowered to contribute to and benefit from sustainable development, democratic governance and inclusive future.
          </p>
        </div>
        {/* <img src={visionPic} alt="" /> */}
      </div>
      <div className="value">
        <div>
          <h2>Mission</h2>
          <hr/>
          <p>
          Our mission is to advance human rights and foster a culture of inclusion by advocating for gender equality, promoting child rights, protecting labor rights, fostering disability inclusion, safeguarding cultural rights, supporting environmental sustainability, and advocating for sexual and reproductive health and rights (SRHR). We are committed to ensuring access to justice, advance democracy, and good governance for all individuals, particularly those from marginalized and vulnerable communities. Through comprehensive free legal aid services, research, advocacy, education, awareness campaigns, civic engagement, public interest litigation, and community support, we aim to empower and amplify the voices of those who need it most, creating a just and equitable society.
          </p>
        </div>
      </div>
    </div>
  );
}
