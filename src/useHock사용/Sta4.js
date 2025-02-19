import react, {useState} from 'react'

function Study() {
    const [val, setVal] = useState(1);

    let html = [];
    for(let i=1; i < 10; i++) {
        html.push(<tr key={i}><td>{i} * {val}</td>
        <td>{i*val}</td></tr>)
    }

    return (
        <div>
            <input type='text' id="gugu" style={{margin: '15px'}}></input>
            <input type='button' value="결과" onClick={e => {
                const val = document.getElementById('gugu');
                e.preventDefault();
                setVal(val.value);
                val.focus();
                val.value = '';
            }}></input>
            <table className='mainTable'>
                <thead>
                    <tr>
                        <td>구구단</td><td>결과</td>
                    </tr>
                </thead>
                <tbody>
                 {html}
                </tbody>
            </table>
        </div>
    )
}

export default Study;