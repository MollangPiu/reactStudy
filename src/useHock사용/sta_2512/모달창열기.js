import { useState } from 'react';
import dog from './dog.webp';

function App() {

  const [모달, set모달] = useState('none');

  return (
    <>
    <input 
              type="button"
              value="팝업 열기"
              onClick={e=> {
                set모달('flex');
              }}
              />
      <img src={dog} alt='귀여운 강아지' />

      
      
      {/* 반투명 검정 배경 */}
      <div style={{width: '100vw'
                  , height: '100vh'
                  , backgroundColor: 'rgba(0,0,0,0.4)',
                  position: 'absolute',
                  top: 0,
                  left: 0
                  , display: 모달,
                  justifyContent: 'center',
                  alignItems: 'center'}}
            onClick={e=> {
              set모달('none');
            }}
                  >
          <div style={{backgroundColor: 'white'
                      , width: '300px'
                      ,height: '200px'
                      , borderRadius: '10px'}}>
                  <input type="button"
                        value="팝업 닫기"
                        onClick={e=> {
                          set모달('none');
                        }}
                        />

          </div>

      </div>
    </>
  )
}

export default App;