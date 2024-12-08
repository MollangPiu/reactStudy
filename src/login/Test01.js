import React, { useState, useEffect } from 'react';
import animal1 from './assets/img/animal1.webp';
import animal2 from './assets/img/animal2.jpeg';
import animal3 from './assets/img/img1.webp';
import animal4 from './assets/img/img2.webp';
import backImg from './assets/img/backImg.jpeg';

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
    animal1,
    animal2,
    animal3,
    animal4,
  ];

  const [currentImage1, setCurrentImage1] = useState(images[0]);
  const [currentImage2, setCurrentImage2] = useState(images[1]);

  useEffect(() => {
    const interval1 = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage1(images[randomIndex]);
    }, 4000); // Change image every 4 seconds

    const interval2 = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage2(images[randomIndex]);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    }; // Cleanup on unmount
  }, [images]);

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      width: '100vw',
        backgroundColor: '#eae0d5', // Softer beige for a more classic look
        backgroundImage: `url(${backImg})`, // Subtle wall texture
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
        <div style={{ position: 'relative', margin: '20px' }}>
          <div style={{
            content: '""',
            position: 'absolute',
            top: '-40px',
            left: '50%',
            width: '150%',
            height: '150%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
            transform: 'translateX(-50%)',
            zIndex: 0,
            pointerEvents: 'none',
          }}></div>
          <img
            src={currentImage1}
            alt="Random Art 1"
            style={{
              width: '300px',
              height: '200px',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              border: '5px solid #8b4513', // Frame effect
              transition: 'opacity 1s ease-in-out', // Add transition for smooth effect
              opacity: currentImage1 ? 1 : 0, // Control opacity for fade effect
            }}
          />
        </div>
        <div style={{ position: 'relative', margin: '20px' }}>
          <div style={{
            content: '""',
            position: 'absolute',
            top: '-40px',
            left: '50%',
            width: '150%',
            height: '150%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
            transform: 'translateX(-50%)',
            zIndex: 0,
            pointerEvents: 'none',
          }}></div>
          <img
            src={currentImage2}
            alt="Random Art 2"
            style={{
              width: '300px',
              height: '200px',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              border: '5px solid #8b4513', // Frame effect
              transition: 'opacity 1s ease-in-out', // Add transition for smooth effect
              opacity: currentImage2 ? 1 : 0, // Control opacity for fade effect
            }}
          />
        </div>
      </div>
    </div>
  );
}