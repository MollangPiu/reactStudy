import React from "react";
import './MinWow.css'

function MinWow() {
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
                    <div className="ham-area">
                      <input type="text" name="id" id="id" autoComplete="off" required />
                      {/* React에서는 htmlFor 속성을 사용해야 합니다. */}
                      <label htmlFor="id">ID 입력</label>
                      <div className="btn-idCheck">
                        <div className="sunFlowerImg">&nbsp;</div>
                        <span>중복 확인</span>
                      </div>
                    </div>

                    {/* PASSWORD 입력 */}
                    <div className="ham-area">
                      <input
                        type="password"
                        name="pw1"
                        id="pw2"
                        autoComplete="off"
                        required
                      />
                      <label htmlFor="pw2">PASSWORD 입력</label>
                    </div>

                    {/* PASSWORD 입력(재입력 또는 다른 용도?) */}
                    <div className="ham-area">
                      <input
                        type="password"
                        name="pw1"
                        id="pw3"
                        autoComplete="off"
                        required
                      />
                      <label htmlFor="pw3">PASSWORD 입력</label>
                    </div>

                    {/* NAME 입력 */}
                    <div className="ham-area">
                      <input type="text" name="name" id="name" autoComplete="off" required />
                      <label htmlFor="name">NAME 입력</label>
                    </div>

                    {/* NickName 입력 */}
                    <div className="ham-area nicknameArea">
                      <input
                        type="text"
                        name="NickName"
                        id="NickName"
                        autoComplete="off"
                        required
                      />
                      <label htmlFor="NickName">NickName 입력</label>
                    </div>

                    {/* 생년월일 */}
                    <span className="spanYear">생년 월일</span>
                    <div
                      className="ham-area"
                      style={{ width: "100%", marginTop: "5px" }}
                    >
                      <select className="sel">
                        <option>1999</option>
                        <option>1998</option>
                        <option>1997</option>
                      </select>
                      <span>년</span>

                      <select>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                      <span>월</span>

                      <select>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                      <span>일</span>
                    </div>

                    {/* 하단 버튼 */}
                    <div className="btnArea">
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
    </>
  );
}

export default MinWow;
