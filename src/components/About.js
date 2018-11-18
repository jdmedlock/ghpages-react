import React from 'react';

import TopBar from './TopBar';

const About = (props) => {

  /**
   * @description Stateless component to generate the About page
   * @returns {HTMLDivElement} About page
   * @memberof About
   */
  return (
    <div>
      <TopBar />
      <h1>We are all about React</h1>
      <p>
        This where you'd normally find information about the app and team
      </p>
    </div>
  )
}

export default About;
