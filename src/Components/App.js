import React from 'react';
import Break from "./Break.js"
import Session from "./Session.js"
import Time from "./Time.js"
import './App.css'
import Instructions from './Instructions.js';
import logo from "../ComponentStyle/logo.jpg"



class App extends React.Component {

  constructor () {
    super () 

    this.state = {
      breakLength : 5,
      sessionLength : 25,
      timerLength : 25,
      isPlay: false
    }
    this.onIncreaseBreak = this.onIncreaseBreak.bind(this)
    this.onDecreaseBreak = this.onDecreaseBreak.bind(this)

    this.onIncreaseSession = this.onIncreaseSession.bind(this)
    this.onDecreaseSession = this.onDecreaseSession.bind(this)
    this.toggleInterval = this.toggleInterval.bind(this)
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this)
    this.onResetTimer = this.onResetTimer.bind(this)
 
  }

  //functions that will increase or decrease break counter

  onIncreaseBreak () {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    })
  }

  onDecreaseBreak () {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      }
    })
  }

  //functions that will increase or decrease session counter and change the state
   onIncreaseSession () {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerLength : prevState.sessionLength + 1
      }
    })
  }

  onDecreaseSession () {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerLength : prevState.sessionLength - 1
      }
    })
  }

  // update the timer 
    onUpdateTimerMinute () {
     this.setState((prevState) => {
       return {
        timerLength: prevState.timerLength - 1
       }
     })
   }

   toggleInterval (isSession) {
     if(isSession) {
      this.setState ({
        timeMinute: this.state.sessionLength
       })
      } 
     else {
       this.setState ({
         timerMinute : this.state.breakLength,
         breakLength : this.state.breakLength

       })
     }
   }

   onResetTimer () {
     this.setState({
       timerMinute: this.state.sessionLength
     })
   }


  render() {
    return ( 
        <div>
        <div className="logo"><img src={logo}></img></div>
        {/* <h1>By FJK</h1> */}
        <hr></hr>
        <Session 
        isPlay={this.state.isPlay}
        session = {this.state.sessionLength}
         increaseSession = {this.onIncreaseSession}
         decreaseSession = {this.onDecreaseSession}
        />
        <Break 
          break= {this.state.breakLength} 
          increaseBreak = {this.onIncreaseBreak} 
          decreaseBreak = {this.onDecreaseBreak} 
          />
        <Time 
          time = {this.state.timerLength}
          // if the timer has stopped, break timer will be running 
          breakLength = {this.state.breakLength}
          updateTimerMinute = {this.onUpdateTimerMinute}
          toggleInterval = {this.toggleInterval}
          resetTimer = {this.onResetTimer}
        />
        <Instructions/>
        </div>
    )
  }
}

export default App 