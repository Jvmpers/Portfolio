import React from 'react'
import style from "./LandingPage.module.css";
import { Link } from 'react-router-dom';
export default function LandingPage() {
  return (
    <div>
      <section className={style.homeConteiner}>
        <div className={style.sectionConteiner}>
          <a className={style.contact} href="#contact">Contact</a>         <div className={style.divInfo}>
          <h1 className={style.title}>Hello I´am Tomás Pastore</h1>
          <p className={style.description}>A full stack developer finding my first teamwork</p>
          </div>
        </div>
      </section>
      </div>
  )
}
