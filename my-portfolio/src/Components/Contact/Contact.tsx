import React, { useRef } from "react";
import style from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/fontawesome-free-brands";
export default function Contact() {
  const form = useRef<any>();
  const sendEmail = (e: any): void => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ggamc3k",
        "template_g9hdk5f",
        form.current,
        "HW7dsjYI6ETtRa-ti"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const iconFaLinkedin: any = faLinkedin;
  const iconFaGithub: any = faGithub;
  return (
    <section id="contact">
      <div className={style.containerContact}>
        <h2 className={style.textCenter}>
          Contact
        </h2>
        <div className={style.divContain}>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={style.formContact}
            action=""
          >
            <input
              className={style.inputName}
              type="text"
              placeholder="Full Name"
              name="user_name"
              required
            />
            <input
              className={style.inputSubject}
              type="text"
              placeholder="Subject"
              name="subject"
              required
            />
            <input
              className={style.inputEmail}
              type="email"
              placeholder="email"
              name="user_email"
              required
            />

            <textarea
              className={style.textMessaje}
              cols={30}
              rows={8}
              placeholder="Type here for Message.."
              name="message"
              required
            ></textarea>
            <button className={style.submitContact} type="submit">
              Send Message
            </button>
          </form>
          <div className={style.divText}>
            <a className={style.aContact} target="_blank" href="https://www.linkedin.com/in/tomas-federico-pastore/">
              <FontAwesomeIcon className={style.icons} icon={iconFaLinkedin} />
            </a>
            <a className={style.aContact} target="_blank" href="https://github.com/Jvmpers" >
              <FontAwesomeIcon className={style.icons} icon={iconFaGithub} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
