import React,{useState} from "react";
import '../App.css';
import { Previewer } from "./Previewer";
//import marked from "marked";

export function Editor(){
    const [input,setInput]=useState("Welcome to my react Markdown Previewer!")
    function display(event){
        setInput(event.target.value);      
    }
    return(
        <div>
            <div className="heading">
                <h1>Editor</h1>
            </div>
            <textarea className="editor" onChange={display} value={input}>{input}</textarea>
            <Previewer input={input}/>
            
        </div>
    )
}
