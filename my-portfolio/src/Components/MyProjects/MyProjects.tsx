import React, { useState } from "react";
import style from "./MyProjects.module.css";
import json from "./myProjects.json";
import MyProjectsCard from "./MyProjectsCard/MyProjectsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  faChevronLeft,
  faChevronRight,
  faStarHalfStroke as half,
} from "@fortawesome/free-solid-svg-icons";
export default function MyProjects() {
  const [startClick, setStartClick] = useState<number>(new Date().valueOf());
  const [overlay, setOverlay] = useState<any>(0);
  const [overlayImg, setOverlayImg] = useState(null);
  const toggleOverlay = (e: any): void => {
    e.preventDefault();
    setOverlay(!overlay);
  };

  return (
    <section id="myProjects"  className={style.sectionMyProjects} >
      <div className={style.myprojectsContent} >

  
      <div className={style.textMyprojects}>
        <h2 className={style.titleMyprojects}>My Projects</h2>
      </div> 
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={json.length}
         visibleSlides={3} 
       infinite={true} 

       className={style.carouselProjects} 
      >
                <ButtonBack className={style.buttonBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </ButtonBack>

        <Slider   className={style.sliderProjects} >
        {json.map((e: any, i: number) =>
              <Slide  className={style.slideProject} key={i} index={i}> 
                  <MyProjectsCard props={e} /> 
                  {json[i+3] && <MyProjectsCard props={json[i+3]} />}
               </Slide> 
     
          )} 
        </Slider>
        <ButtonNext className={style.buttonNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </ButtonNext>
      </CarouselProvider>
  
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={json.length}
         visibleSlides={1} 
       infinite={true} 

       className={style.carouselProjectsSmall} 
      >
                <ButtonBack className={style.buttonBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </ButtonBack>

        <Slider   className={style.sliderProjects} >
        {json.map((e: any, i: number) =>
              <Slide  key={i} index={i} className={style.slideProject}> 
                  <MyProjectsCard props={e} /> 
             </Slide> 
     
          )} 
        </Slider>
        <ButtonNext className={style.buttonNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </ButtonNext>
      </CarouselProvider>
      </div>
    </section>
  );
}
