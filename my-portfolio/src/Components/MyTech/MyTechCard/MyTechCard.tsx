import React from 'react'
import style from "./MyTechCard.module.css";
export default function MyTech() {
  return (
    <section id="myTech" className={style.sectionMyTech}>
    <div className={style.tech}>
      <h3 className={style.titleTech}>
        Frontend Development
      </h3>
    </div>
    <div  className={style.tech}>
      <h3 className={style.titleTech}>
        Backend Development
      </h3>
    </div>
    </section>

  )
}
