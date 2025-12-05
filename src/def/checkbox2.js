import { useState } from 'react';

function App() {

  const [hobbyList, setHobbyList] = useState([]);

  const handleHobby = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      // 체크 → 배열에 추가
      setHobbyList([...hobbyList, value]);
    } else {
      // 체크 해제 → 배열에서 제거
      setHobbyList(hobbyList.filter(h => h !== value));
    }
  };

  return (
    <>
      <h3>Check Box (취미)</h3>
      <input type="checkbox" name="hobby" value="운동" onChange={handleHobby} />운동
      <input type="checkbox" name="hobby" value="영화" onChange={handleHobby} />영화
      <input type="checkbox" name="hobby" value="여행" onChange={handleHobby} />여행

      <br /><br />
      <strong>좋아하는 취미:</strong> {hobbyList.join(', ')}
    </>
  );
}

export default App;
