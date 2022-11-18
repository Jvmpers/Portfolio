import React from 'react';
import style from "./MyProjects.module.css";
import json from "./myProjects.json";
import MyProjectsCard from './MyProjectsCard/MyProjectsCard';
export default function MyProjects() {
  return (
    <section  id='myProjects' className={style.sectionMyProjects}>
        <div className={style.textMyprojects}>
          <h2 className={style.titleMyprojects}>My Projects</h2>
        </div>
        <div className={style.listProjects}>
          {json.map(e=>{
            return(
              <MyProjectsCard props={e} />
            )
          })

          }
        </div>
    </section>
  )
}
