import React from "react";
import LazyLoad from "react-lazyload";
import { Carousel } from "react-bootstrap";
import carousel01 from "../../img/carousel/carousel01.jpg";
import carousel02 from "../../img/carousel/carousel02.jpg";
import carousel03 from "../../img/carousel/carousel03.jpg";
import carousel04 from "../../img/carousel/carousel04.jpg";
import "./setCarousel.scss";

export default function setCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <LazyLoad throttle={200} height={300}>
          <img
            //loading="lazy"
            className="d-block w-100"
            src={carousel01}
            alt="First slide"
          />
        </LazyLoad>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         // loading="lazy"
          className="d-block w-100"
          src={carousel02}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          // loading="lazy"
          className="d-block w-100"
          src={carousel03}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          //loading="lazy"
          className="d-block w-100"
          src={carousel04}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
