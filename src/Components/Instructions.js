import React from 'react'
import ComponentStyle from "../ComponentStyle/index.css"

export default function Instructions() {
    return (
        <div className= "instructions">
        <hr></hr>
            <h1>What is the Pomodoro Technique?</h1>
            <p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, followed a by short break</p>
            <h3> How to get started</h3>
            <p> (1) Choose a task to be accomplished</p>
            <p> (2) Hit Play and the timer will start </p>
            <p> (3) You are on the clock now. Get to work   </p>
            <p> (4) Once the timer finishes, take a short break (5 minutes is OK)</p>
            <p> (5) After a 5 minute break, repeat and hit play on session again</p>
            <p> (5) Every 4 Pomodoros take a longer break (20 mins is OK)</p>
            <hr></hr>
            <p> Interested in downloading a chrome extension? Click <a href="https://chrome.google.com/webstore/detail/marinara-pomodoro%C2%AE-assist/lojgmehidjdhhbmpjfamhpkpodfcodef?hl=en" target="_blank">here</a> </p>
            <p> Interested in downloading the iOS app? Click <a href="https://apps.apple.com/us/app/focus-keeper-time-management/id867374917" target="_blank">here</a> </p>
            <hr></hr><br></br>
            <p className="footer"> This React application is built with love by Fahad Kiani. It is designed to introduce you to the Pomodoro technique</p>
            </div>
    )
}
