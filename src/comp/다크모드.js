import {useState} from 'react';

export default function Study() {

    const [다크모드, set다크모드] = useState(false);

    return (
        <div>
            <input type="button" value="다크모드 변경"
                onClick={() => set다크모드(!다크모드)}
            />
            <Second data={다크모드}/>
        </div>
    )
}

function Second({data}) {
    return (
        <div style={{
            width: '100%',
            height: '600px',
            border: '1px solid red',
            backgroundColor: data ? 'black': 'white',
            color: data ? 'white': 'black'
        }}>
            <h1>Hello World</h1>
        </div>
    )
}