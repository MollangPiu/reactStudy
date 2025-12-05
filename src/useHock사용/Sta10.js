import { useState } from 'react';

function Study() {

  // display ON/OFF
  const [show, setShow] = useState(true);

  // 배경색
  const [bgColor, setBgColor] = useState('white');

  // 글자색 (radio로 선택)
  const [textColor, setTextColor] = useState('black');

  // 텍스트 내용
  const [text, setText] = useState('');


  return (
    <>

      {/* ▶ display 토글 */}
      <h3>Display 토글</h3>
      <input 
        type="button" 
        value="보이기/숨기기" 
        onClick={() => setShow(!show)} 
      />

      <div
        style={{
          display: show ? 'block' : 'none',
          border: '1px solid gray',
          padding: '10px',
          marginTop: '10px',
          width: '250px'
        }}
      >
        이 박스가 보였다/숨겨졌다 합니다.
      </div>



      {/* ▶ 배경색 변경 */}
      <h3>배경색 변경</h3>
      <select onChange={(e) => setBgColor(e.target.value)}>
        <option value="white">흰색</option>
        <option value="yellow">노랑</option>
        <option value="lightblue">하늘색</option>
        <option value="pink">핑크</option>
        <option value="lightgreen">연두색</option>
      </select>

      <div
        style={{
          backgroundColor: bgColor,
          padding: '10px',
          marginTop: '10px',
          width: '250px'
        }}
      >
        배경색이 바뀝니다.
      </div>



      {/* ▶ 글자색 변경 (Radio) */}
      <h3>글자색 변경</h3>
      <input 
        type="radio" 
        name="fontColor" 
        value="red" 
        onChange={(e) => setTextColor(e.target.value)}
      /> 빨강

      <input 
        type="radio" 
        name="fontColor" 
        value="blue" 
        onChange={(e) => setTextColor(e.target.value)}
      /> 파랑

      <input 
        type="radio" 
        name="fontColor" 
        value="green" 
        onChange={(e) => setTextColor(e.target.value)}
      /> 초록

      <input 
        type="radio" 
        name="fontColor" 
        value="black" 
        defaultChecked
        onChange={(e) => setTextColor(e.target.value)}
      /> 검정



      {/* ▶ 텍스트 내용 입력 */}
      <h3>텍스트 내용 입력</h3>
      <input 
        type="text" 
        placeholder="내용을 입력하세요" 
        onChange={(e) => setText(e.target.value)}
      />

      <div
        style={{
          marginTop: '10px',
          color: textColor,
          fontWeight: 'bold'
        }}
      >
        {text}
      </div>

    </>
  );
}

export default Study;
