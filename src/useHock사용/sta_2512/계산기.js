import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [변수명1, set변수명1] = useState(초기값)
  //stter ( 값 입력 )
  const [count, setCount] = useState(0);
  let cnt = 0;

  const [value, setValue] = useState("Hello World");
  const [value2, setValue2] = useState("");

  /************************************
   * 계산기2 상태변수 선언
   ************************************/
  const [input1, setInput1] = useState("");        // input1 상태 변수
  const [input2, setInput2] = useState("");        // input2 상태 변수
  const [operator, setOperator] = useState("+");   // operator 상태 변수
  const [계산결과, set계산결과] = useState(0);     // 계산결과 상태 변수

  return (
    <>
      <h3>계산기2</h3>
      <input type="text" onChange={e=>{
        setInput1(e.target.value);
      }} value={input1} />
      <select onChange={e=>{
        setOperator(e.target.value);
      }} value={operator}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="text" onChange={e=>{
        setInput2(e.target.value);
      }} value={input2} />
      <input type="button" value="="
        onClick={
          e=> {
            e.preventDefault();
            let result = 0;
            switch(operator) {
              case "+":
                result = Number(input1) + Number(input2);
                break;
              case "-":
                result = Number(input1) - Number(input2);
                break;
              case "*":
                result = Number(input1) * Number(input2);
                break;
              case "/":
                result = Number(input1) / Number(input2);
                break;
            }
            set계산결과(result);

            //계산 종료 후, 입력창 초기화
            setInput1("");
            setInput2("");
            setOperator("+");
          }
        }
      />
      <span>결과: </span> <span>{계산결과}</span>


      <h3>계산기1</h3>
      <input type="text" id="inp1"/>
      <select id="operator">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="text" id="inp2"/>
      <input type="button" value="="
        onClick={e => {
          e.preventDefault();
          const inp1 = document.getElementById('inp1');
          const inp2 = document.getElementById('inp2');
          console.log(inp1, inp2);
          const operator = document.getElementById('operator');
          let result = 0;
          switch (operator) {
            case "+":
              result = Number(inp1.value) + Number(inp2.value);
              break;
            case "-":
              result = Number(inp1.value) - Number(inp2.value);
              break;
            case "*":
              result = Number(inp1.value) * Number(inp2.value);
              break;
            case "/":
              result = Number(inp1.value) / Number(inp2.value);
              break;
          }
          set계산결과(result);

          //계산 종료 후, 입력창 초기화
          inp1.value = "";
          inp2.value = "";
          operator.value = "+";
        }}
      />
      <span>결과: </span> <span>{계산결과}</span>






      <h3>React Input 사용방법</h3>
      <input type="text" value={value2} onChange={
        e => {
          setValue2(e.target.value);
        }
      }/>{value2}

      <h3> 값 가져오기 예제 </h3>
      <input type="text" id="input1" />
      <input type="button"
            value="값 가져오기" 
            onClick={e => {
              e.preventDefault();
              const input1 = document.getElementById('input1').value;
              setValue(input1);
            }
            }
            />
      <h3>{value}</h3>


      <h1>카운트 예제</h1>
      <span>{count}</span>
      <input type="button"
             value="count 추가"
             onClick={() => {
                      console.log("함수 실행");
                      setCount(count + 1);

                    }}
             /><br/>
      <span id="result">{cnt}</span>
      <input type="button"
             value="cnt 추가"
             onClick={() => {
                      console.log("함수 실행");
                      cnt = cnt + 1;
                      console.log(cnt);
                      document.getElementById("result").innerText = cnt;
                    }}
             />
    </>
  )
}

export default App;