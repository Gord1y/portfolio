import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit2 = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tljsarq",
        "template_ktntd3p",
        formRef.current,
        "Z8cRNXi3ML11P7iJM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +38(098)-832-09-93
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              gordiyvl@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              28 Hlibna Street, Zhytomir 10029 Ukraine
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            Give me your layout and I'll tell you <b>How long does it take?</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit2}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              required
              type="text"
              id="txt"
              minLength="2"
              placeholder="Your Name"
              name="user_name"
            />
            <br />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              required
              type="email"
              placeholder="Your Email"
              name="user_email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <br />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              required
              type="text"
              id="txt"
              minLength="4"
              placeholder="What is your project?"
              name="user_project"
            />
            <br />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              required
              rows="3"
              placeholder="Describe your project"
              name="message"
            />
            <br />
            <button>Submit</button>
            <br />
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
