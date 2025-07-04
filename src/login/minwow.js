import React, { useState, useRef } from "react";
import './MinWow.css'
import { use } from "react";

function MinWow() {

    const [idCheck, setIdCheck] = useState(false);              //ID 유효성 검사
    const [pwCheck, setPwCheck] = useState(false);            //PW 유효성 검사
    const [pw2Check, setPw2Check] = useState(false);          //PW 확인 유효성 검사
    const [nameCheck, setNameCheck] = useState(false);        //NAME 유효성 검사
    const [nickNameCheck, setNickNameCheck] = useState(false); //NickName 유효성 검사
    const [birthCheck, setBirthCheck] = useState(false);     //생년월일 유효성 검사 ( 사용 안 하는 중)
    const [idUnqiueCheck, setIdUnqiueCheck] = useState(false); //ID 중복 확인

    const [buffer, setBuffer] = useState(false); //버퍼 영역

    const idRef = useRef(null);             //ID 입력 참조
    const pwRef = useRef(null);            //PW 입력 참조
    const pw2Ref = useRef(null);          //PW 확인 입력 참조
    const nameRef = useRef(null);         //NAME 입력 참조
    const nickNameRef = useRef(null);     //NickName 입력 참조
    const birthRef = useRef(null);        //생년월일 입력 참조

    const [idValue, setIdValue] = useState('abcd');
    const [pwValue, setPwValue] = useState(null);
    const [nameValue, setNameValue] = useState(null);
    const [nickNameValue, setNickNameValue] = useState(null);
    const [gender, setGender] = useState('male');
    const [birthY, setBirthY] = useState('1999');
    const [birthM, setBirthM] = useState('01');
    const [birthD, setBirthD] = useState('01');
    const [submitAction, setSubmitAction] = useState(false);

    //Id 유효성 검사
    const joinSubmit = () => {
        console.log('회원가입 버튼 클릭');
        console.log(idRef.current.value);

        //ID 유효성 검사
        if(idRef.current.value === '') {
            
            setIdCheck(true);
            thread();
            idRef.current.focus();
            return;
        }

        //PW 유효성 검사
        if(pwRef.current.value === '') {
            setPwCheck(true);
            thread();
            pwRef.current.focus();
            return;
        }
        if(pw2Ref.current.value === '') {
            setPw2Check(true);
            thread();
            pw2Ref.current.focus();
            return;
        }

        //NAME 유효성 검사
        if(nameRef.current.value === '') {
            setNameCheck(true);
            thread();
            nameRef.current.focus();
            return;
        }

        //NickName 유효성 검사
        if(nickNameRef.current.value === '') {
            setNickNameCheck(true);
            thread();
            nickNameRef.current.focus();
            return;
        }

        //Birth 유효성 검사
        if(birthRef.current.value === '') {
            setBirthCheck(true);
            thread();
            birthRef.current.focus();
            return;
        }

        setBuffer(true);
        setTimeout(() => {
            setBuffer(false);
            setSubmitAction(true);
        }, 1000);

    }

    //유효성 검사 CSS Warning 효과 삭제하기
    const thread = () => {
        setTimeout(() => {
            setIdCheck(false);
            setPwCheck(false);
            setNameCheck(false);
            setNickNameCheck(false);
            setBirthCheck(false);
        }, 1000);
    }

    //ID 중복 확인
    const btnIdCheck = () => {
        console.log('ID 중복 확인 버튼 클릭');
        setIdUnqiueCheck(true);
    }



  return (
    <>

      <main>
        <div className="join-container">
          <div className="join_area">
            <div className="img_ham"></div>
            <div className="joinForm-container">
              <div>
                {/* onSubmit 등 이벤트 핸들링을 원하시면 form 태그에 추가하시면 됩니다. */}
                <form>
                  <div className="joinForm">
                    {/* ID 입력 */}
                    <div className={`ham-area`}>
                      <input type="text" name="id" id="id" ref={idRef} autoComplete="off" required onChange={e=>setIdValue(e.target.value)}/>
                      {/* React에서는 htmlFor 속성을 사용해야 합니다. */}
                      <label htmlFor="id" className={`${idCheck ? 'warning': ''} subTitle` } >ID 입력</label>
                      <div className="btn-idCheck" onClick={btnIdCheck}>
                        <div className="sunFlowerImg">&nbsp;</div>
                        <span className={idUnqiueCheck ? 'font-color-green' : 'font-color-red'}>중복 확인</span>
                      </div>
                      <div className={idUnqiueCheck ? 'seedImg' : ''}
                      style={{display: idUnqiueCheck ? 'block' : 'none'}}
                      >&nbsp;</div>
                    </div>

                    {/* PASSWORD 입력 */}
                    <div className="ham-area">
                      <input
                        type="password"
                        name="pw1"
                        id="pw1"
                        autoComplete="off"
                        ref={pwRef}
                        onChange={e=>setPwValue(e.target.value)}
                        required
                      />
                      <label htmlFor="pw1" className={`${pwCheck ? 'warning': ''} subTitle`}>PASSWORD 입력</label>
                    </div>

                    {/* PASSWORD 입력(재입력 또는 다른 용도?) */}
                    <div className="ham-area">
                      <input
                        type="password"
                        name="pw2"
                        id="p23"
                        autoComplete="off"
                        ref={pw2Ref}
                        required
                      />
                      <label htmlFor="pw2" className={`${pw2Check ? 'warning': ''} subTitle`}>PASSWORD 확인</label>
                    </div>

                    {/* NAME 입력 */}
                    <div className="ham-area">
                      <input
                      type="text"
                      name="name"
                      id="name"
                      ref={nameRef}
                      autoComplete="off"
                      onChange={e=>setNameValue(e.target.value)}
                      required />
                      <label htmlFor="name" className={`${nameCheck ? 'warning': ''} subTitle`}>NAME 입력</label>
                    </div>

                    {/* NickName 입력 */}
                    <div className="ham-area nicknameArea">
                      <input
                        type="text"
                        name="NickName"
                        id="NickName"
                        ref={nickNameRef}
                        autoComplete="off"
                        onChange={e=>setNickNameValue(e.target.value)}
                        required
                      />
                      <label htmlFor="NickName" className={`${nickNameCheck ? 'warning': ''} subTitle`}>NickName 입력</label>
                    </div>

                    <div className="ham-area">
                      <fieldset>
                        <label className="gender-label">
                          <input type="radio" name="gender" value="male" checked
                          onChange={e=> setGender(e.target.value)}/>
                          <span>남자</span>
                        </label>

                        <label className="gender-label">
                          <input type="radio" name="gender" value="female"
                          onChange={e=> setGender(e.target.value)} />
                          <span>여자</span>
                        </label>
                      </fieldset>
                    </div>

                    {/* 생년월일 */}
                    <span className="spanYear">생년 월일</span>
                    <div
                      className="ham-area"
                      style={{ width: "100%", marginTop: "5px" }}
                    >
                      <select className="sel" ref={birthRef}
                      onChange={e=>setBirthY(e.target.value)}>
                        <option>1999</option>
                        <option>1998</option>
                        <option>1997</option>
                      </select>
                      <span>년</span>

                      <select ref={birthRef}
                      onChange={e=>setBirthM(e.target.value)}>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                      <span>월</span>

                      <select ref={birthRef}
                      onChange={e=>setBirthD(e.target.value)}>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                      <span>일</span>
                    </div>

                    {/* 하단 버튼 */}
                    <div className="btnArea" onClick={joinSubmit}>
                      <div>
                        <div className="submitBtn">&nbsp;</div>
                        <span>회원 가입</span>
                      </div>
                      <div>
                        <div className="returnBtn">&nbsp;</div>
                        <span>이전 으로</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 버퍼 영역 */}
      <div className={buffer ? 'buffer-outSide' : '' }>
        <div className={buffer ? 'buffer-inSide': ''}></div>
      </div>

      <div style={{display: submitAction ? 'block' : 'none',
        width: '100vw',
        height: '110vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        top: '0px',
        left: '0px'
      }}>
        <div style={{
          width: '600px',
          height: '270px',
          backgroundColor: 'white',
          borderRadius: '15px',
          position: 'absolute',
          top: '30%',
          left: '40%',
          paddingTop: '10px',
          paddingRight: '10px',
          paddingLeft: '60px'
        }}>
          <div style={{
            position: 'absolute',
            right: '10px',
            padding: '10px',
            backgroundColor: '#E52020',
            borderRadius: '15px',
            fontSize: '15px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
            onClick={() => setSubmitAction(false)}
          >
            닫기
          </div>
            <span style={{
              fontSize: '30px',
              fontWeight: 'bold',
              color: 'green',
              marginRight: '10px'
            }}>ID</span>:
            <span style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginLeft: '10px'
            }}>{idValue}</span><br/>
            <span style={{
              fontSize: '30px',
              fontWeight: 'bold',
              color: 'green',
              marginRight: '10px'
            }}>PW</span>:
            <span style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginLeft: '10px'
            }}>{pwValue}</span><br/>
            <span style={{
              fontSize: '30px',
              fontWeight: 'bold',
              color: 'green',
              marginRight: '10px'
            }}>NAME</span>:
            <span style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginLeft: '10px'
            }}>{nameValue}</span><br/>
            <span style={{
              fontSize: '30px',
              fontWeight: 'bold',
              color: 'green',
              marginRight: '10px'
            }}>NICKNAME</span>:
            <span style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginLeft: '10px'
            }}>{nickNameValue}</span><br/>
            <span style={{
              fontSize: '30px',
              fontWeight: 'bold',
              color: 'green',
              marginRight: '10px'
            }}>GENDER</span>:
            <span style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginLeft: '10px'
            }}>{gender === 'male'? '남자': '여자'}</span><br/>
            <span style={{
              fontSize: '30px',
              fontWeight: 'bold',
              color: 'green',
              marginRight: '10px'
            }}>Birth</span>:
            <span style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginLeft: '10px'
            }}>{birthY}
            <span style={{
              fontSize: '15px',
              fontWeight: 'bold'
            }}>년</span> {birthM}<span style={{
              fontSize: '15px',
              fontWeight: 'bold'
            }}>월</span> {birthD}<span style={{
              fontSize: '15px',
              fontWeight: 'bold'
            }}>일</span> </span><br/>
        </div>

      </div>
    </>
  );
}

export default MinWow;
