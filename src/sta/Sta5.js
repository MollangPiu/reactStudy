import React, {Component, useState} from "react";

function Study() {


    const [ob, setOb] = useState({title: 'apple', color: 'red'});

    return (
        <div>
            제목: {ob.title}<br/>
            <span style={{color: ob.color}}>color: {ob.color}</span>
            <br/>
            <input type="button" value="빨강" onClick={e => {
                e.preventDefault();
                let data = ob;
                data = { title: 'apple', color: 'red'};
                setOb(data);
            }} />
            <input type="button" value="파랑" onClick={e=> {
                e.preventDefault();
                let data = ob;
                data = {title: 'sea', color: 'blue'};
                setOb(data);
            }}></input>
            <input type="button" value="초록" onClick={e=> {
                e.preventDefault();
                let data = ob;
                data = {color: 'green', title: 'mountain'} 
                setOb(data)
            }} />
            <input type="button" value="현재 obj 값" onClick={ e=> {
                e.preventDefault();
                console.log('title ', ob.title);
                console.log('content: ', ob.color);
            }} />
        </div>
    )
}

export default Study;