import React from 'react';
import img from './images/pexels-photo-1591447.jpeg';

function App() {
  return (
    <div className="Right">
      <img src={img} alt="img" style={style}/>
    </div>
  );
}

const style = {
    width: '100%',
    height: '100%'
}

export default App;
