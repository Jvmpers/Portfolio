import React from 'react'
import style from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faMessage, faAddressCard, faListCheck , faBriefcase} from "@fortawesome/free-solid-svg-icons";
export default function Nav() {
  return (
    <div className={style.divPa}>
      <header className={style.conteiner} >
      <div className={style.profile}>
      <div><img className={style.imgProfile} src="https://cdn.discordapp.com/attachments/671869500915843082/1041389892783067186/asdasdasd-removebg-preview_3.png" alt="Tomás" /> </div>
        <div><p>Full Stack Developer</p></div>
        </div>
        <div className={style.options}>
          <div><p>About Me</p></div>
          <div><p>My Tech</p></div>
          <div><p>My Projects</p></div>
          <div><p>Contact</p></div>
        </div>
        <div className={style.optionsIcons}>
          <div><FontAwesomeIcon className={style.icons} icon={ faAddressCard} /></div>
          <div><FontAwesomeIcon className={style.icons} icon={ faListCheck} /></div>
          <div><FontAwesomeIcon className={style.icons} icon={ faBriefcase} /></div>
          <div><FontAwesomeIcon className={style.icons} icon={faMessage} /></div>
        </div>
      </header>
      <div className={style.hamburger}>
          <p><FontAwesomeIcon icon={faBars} /></p>
        </div>
      </div>
  )
}
