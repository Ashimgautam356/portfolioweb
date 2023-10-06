import React from 'react'
import '../Style/Left.sass'
import { LuFacebook,LuGithub,LuLinkedin } from "react-icons/lu";
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
                <p>I build accessible, inclusive products and digital experiences for the web.</p>
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