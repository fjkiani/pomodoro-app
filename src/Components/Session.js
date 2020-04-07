import React from 'react'

export default function Session(props) {

    function decreaseSession () {
        if (props.session === 1) {
            return
        }

        props.decreaseSession();
     
    }


    function increaseSession () {
        if (props.session === 27 ) {
            return
        }
        props.increaseSession();
    }



    return (
        <div>
           <section className="userInterface">
            <h4>How long do you want to focus for?</h4>
           
             <button onClick = {increaseSession}>Heavy</button>
             <p className="propsStyle">{props.session}:minutes</p>  
            <button onClick = {decreaseSession}>Light</button>
          </section> 
        </div>
    )
}
