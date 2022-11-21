import React,{useRef} from 'react'
import style from "./Contact.module.css"
import emailjs from "@emailjs/browser"
export default function Contact() {
const form = useRef<any>();
const sendEmail=(e:any):void => {
  e.preventDefault()
  emailjs.sendForm("service_ggamc3k","template_g9hdk5f", form.current,"HW7dsjYI6ETtRa-ti")
  .then((result:any)=>{
    console.log(result.text);
  },(error:any)=>{
    console.log(error.text);
  });
  e.target.reset()
};
 return (
    <section id='contact'>
       <div className={style.containerContact}>
        <h2 className={style.textCenter}> Contact Us </h2>
        <form  ref={form} onSubmit={sendEmail} action="">
          <input className={style.inputName} type="text" placeholder="Full Name" name="user_name" required />
          <input type="email" placeholder="email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
           <textarea name="messaje" ></textarea>
           <button type="submit" className={style.submit}>Send Messaje</button>
          </form>
       </div>
    </section>
  )
}
