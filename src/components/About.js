import React from 'react';
import PropTypes from 'prop-types';

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
        This where you would normally find information about the app and team.
      </p>
      <img src={props.logo} className="App-logo" alt="logo" />
    </div>
  )
}

About.propTypes = {
  logo: PropTypes.string.isRequired
}

export default About;
