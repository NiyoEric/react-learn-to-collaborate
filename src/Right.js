import React from 'react';
import './App.css';
import img from './images/pexels-photo-209831.jpeg';
import six from './images/6.svg'

function App() {
  return (
      <div className="Right"style={style}>
      
      <div className="left-bottom">


        <div className="temp">000</div>

        <div className="city-time">
          <div className="city">Eldoret</div>
          <div className="time">6:56</div>
        </div>

        <div className="icon-desc">
          <div className="icon"><img src={six} alt="icon" style={icon}/></div>
          <div className="desc">rainy</div>
        </div>



        </div>
        </div>
  );
}
const icon = {
  width: '50px',
  height: '50px'
}
const style = {
  backgroundImage:`url(${img})`,
  backgroundSize: '100% 100%',
    width: '100%',
    height: '100%'
}

export default App;
