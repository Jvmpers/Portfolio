import React, { useState } from 'react'
import style from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faMessage, faAddressCard, faListCheck , faBriefcase} from "@fortawesome/free-solid-svg-icons";
export default function Nav() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <div className={style.divPa}>
      <div className={style.conteiner} >
      <div className={style.profile}>
      <div><img className={style.imgProfile} src="https://cdn.discordapp.com/attachments/671869500915843082/1041389892783067186/asdasdasd-removebg-preview_3.png" alt="Tomás" /> </div>
        <div><p>Full Stack Developer</p></div>
        </div>
        <div className={style.options}>
          <div><a  href="#aboutMe">About Me</a></div>
          <div><a  href="#myTech">My Tech</a></div>
          <div><a  href="#myProjects">My Projects</a></div>
          <div><a  href="#contact">Contact</a></div>
        </div>
        <div className={style.optionsIcons}>
        <div><a href="#aboutMe"><FontAwesomeIcon className={style.icons} icon={ faAddressCard} /></a></div>
          <div><a href="#myTech"><FontAwesomeIcon className={style.icons} icon={ faListCheck} /></a></div>
          <div><a href="#myProjects"><FontAwesomeIcon className={style.icons} icon={ faBriefcase} /></a></div>
          <div><a href="#contact"><FontAwesomeIcon className={style.icons} icon={faMessage} /></a></div>
        </div>
      </div>
      {showMenu?<div className={style.hamburgerMenu}>
          <div><a href="#aboutMe"><FontAwesomeIcon className={style.icons} icon={ faAddressCard} /></a></div>
          <div><a href="#myTech"><FontAwesomeIcon className={style.icons} icon={ faListCheck} /></a></div>
          <div><a href="#myProjects"><FontAwesomeIcon className={style.icons} icon={ faBriefcase} /></a></div>
          <div><a href="#contact"><FontAwesomeIcon className={style.icons} icon={faMessage} /></a></div>
       
      </div>:<></>}
      <div className={style.hamburger} onClick={():void=>setShowMenu(!showMenu)} >
          <p><FontAwesomeIcon icon={faBars} /></p>
        </div>
      </div>
  )
}
