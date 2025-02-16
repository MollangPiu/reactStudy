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

            <h1>Cookie 사용하기</h1>
            <a className='mainDiv' onClick={(e) => {
                e.preventDefault();
                props.onPage('./cookie1');
            }}>쿠키 사용하기</a><br/>

            <h1>Data 응용하기</h1>
            <a className='mainDiv' onClick={(e) => {
                e.preventDefault();
                props.onPage('./localLogin');
            }}>Login 활용</a><br/>

            <h1>Redux 사용하기</h1>
            <a className='mainDiv' onClick={(e) => {
                e.preventDefault();
                props.onPage('./redux1');
            }}>Redux 사용하기</a><br/>
        </div>
    )
}
