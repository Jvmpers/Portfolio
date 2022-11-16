import React from 'react'
import style from "./AboutMe.module.css";
export default function AboutMe() {
  return (
    <section className={style.div}>
          <div className={style.textAbout}>
            <h1 className={style.about}>About Me</h1>
            <p className={style.descriptionMe}>
              Full Stack Web Developer. I am looking for a job where I can train and learn new technologies and be part of a work team. I characterize myself as an empathetic, cooperative, tenacious person and solver of logical and workgroup problems.
            </p>
          </div>
          <div className={style.coverImg}>
            <img className={style.imgAbout} src="https://cdn.discordapp.com/attachments/671869500915843082/1042562613365702697/asdasdasd.png" alt="" />
          </div>
    </section>

  )
}
