/** localStorage 함수 */
export default function LocalStorage(props) {
    return (
        <div>
            <h1>LocalStorage</h1>
            <a className='mainDiv' onClick={(e) => {
                e.preventDefault();
                props.onPage('./local1');
            }}>localStorage사용하기</a><br/>
        </div>
    )
}
