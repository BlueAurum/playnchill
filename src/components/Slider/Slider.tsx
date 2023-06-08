import React from "react";
import { Carousel, Row, Col } from "antd";
import slide_one from "../../../public/assets/slider_1.png";
import slide_two from "../../../public/assets/slider_2.jpg";
import slide_three from "../../../public/assets/slider_3.jpeg";

import slide_right from "../../../public/assets/slider_2.png";
import slide_left from "../../../public/assets/slider_3.png";

import arraw_right from "./assets/icons/arraw_right.svg";
import arraw_left from "./assets/icons/arraw_left.svg";

import s from './slider.module.scss'

export const Slider: React.FC = () => {
  const carouselRef: React.Ref<any> = React.createRef();

  const prevSlide = () => {
    carouselRef.current.prev();
  };

  const nextSlide = () => {
    carouselRef.current.next();
  };

  return (
    <Row justify={"center"}>
      <Col>
        <img style={{ opacity: 0.4, marginRight: 10 }} src={slide_right} alt="" />
        <div>
          <img onClick={prevSlide} className={s.arraw__slider__right} src={arraw_left} alt="" />
        </div>
      </Col>
      <Col span={12}>
        <Carousel ref={carouselRef}>
          <div>
            <img style={{ height: "679px" }} src={slide_one} alt="" />
          </div>
          <div>
            <img style={{ height: "679px" }} src={slide_two} alt="" />
          </div>
          <div>
            <img style={{ height: "679px" }} src={slide_three} alt="" />
          </div>{" "}
        </Carousel>
      </Col>{" "}
      <Col>
        <img style={{ opacity: 0.4, marginLeft: 10 }} src={slide_left} alt="" />
        <div className={s.arraw__slider__left}>
          <img onClick={nextSlide} src={arraw_right} alt="" />
        </div>
      </Col>
    </Row>
  );
};
