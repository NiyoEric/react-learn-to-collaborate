import React from 'react';
import './App.css';

function App() {
  return (
    <div className="Left">
     <div className="weather-form" style={style_weather_form}>
          Willy's work
     </div>
     <div className="weather-detail" style={style_weather_detail}>
       <p style={weather_detail_header}>Weather Details</p>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
     <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
      <div style={ weather_detail_data }>
        <p>Humidity</p>
        <p>10%</p>
      </div>
     
     </div>
    </div>
  );
}

const style_weather_form={
  height: '15%',
  border: '0.5px solid yellow',
  borderRadius: '12px',
  width: '80%',
  margin: 'auto',
  color: 'white'
};

const style_weather_detail={
  height: '85%',
  width: '80%',
  color: 'white',
  overflowY: 'scroll',
};
const weather_detail_header = {
  textAlign: 'center',
  letterSpacing: '2px',
  margin: '30px 0',
};

const weather_detail_data={
  display: "flex",
  justifyContent: "space-around",
  marginBottom: '15px',
};

export default App;
