import React from 'react'
import style from "./MyTechCard.module.css";

interface Props{
  name:string;
  experience:string

}
export default function MyTechCard({name, experience}:Props) {
  return (
    <div className={style.text}>
        <p className={style.name}>{name}</p>
        <p className={style.experience}>{experience}</p>
    </div>
  )
}
