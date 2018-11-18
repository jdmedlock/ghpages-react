import React from 'react';

const About = (props) => {

  /**
   * @description Stateless component to generate the About page
   * @returns {HTMLDivElement} About page
   * @memberof About
   */
  return (
    <div>
      <h1>We are all about React</h1>
      <p>
        This where you'd normally find information about the app and team
      </p>
      <img src={props.logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default About;
