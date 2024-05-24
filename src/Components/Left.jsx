import React from 'react'
import '../Style/Left.sass'
import { LuFacebook,LuGithub,LuLinkedin } from "react-icons/lu";
import { FaHtml5, FaCss3Alt, FaReact ,FaNodeJs  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss , SiExpress,SiMysql } from "react-icons/si";

const Left = () => {
    const [scrollnum, setScrollnum] = React.useState(0);

    React.useEffect(() => {
      const scrollDiv = document.getElementById('scrollDiv');
  
      const onScroll = () => {
        if (scrollDiv) {
          setScrollnum(Math.ceil(scrollDiv.scrollTop));
        }
      };
  
      scrollDiv.addEventListener('scroll', onScroll);
  
      return () => {
        scrollDiv.removeEventListener('scroll', onScroll);
      };
    }, []); 
    // console.log(scrollnum)
  return (
    <div className='left'>
        <div className='left-UpperSection'>
            <div className="textContent">
                <h1>Ashim Gautam</h1>
                <h3>Frontend Developer</h3>
                <p>I build accessible, inclusive products and digital experiences for the web. <a href="https://sg.docworkspace.com/d/sICjR85zvAd_XwLIG"> My Resume</a></p>
            </div>

            <div className='my-stacks'>
              <p className='tech'>< FaHtml5 /></p>
              <p className='tech'><FaCss3Alt></FaCss3Alt></p>
              <p className='tech'><SiTailwindcss /></p>
              <p className='tech'><IoLogoJavascript /></p>
              <p className='tech'><FaReact /></p>
              <p className='tech'><FaNodeJs /></p>
              <p className='tech'><SiExpress /></p>
              <p className='tech'><SiMysql /></p>
            </div>

            <div className='left-navLinks'>
                <ul>
                    <li className={scrollnum<400?'li-active':''}><a href="/"className={scrollnum<400?"active":''}>About</a></li>
                    <li className={scrollnum>400?'li-active':''} ><a href="#project" className={scrollnum>400?'li-active':''}>Projects</a></li>
                </ul>
            </div>
        </div>
        <div className='left_lowerSection'>
            <h3  className='iconLink'><a href="https://www.facebook.com/ashim.gautam.1000"><LuFacebook className='svg'></LuFacebook></a></h3>
            <h3 className='iconLink'><a href="https://github.com/Ashimgautam356"><LuGithub></LuGithub></a></h3>
            <h3 className='iconLink'><a href="https://www.linkedin.com/in/ashim-gautam-83289925a/"><LuLinkedin></LuLinkedin></a></h3>
        </div>
    </div>
  )
}

export default Left
