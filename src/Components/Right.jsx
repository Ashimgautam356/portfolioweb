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
        Greetings! I'm Ashim Gautam, a 20-year-old from Kapilvastu, currently pursuing a BCA degree at Crimson College in Butwal, Nepal. I'm deeply passionate about technology, constantly immersing myself in the latest trends and developments. When I'm not engrossed in code or exploring new software, you'll find me on the cricket field, honing both my technical and athletic skills.
        </p>
        <p>
        Technology isn't just a career path for me; it's a way of life. From programming languages to cutting-edge software, I'm always eager to learn and apply my knowledge to real-world projects. This website serves as a platform to share my experiences, insights, and the exciting projects I'm working on.
        </p>
        <p>
        Beyond the digital realm, cricket is my sanctuary. It's more than just a sport—it's a testament to teamwork, strategy, and the thrill of competition. Whether I'm debugging code or perfecting my cricket technique, I approach each challenge with the same level of dedication and fervor.
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
