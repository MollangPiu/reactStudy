/** localStorage 함수 */
export default function LocalStorage(props) {
    return (
        <div>
            <h1>LocalStorage</h1>
            <a className='mainDiv' onClick={(e) => {
                e.preventDefault();
                props.onPage('./local1');
            }}>local사용하기</a><br/>
            <a className='mainDiv' onClick={(e) => {
                e.preventDefault();
                props.onPage('./local2');
            }}>local저장하기</a><br/>
            <a className='mainDiv' onClick={(e) => {
                e.preventDefault();
                props.onPage('./local3');
            }}>local출력하기</a><br/>
        </div>
    )
}
