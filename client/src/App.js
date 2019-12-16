import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList'
import axios from 'axios'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players').then(res=>{
      this.setState({
        data: res.data
      })
    })
  }
  render(){
    return (
      <div>
        <PlayerList players={this.state.data} />
      </div>
    )
  }
}


export default App;
