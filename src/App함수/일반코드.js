export default function Normal({onPage}) {
    return (
        <div>
            <h1>일반코드</h1>

            <a className='mainDiv' onClick={(e) => {
                e.preventDefault();
                onPage('./normalMypage');
            }}>local사용하기</a><br/>
        </div>
    )
}
