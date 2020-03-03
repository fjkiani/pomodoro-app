import React, { Component } from 'react'

export default class Time extends Component {
    constructor () {
        super ()
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        }
        this.play = this.play.bind(this)
        this.decreaseTimer = this.decreaseTimer.bind(this)
    }

    play() {
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
            //reduce timer 1 by one if seconds are zero
            this.props.updateTimerMinute ()
            this.setState ({
                timerSecond: 59
             })
            break;
          
          default:
              this.setState ((prevState) => {
                  return {
                      timerSecond: prevState.timerSecond -2
                  }
              })
            
        }
    }


    render() {
        return (
            <section>
                {/* conditional session timer, if the timer is in session, display session time otherwise display break session */}
                <section>
                    <h4>{this.state.isSession === true? "Session" : "Break"}</h4>
                    <span>{this.props.time}</span>
                    <span>:</span>
                    <span>{this.state.timerSecond === 0 
                        ? "00" 
                        : this.state.timerMinute < 10 
                        ? "0" + this.state.timerSecond : this.state.timerSecond}
                     </span>
                </section>
                        <section className="time-actions">
                        <button onClick = {this.play}>Play</button>
                        <button onClick = {this.stop}>Stop</button>
                        <button onClick = {this.reset}>Reset</button>
                        
                        </section>
            </section>
        )  
    }
}

