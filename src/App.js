import React, { Component } from 'react';

import {connect} from 'react-redux';
import { increment,sliderChange } from './actions'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.increment = this.increment.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
  }

  increment(amount,team){
    this.props.dispatch(increment(amount,team));
  }

  handleSlider(e){
    this.props.dispatch(sliderChange(parseInt(e.target.value,10)));
  }
  render() {
    const playingStyle = (this.props.playing === 'Red') ? {backgroundColor: "#940000"} : {backgroundColor: "#5075BE"};
    return (
      <div className="main-container">
        <div className="scoreboard">
          <div className="teamRed-Score">           
            <h3>Team Red</h3>
            <div className="score">{this.props.red}</div>
          </div>
          <div className="teamBlue-Score">
            <h3>Team Blue</h3>
            <div className="score">{this.props.blue}</div>
          </div>
        </div>
        <div className="slide-container">
          <p>{this.props.playing}'s Turn. Select points to add.</p>
          <input name="slider" style={playingStyle} onChange={this.handleSlider}type="range" min={1} max={50} value={this.props.slider} step={1} className="slider"/>
          <label htmlFor="slider">{this.props.slider}</label>
          <button onClick={()=>{this.increment(this.props.slider,this.props.playing)}}>Add</button>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blue: state.blue,
    red: state.red,
    slider: state.slider,
    playing: state.playing
  }
}

export default connect(mapStateToProps)(App);
