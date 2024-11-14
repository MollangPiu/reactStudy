import React, {useState} from "react";


function Study() {

    let [va, setVal] = useState('hello');



    return (
        <div style={{border:"3px solid blue"}}>
            <Second  st={va} onEveChk={ val=> {
                console.log(val);
                setVal(val);
            }} />
            {va}
        </div>
    )
}

function Second(props) {
    console.log(props);
    return (
        <div style={{border: "3px solid red"}}>
            <span>{props.st}</span>
            <input type="type=" id="inp"></input>
            <input type='button' value="state 변경" onClick={e=> {
                e.preventDefault();
                let inp = document.getElementById('inp');
                props.onEveChk(inp.value);
            }}></input>
        </div>
    )
}

export default Study;