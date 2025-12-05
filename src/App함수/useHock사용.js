export default function useHock사용(props) {
    return (
        <div>
            <h1>useHock사용</h1>
            <div style={{display: 'flex', gap: '10px'}}>
              {/* 첫 번째 행 */}
              <div style={{width: '400px'}}>
                <h1>State 사용하기</h1>
                <a className='mainDiv' onClick={function(e) {
                  e.preventDefault();
                  props.onPage('./sta1');
                }}>state 사용하기</a><br/>
                <a className='mainDiv' onClick={function(e) {
                  e.preventDefault();
                  props.onPage('./sta2');

                }}>event State값 바꾸기</a><br/>
                <a className='mainDiv' onClick={(e) => {
                  e.preventDefault();
                  props.onPage('./sta3');
                }}>계산기 만들기</a><br/>
                <a className='mainDiv' onClick={(e) => {
                  e.preventDefault();
                  props.onPage('./sta4');
                }}
                >구구단 만들기</a><br/>
                <a className='mainDiv' onClick={e=> {
                  e.preventDefault();
                  props.onPage('./sta5');
                }}>state Obj 활용</a><br/>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('./sta6');
                }}>List 활용하기</a><br/>

                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('./sta7');
                }}>State Effect</a><br/>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('./sta8');
                }}>다크모드</a><br/>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('./sta9');
                }}>Style 정의해보기</a><br/>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('./sta10');
                }}>Style적용-실습용</a><br/>
                <h2>Filter</h2>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('./filter');
                }}>Filter 사용하기</a><br/>

                <h2>Reduce</h2>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('./redu1');
                }}>Reducer 사용하기 1</a><br/>

                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('./redu2');
                }}>Reducer 사용하기 obj</a><br/>

                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('./redu3');
                }}>Reducer 사용하기 3</a><br/>

                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('./redu4');
                }}>Reducer 사용하기 4</a><br/>

                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('./ref1');
                }}>Ref 사용하기</a><br/>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('./ref2');
                }}>Ref 사용하기 2</a><br/>


              </div>
              {/* 두 번째 행 */}
              <div>
              <h1>Effect</h1>
                <a className='mainDiv' onClick={e=> {
                  e.preventDefault();
                  props.onPage('/eft1');
                }}>Effect 기본동작 ( state 전부 )</a><br/>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('/eft2');
                }}>Effect 기본동작 ( sate 일부 )</a><br/>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('/eft3');
                }}>Effect 사용하기</a><br/>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('/eft4');
                }}>Effect 사용하기 4</a><br/>

                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('/effect1');
                }}>1_마운트 사용하기</a><br/>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('/effect2');
                }}>2_변경된값</a><br/>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('/effect3');
                }}>3_언마운트</a><br/>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('/effect4');
                }}>4_state변경</a><br/>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('/effect5');
                }}>5_총액계산하기</a><br/>

                <h2>CallBack</h2>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('/callback1');
                }}>CallBack사용이유</a><br/>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('/callback3');
                }}>useEffect버그</a><br/>

                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('/callback4');
                }}>아이템박스 예시</a><br/>

                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('/callback5');
                }}>아이템박스 예시2</a><br/>

                <h2>Memo</h2>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('/memo1');
                }}>Memo 사용이유 x</a><br/>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('/memo2');
                }}>메모 사용이유 o</a><br/>
                <a className='mainDiv' onClick={e => {
                  e.preventDefault();
                  props.onPage('/memo3');
                }}>useEffect버그</a><br/>
              </div>
            </div>
        



            <div>
              <h2>참고 자료 ( 수업 내용 )</h2>
              <h4>25년 12월</h4>
              <a className="mainDiv" onClick={e => {
                e.preventDefault();
                props.onPage('/2512first')
              }}>input연습</a><br/>
              <a className="mainDiv" onClick={e => {
                e.preventDefault();
                props.onPage('/2512cal')
              }}>계산기</a><br/>
              <a className="mainDiv" onClick={e => {
                e.preventDefault();
                props.onPage('/2512style')
              }}>Style 변경하기</a><br/>
              <a className="mainDiv" onClick={e => {
                e.preventDefault();
                props.onPage('/2512modal')
              }}>모달창 열기</a><br/>
            </div>

      

      
    </div>
    )
}
