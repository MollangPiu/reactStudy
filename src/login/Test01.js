import React from 'react';

export default function BoardList() {
  return (
    <div>
      <h1>게시판리스트</h1>
      <Slideshow />
    </div>
  );
}

function Slideshow() {
  const images = [
    'https://via.placeholder.com/300x200?text=Art+1',
    'https://via.placeholder.com/300x200?text=Art+2',
    'https://via.placeholder.com/300x200?text=Art+3',
    'https://via.placeholder.com/300x200?text=Art+4',
    'https://via.placeholder.com/300x200?text=Art+5',
  ];

  return (
    <div>
      <h2>슬라이드쇼</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Art ${index + 1}`} style={{ width: '300px', height: '200px' }} />
        ))}
      </div>
    </div>
  );
}