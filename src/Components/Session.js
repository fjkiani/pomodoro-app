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
           <section>
            <h4>How long do you want to focus for?</h4>
            <button onClick = {decreaseSession}>Down</button>
            <p>{props.session}</p>  
           <button onClick = {increaseSession}>Up</button>
          </section> 
        </div>
    )
}
