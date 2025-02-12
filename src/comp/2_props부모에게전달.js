import React, {useState, useEffect} from "react";


function Study() {

    let [va, setVal] = useState('hello');



    return (
        <div style={{border:"3px solid blue"}}>
            <h1>부모 Component</h1>
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

    
    useEffect(()=> {
        console.log('useEffect');
    }, [props.st]);

    return (
        <div style={{border: "3px solid red"}}>
            <h1>자식 Component</h1>
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