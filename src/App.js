import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Left from './Left';
import Right from './Right';
import './index.css'


class App extends Component{
  constructor(props){
      super(props);
      this.state = {
          data : []
      }
  }


  componentDidMount(){

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=dodoma&APPID=7f6a0fe6f25df85a9176f605964e2fb0`)
    .then( (response) => {
      console.log(response.data)
      this.setState({ 
        data: response.data
      })
    })
    .catch( (error) => {
      console.log(error);
    })
    .finally(() => {
    });
      }
      
  render(){
      console.log(this.state)
      return(
        <div className="App">
        <Right />
        <Left />
      </div>
      )
  }
}

export default App