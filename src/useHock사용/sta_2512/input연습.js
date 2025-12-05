import { useState } from 'react'

function App() {

  const [텍스트, set텍스트] = useState('');
  let cnt = 1;

  return (
    <>
    {/** select: selectBox, checkbox, radio - 사용자가 선택한 것에 따라 결과가 정의 */}
    {/** 사용자는 선택할 뿐, 그 선택에 대한 결과는 개발자가 결정  */}
    <select>
      <option value="1">사과</option>
      <option value="2">바나나</option>
      <option value="3">멜론</option>
    </select>

    {/** input: text, number, email, phone - 사용자 입력한 값이 곧 결과 */}
      <input type="text" id="input1"/>
      {/** Button: button, submit, reset - 사용자 입력하고 상관 x */}
      <input
            type="button"
            value="버튼" 
            onClick={() => {
              const input = document.getElementById('input1');
              set텍스트(input.value);
            }}
            />
            {텍스트}
    </>
  )
}

export default App
