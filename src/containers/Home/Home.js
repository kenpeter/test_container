// react
import React, { PropTypes } from 'react';
// css
import './Home.css';

// after the map, can get from props
const Home = (props) => {
  return (
      <div>
          <div className="Home">Home</div>
          <button onClick={() => {props.homeClickAction('bla')}}>test click</button>
      </div>
  );
};

// attr
Home.propTypes = {

};

export default Home;
