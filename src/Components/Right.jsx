import React, { useEffect, useRef, useState } from "react";
import "../Style/Right.sass";
import store from "../img/store.png";
import weather from "../img/weather.png";
import todolist from "../img/todolist.png";
import { TfiArrowTopRight } from "react-icons/tfi";
// import '../Style/Responsive.sass'

const Right = () => {
  const [num ,setNum] = React.useState(0);

  React.useEffect(() => {
    const scrollDiv = document.getElementById('main');

    const onScroll = () => {
      if (scrollDiv) {
        setNum(Math.ceil(scrollDiv.scrollTop));
      }
    };

    scrollDiv.addEventListener('scroll', onScroll);

    return () => {
      scrollDiv.removeEventListener('scroll', onScroll);
    };
  }, []);
console.log(num)

  return (
    <div className="right">
      {/* About me Section */}
      {
      num>=500?(<div className="nav-for-mobile">
      <h3>{num>=500 && num<1000?"About-ME":num>=1000?"Project":''}</h3>
    </div>):''      
      }
      <section className="aboutme" >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          omnis, debitis aliquid at quis unde odio obcaecati nesciunt
          exercitationem quod veritatis maiores accusantium nemo deleniti labore
          dolor ex molestias sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio unde
          praesentium explicabo minima asperiores libero exercitationem id sit,
          doloribus totam voluptates. Ad autem qui velit soluta eligendi
          accusantium corrupti?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam
          aperiam iusto pariatur ullam possimus dolorem facilis animi beatae
          natus soluta sapiente rerum, officia doloribus dolorum, neque cumque
          veritatis rem.
        </p>
      </section>

      {/* <h3>Project</h3> */}
      {/* project */}
      <section className="project" id="project">
        <div className="projectBox">
          <a href="https://incomparable-belekoy-f6ffd1.netlify.app/#/">
            <div className="forImg">
              <img src={store} alt="" />
            </div>
            <div className="projectDetails">
              <div className="projectHeading">
                <h1>Store E-Commerce Website</h1>
                <p className="ic">
                  <TfiArrowTopRight></TfiArrowTopRight>
                </p>
              </div>
              <div className="details">
                <p>
                  It is a frontend project. Where I'have created login page
                  interface, landing page and have done routing with react
                  router dom for seam less navigation. This project includes's
                  all the required functionality for the e-commerce website.
                  <a href="https://github.com/Ashimgautam356/Store">Code</a>
                </p>
              </div>
              <div className="techUsed">
                <p>React</p>
                <p>Sass</p>
                <p>Netlify</p>
              </div>
            </div>
          </a>
        </div>
        <div className="projectBox">
          <a href="https://weather-web-app-two.vercel.app/">
            <div className="forImg">
              <img src={weather} alt="" />
            </div>
            <div className="projectDetails">
              <div className="projectHeading">
                <h1>Live Weather</h1>
                <p className="ic">
                  <TfiArrowTopRight></TfiArrowTopRight>
                </p>
              </div>
              <div className="details">
                <p>
                  It is a frontend project. Where I'have created login page
                  interface, landing page and have done routing with react
                  router dom for seam less navigation. This project includes's
                  all the required functionality for the e-commerce website.
                  <a href="https://github.com/Ashimgautam356/weather-web-app">
                    Code
                  </a>
                </p>
              </div>
              <div className="techUsed">
                <p>React</p>
                <p>Sass</p>
                <p>Vercel</p>
              </div>
            </div>
          </a>
        </div>

        <div className="projectBox">
          <a href="https://todolist-roan-kappa.vercel.app/">
            <div className="forImg">
              <img src={todolist} alt="" />
            </div>
            <div className="projectDetails">
              <div className="projectHeading">
                <h1>Todo List</h1>
                <p className="ic">
                  <TfiArrowTopRight></TfiArrowTopRight>
                </p>
              </div>
              <div className="details">
                <p>
                  It is a frontend project. Where I'have created login page
                  interface, landing page and have done routing with react
                  router dom for seam less navigation. This project includes's
                  all the required functionality for the e-commerce website.
                </p>
              </div>
              <div className="techUsed">
                <p>React</p>
                <p>Sass</p>
                <p>Vercel</p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Right;
