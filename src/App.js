import React, { Component } from 'react'

import './App.css'
import Canvas from './components/Canvas'







class App extends Component {
  render() {
    const sound = new (window.AudioContext || window.webkitAudioContext)()
    return (
      <div className="App">
            <Canvas sound={sound}/>
      </div>
    );
  }
}

export default App;
