import react, {useState} from 'react'

function Study() {

    const [텍스트, 변경텍스트] = useState('');

    return (
        <div>
            <input type="text" value={텍스트} onChange={e=> {
                console.log(e.target.value);
                변경텍스트(e.target.value);
            }}></input>
            <input type="button" value="show Name" onClick={e=> {
                console.log(텍스트);
            }}></input>
        </div>
    )
}

export default Study;