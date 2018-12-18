// react
import React, { PropTypes } from 'react';
// css
import './Home.css';

// after the map, can get from props
const Home = (props) => {

    console.log('-- home --');
    console.log(props);

    return (
      <div>
          <h3>output: {props.homeClick}</h3>
          <div className="Home">Home</div>
          <button onClick={() => {props.homeClickAction(1)}}>test click</button>
      </div>
    );
};

// attr
Home.propTypes = {

};

export default Home;
