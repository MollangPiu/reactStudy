import { useState } from "react";

export default function Study() {
    
    let var1 = 10;
    const [var2, setVar2] = useState(10);


    console.log('study');


    function changeVar() {
        console.log('var up');
        var1 += 1;
        document.getElementById('inpVar').value = var1;
        document.getElementById('pVar').innerHTML = var1;
    }

    function changeState() {
        console.log('state up');
        setVar2(var2 + 1);
    }

    return (
        <div>
            <h1>변수</h1>
            {var1}
            <input type='text' id="inpVar"/>
            <p id="pVar">{var1}</p>
            <input type='button' value='변수 증가' onClick={changeVar} />

            <p>{var2}</p>
            <input type='button' value='state 증가' onClick={changeState} />
        </div>
    )
}