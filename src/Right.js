import React from 'react'
import './App.css'
import cloudyDay from './images/cloudyDay.jpeg'
import sunnyDay from './images/sunnyDay.jpeg'


function App(props) {
  console.log("oooooo",props.data.weather)
  const icon = props.data.weather === undefined ? "" :`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`

  const pp = props.data.weather === undefined ? "" :  props.data.weather[0].main
  


  const style = {
    backgroundImage:`url(${pp === "Rain" ? "https://www.animatedimages.org/data/media/148/animated-weather-image-0048.gif" :
     pp === "Clouds" ? "https://www.animatedimages.org/data/media/148/animated-weather-image-0049.gif" :
     pp === "Thunderstorms" ? "https://www.animatedimages.org/data/media/148/animated-weather-image-0004.gif":
     pp === "Clear" ? "https://www.animatedimages.org/data/media/148/animated-weather-image-0079.gif" :
      "https://www.animatedimages.org/data/media/148/animated-weather-image-0012.gif"})`,
    backgroundSize: '100%',
      width: '100%',
      height: '100%'
  }
  return (
      <div className="Right"style={style}>
      
      <div className="left-bottom">


        <div className="temp">{props.data.main === undefined ? null : props.data.main.temp}</div>

        <div className="city-time">
          <div className="city">{props.data.name}</div>
          <div className="time">{props.data.timezone}</div>
        </div>

        <div className="icon-desc">
          <div className="icon">
          <img alt="icon" className="icon" src={icon}/>
          </div>
          <div className="desc">{props.data.weather === undefined ? "" : props.data.weather[0].main}</div>
        </div>



        </div>
        </div>
  );
}



export default App;
