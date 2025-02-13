
function study() {

    let obj = {title: 'JavaScript', content: 'JavaScript는 1990년대 당시에 xml에서...'}

    return (
        <div>
            <Second data={obj} />
        </div>
    )
}

function Second(props) {
    console.log(props.data);
    let pro = props.data;
    return (
        <div>
            <h1>second 영역</h1>
            {pro.title}<br/>
            {pro.content}
        </div>
    )
}

export default study;