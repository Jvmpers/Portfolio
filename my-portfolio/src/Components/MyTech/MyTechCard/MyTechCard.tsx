import React from 'react'
import style from "./MyTechCard.module.css";

interface Props{
  name:string;
  experience:string

}
export default function MyTechCard({name, experience}:Props) {
  return (
    <section id="myTech" className={style.sectionMyTech}>
    <div className={style.tech}>
        <p>{name}</p>
        <p>{experience}</p>
    </div>
    </section>

  )
}
