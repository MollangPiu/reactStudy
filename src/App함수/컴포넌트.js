/** Comp 기능 구현하기 */
export default function Comp(props) {
  return (
    <div>
    <h1>Comp기초</h1>
      <a className='mainDiv' onClick={function(e) {
        e.preventDefault();
        props.onPage('/comp2');
      }}>0_Component 기초</a><br/>
      <a className='mainDiv' onClick={function(e) {
        e.preventDefault();
        props.onPage('/comp3');
      }}>1_props사용하기기</a><br/>
      <a className='mainDiv' onClick={(e) => {
        e.preventDefault();
        props.onPage('./comp4');
      }}>2_부모에게 전달</a><br/>
      <h1>영역</h1>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('./comp16');
      }}>1_div나누기</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('./comp17');
      }}>2_div나누기</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('./comp18');
      }}>3_div나누기</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('./comp19');
      }}>4_div나누기</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('./comp20');
      }}>5_div나누기</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('./comp21');
      }}>6_div나누기</a><br/>
      

      <h1>회원관리_지역</h1>
      <a className='mainDiv' onClick={(e) => {
        e.preventDefault();
        props.onPage('./comp22');
      }}>회원관리_지역</a><br/>

      <h1>학생 성적</h1>
      <a className='mainDiv' onClick={(e) => {
        e.preventDefault();
        props.onPage('./comp13');
      }}>학생 성적_기본</a><br/>
      <a className='mainDiv' onClick={(e) => {
        e.preventDefault();
        props.onPage('./comp14');
      }}>학생 성적_컴포넌트 분리</a><br/>
      <a className='mainDiv' onClick={(e) => {
        e.preventDefault();
        props.onPage('./comp15');
      }}>학생 성적_입력</a><br/>

      <h1>장바구니</h1>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('./comp5');
      }}>장바구니_기본</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('./comp6');
      }}>장바구니_합계</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('./comp7');
      }}>장바구니_관리자</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('./comp8');
      }}>장바구니_관리자_응용</a><br/>

<h1>활용</h1>
      <a className='mainDiv' onClick={(e) => {
        e.preventDefault();
        props.onPage('./comp11');
      }}>다크모드</a><br/>
      <a className='mainDiv' onClick={(e) => {
        e.preventDefault();
        props.onPage('./comp12');
      }}>화면전환</a><br/>
      <a className='mainDiv' onClick={(e) => {
        e.preventDefault();
        props.onPage('./comp9');
      }}>계산기</a><br/>
      <a className='mainDiv' onClick={(e) => {
        e.preventDefault();
        props.onPage('./comp10');
      }}>계산기_함수</a><br/>
    </div>
  )
}