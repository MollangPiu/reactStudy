export default function Study() {
    return (
        <div>
            <h1>2_div나누기</h1>
            <FirstDiv/>
            <SecondDiv/>
            <ThirdDiv/>
        </div>
    )
}

function FirstDiv() {
    return (
        <div style={{
            width: '100%',
            height: '100px',
            backgroundColor: 'red',
            color: 'white',
        }}>
            <h1>FirstDiv</h1>
        </div>
    )
}

function SecondDiv() {
    return (
        <div style={{
            width: '50%',
            height: '100px',
            backgroundColor: 'blue',
            color: 'white',
            display: 'inline-block',
        }}>
            <h1>SecondDiv</h1>
        </div>
    )
}

function ThirdDiv() {
    return (
        <div style={{
            width: '50%',
            height: '100px',
            backgroundColor: 'green',
            color: 'white',
            display: 'inline-block',
        }}>
            <h1>ThirdDiv</h1>
        </div>
    )
}
