import "./CompanyEthics.css";
import visionPic from "./../../../assets/vision-pic.jpg";
export default function CompanyEthics() {
  return (
    <div className="company-values">
      <div className="value">
        <div>
          <h2>Vision</h2>
          <p>
            Our vision is a world where human rights are universally respected,
            gender equality is achieved, children are protected and empowered,
            individuals with disabilities are included and valued, and
            environmental sustainability is prioritized. We strive to ensure
            that every individual has the opportunity to thrive and contribute
            to a sustainable and inclusive future.
          </p>
        </div>
        <img src={visionPic} alt="" />
      </div>
      <div className="value">
        <div>
          <h2>Mission</h2>
          <p>
            Our mission is to advance human rights and promote inclusion for all
            individuals, especially those from marginalized and vulnerable
            communities, driving systemic change through advocacy, education,
            community support, research activities, public interest litigation,
            democracy promotion, civic engagement, and promoting sexual and
            reproductive health and rights (SRHR). We strive to foster a culture
            of equality, justice, and sustainability through our dedicated
            programs and initiatives.
          </p>
        </div>
      </div>
    </div>
  );
}
