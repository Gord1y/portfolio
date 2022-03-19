import "./about.css";
import Me from "../../img/mem.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          <b>I'm Professional FrontEnd Developer</b>
        </p>
        <p className="a-desc">tyt text o tom kakoi ya pizdatuy hahahahahha</p>
      </div>
    </div>
  );
};

export default About;
