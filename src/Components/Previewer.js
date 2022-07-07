import React from "react";
import '../App.css';

export function Previewer(props){
    return(
          <div>
              <div className="heading_preview">
                <h1>Previewer</h1>
              </div>
              <div className="preview">

                <h1>{props.input}</h1>

                <hr/>

              </div>
              
         </div>
    )
}
