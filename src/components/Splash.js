import React from 'react';
import PropTypes from 'prop-types';

const Splash = (props) => {

  /**
   * @description Stateless component to generate the Splash page
   * @returns {HTMLDivElement} Splash page
   * @memberof Splash
   */
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>
        This is our awesome, although unadorned, app splash page. We will make
        this fancy at some point, but at this point it is merely a placeholder.
      </p>
      <img src={props.logo} className="App-logo" alt="logo" />
    </div>
  )
}

Splash.propTypes = {
  logo: PropTypes.object.isRequired
}

export default Splash;
