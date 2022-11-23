import React from 'react'
import style from "./MyTech.module.css";
import MyTechCard from './MyTechCard/MyTechCard';
import json from "./techs.json";
export default function MyTech() {
  return (
    <section id="myTech" className={style.sectionMyTech}>
      <h2 className={style.titleMyTech}>My Tech</h2>
      <div  className={style.techs}>

      
    <div className={style.tech}>
      <h3 className={style.titleTech}>
        Frontend Development
      </h3>
      <div className={style.listTechs}>
        {json.frontend.map((e,i)=>{
          return(

              <MyTechCard key={i} name={e.name} experience={e.experience} />

          )
        })}
        </div>
    </div>
    <div  className={style.tech}>
      <h3 className={style.titleTech}>
        Backend Development
        
      </h3>
      <div className={style.listTechs}>
      {json.backend.map((e,i)=>{
          return(
            
              <MyTechCard key={i} name={e.name} experience={e.experience} />
            
          )
        })}
        </div>
    </div>
    </div>
    </section>

  )
}


//React.Dispatch<React.SetStateAction<string>>;