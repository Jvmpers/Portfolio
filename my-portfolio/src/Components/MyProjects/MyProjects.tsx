import React, { useState } from "react";
import style from "./MyProjects.module.css";
import json from "./myProjects.json";
import MyProjectsCard from "./MyProjectsCard/MyProjectsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
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
    <section id="myProjects" className={style.sectionMyProjects}>
      <div className={style.textMyprojects}>
        <h2 className={style.titleMyprojects}>My Projects</h2>
      </div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={json.length - 1}
        visibleSlides={2}
        infinite={true}
        className={style.carouselProjects}
      >
        <Slider className={style.sliderProjects}>
          {json.map(
            (e: any, i: number) =>
              i !== 0 && (
                <Slide key={i} index={i}>
                  {" "}
                  <MyProjectsCard props={e} />{" "}
                </Slide>
              )
          )}
        </Slider>
        <ButtonBack className="">
          <FontAwesomeIcon icon={faChevronLeft} />
        </ButtonBack>
        <ButtonNext className="">
          <FontAwesomeIcon icon={faChevronRight} />
        </ButtonNext>
      </CarouselProvider>
    </section>
  );
}
