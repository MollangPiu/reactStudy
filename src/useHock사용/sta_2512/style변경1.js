import { useState } from 'react';

export default function Study() {
    const [배경색, set배경색] = useState('blue');

  return (
    <>
      {배경색}
      <input type="button" value="빨강색" onClick={() => {
        set배경색('red');
      }} />
      <input type="button" value="파랑색" onClick={() => {
        set배경색('blue');
      }} />
      <input type="button" value="노랑색" onClick={() => {
        set배경색('yellow');
      }} />
      <input type="button" value="초록색" onClick={() => {
        set배경색('green');
      }} />
      <div style={{
        width: '500px',
        height: '500px',
        backgroundColor: 배경색
      }}>

      </div>
    </>
  )
}