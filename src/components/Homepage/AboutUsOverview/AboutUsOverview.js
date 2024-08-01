import "./AboutUsOverview.css";
import overviewImg from "./../../../assets/about-overview-pic.jpg";
export default function AboutUsOverview() {
  return (
    <div className="about-overview">
      <div>
        <h1>HALE</h1>
        <p>
          HALE: Human Rights and Inclusion Network is a civil society
          organization based in Ethiopia, dedicated to advancing human rights,
          promoting gender equality, ensuring children's rights, fostering
          disability inclusion, and supporting environmental sustainability. Our
          mission is to create a just and equitable society where marginalized
          and vulnerable communities are empowered and their voices are heard.
          We are committed to addressing human rights violations, promoting good
          governance, and fostering a culture of inclusion through research,
          public interest litigation, civic engagement, and advocacy.
        </p>
        <p className="learn-more">Learn More</p>
      </div>
      <img src={overviewImg} alt="" />
    </div>
  );
}
