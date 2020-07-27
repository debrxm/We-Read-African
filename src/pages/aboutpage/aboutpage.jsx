import React from 'react';
import { Helmet } from 'react-helmet';
import SideBar from '../../components/SideBar/SideBar';
// import sandra from '../../assets/sandra.svg';
import './aboutpage.scss';
const Aboutpage = () => {
  return (
    <div className="aboutpage">
      <Helmet>
        <title>We Read African &mdash; About</title>
        <meta property="og:title" content="We Read African &mdash; About" />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="We Read African" />
        <meta property="og:url" content="https://www.wereadafrican.com/about" />
      </Helmet>
        <div className="left">
          <div className="aboutShowcase">
            <div id='aboutShowcaseText'>
              <h1>CASNADRA <br/> OLUCHI <br/> OBI</h1>
              <p>
              CASNADRA has always been a young and nice fellow. <br/>
              Inspiring  democrats to be better people
              </p>
              <div className="socials">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
            <div id='aboutShowcaseImg'></div>
          </div>
          <div className="profiling">
            <div>
              <h1>background</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores deserunt ipsa sapiente cupiditate nisi 
                architecto impedit at enim recusandae quam?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Mollitia unde corrupti consectetur illum harum quis illo! 
                Tenetur voluptas, nostrum ea quod pariatur
                atque tempore omnis doloribus eveniet. Fuga, nam iure!
              </p>
            </div>
            <div>
              <h1>projects/goals</h1>
              <p>
              unde corrupti consectetur illum harum quis illo! 
                Tenetur voluptas, nostrum ea quod upiditate nisi 
                architecto impedit at enim recusandae quam?
              </p>
              <p>
                Lorem ipsum dolor sr
                atque tempore omnis doloribus eveniet. Fuga, nam iure!
              </p>
            </div>
        </div>
        </div>
      </div>
  );
};

export default Aboutpage;