import React from "react";
import Markdown from "marked-react";
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
              
             {/* {<div className="preview" dangerouslySetInnerHTML={{__html:`Type here...`}} /> } */}
             {/* <Markdown>{props.input}</Markdown> */}
         </div>
    )
}
