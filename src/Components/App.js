import React from 'react';
import Break from "./Break.js"
import Session from "./Session.js"
import Time from "./Time.js"
import './App.css'


class App extends React.Component {

  constructor () {
    super () 

    this.state = {
      breakLength : 5,
      sessionLength : 25,
      timerLength : 25
    }
    this.onIncreaseBreak = this.onIncreaseBreak.bind(this)
    this.onDecreaseBreak = this.onDecreaseBreak.bind(this)

    this.onIncreaseSession = this.onIncreaseSession.bind(this)
    this.onDecreaseSession = this.onDecreaseSession.bind(this)
    this.onToggleInterval = this.onToggleInterval.bind(this)
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this)
 
  }

  //functions that will increase or decrease break counter

  onIncreaseBreak () {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 2
      }
    })
  }

  onDecreaseBreak () {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 2
      }
    })
  }

  //functions that will increase or decrease session counter and change the state
   onIncreaseSession () {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 2,
        timerLength : prevState.sessionLength + 2
      }
    })
  }

  onDecreaseSession () {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 2,
        timerLength : prevState.sessionLength - 2
      }
    })
  }

  // update the timer 
   onUpdateTimerMinute () {
     this.setState((prevState) => {
       return {
         timerMinute: prevState.timerMinute - 1
       }
     })
   }

   onToggleInterval (isSession) {
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


  render() {
    return ( 
      <div>
        <h2>Get S#hit Done Clock</h2>
        <Session 
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
          onToggleInterval = {this.onToggleInterval}
        
        
        />
      </div>
    )
  }
}

export default App 