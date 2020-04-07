import React, { Component } from 'react'

export default class Time extends Component {
    constructor () {
        super ()
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: ''
        }
        this.playTimer = this.playTimer.bind(this)
        this.decreaseTimer = this.decreaseTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    playTimer() {
        //start timer
        //update every second
        //calls decrease timer 
        let intervalId = setInterval (this.decreaseTimer, 1000)
        this.setState ({
            intervalId : intervalId
        })
     }

     decreaseTimer () {
        switch (this.state.timerSecond) {
            case 0:
            if (this.props.timerLength === 0) {
                if (this.state.isSession) {
                    this.setState({
                        isSession : false
                    })
                    this.props.toggleInterval(this.state.isSession)
                } else {
                    this.setState({
                        isSession : true
                    });
                    this.props.toggleInterval
                    (this.state.isSession)

                }
            }
            //reduce timer 1 by one if seconds are zero
            this.props.updateTimerMinute ()
            this.setState ({
                timerSecond: 59
             })
            break; 

          default:
              this.setState ((prevState) => {
                  return {
                      timerSecond: prevState.timerSecond -1
                  }
              })
            
        }
    }

    stopTimer () {
        clearInterval(this.state.intervalId)
    }

    resetTimer () {
        clearInterval(this.state.intervalId)
        this.props.resetTimer();
        this.setState({
            timerSecond: 0
        })


    }


    render() {
        return (
            <section>
                {/* conditional session timer, if the timer is in session, display session time otherwise display break session */}
                <section id="session-container">
                    <h4>{this.state.isSession === true? "Session" : "Break"}</h4>
                    <span>{this.props.time}</span>
                    <span>:</span>
                    <span>{this.state.timerSecond === 0 
                        ? "00" 
                        : this.state.timerSecond < 10 
                        ? "0" + this.state.timerSecond 
                        : this.state.timerSecond}
                     </span>
                </section>
                        <section className="actions-container">
                        <button onClick = {this.playTimer}>Play</button>
                        <button onClick = {this.stopTimer}>Stop</button>
                        <button onClick = {this.resetTimer}>Reset</button>
                        
                        </section>
            </section>
        )  
    }
}

