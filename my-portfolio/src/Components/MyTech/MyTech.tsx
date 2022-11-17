import React from 'react'
import style from "./MyTech.module.css";
import MyTechCard from './MyTechCard/MyTechCard';
import json from "./techs.json";
export default function MyTech() {
  return (
    <section id="myTech" className={style.sectionMyTech}>
    <div className={style.tech}>
      <h3 className={style.titleTech}>
        Frontend Development
      </h3>
      <div>
        {json.frontend.map(e=>{
          return(
            <div>
              <MyTechCard name={e.name} experience={e.experience} />
            </div>
          )
        })}
      </div>
    </div>
    <div  className={style.tech}>
      <h3 className={style.titleTech}>
        Backend Development
        
      </h3>
      <div>
      {json.backend.map(e=>{
          return(
            <div>
              <MyTechCard name={e.name} experience={e.experience} />
            </div>
          )
        })}
      </div>
    </div>
    </section>

  )
}


//React.Dispatch<React.SetStateAction<string>>;