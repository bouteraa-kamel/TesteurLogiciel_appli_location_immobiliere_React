import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import aboutData from "../data/aboutData.json";
import bannerAbout from "../assets/banner-about.png";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <Banner image={bannerAbout} />

      <div className="about-collapses">
        {aboutData.map((item) => (
          <Collapse key={item.id} title={item.title}>
            {item.content}
          </Collapse>
        ))}
      </div>
    </div>
  );
}

export default About;
