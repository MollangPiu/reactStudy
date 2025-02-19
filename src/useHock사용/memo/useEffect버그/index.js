import { useState, useEffect } from "react";

export default function ObjectReferenceIssue() {
    const [count, setCount] = useState(0);

    const obj = { value: count };  // 🚨 새로운 객체가 계속 생성됨

    useEffect(() => {
        console.log("🔄 useEffect 실행! (의존성: obj)");
    }, [obj]);  // 🚨 obj가 변경된 것으로 인식됨!

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>증가</button>    
            <button onClick={() => setCount(count)}>그대로</button>  {/* count 값이 동일한데 useEffect가 실행됨 */}
        </div>
    );
}
