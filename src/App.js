import {Component, useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Variable from './def/variable'
import Json1 from './def/Json1'
import Json2 from './def/Json2' 

import Img1 from './def/img1'
import Checkbox from './def/checkbox'
import Checkbox2 from './def/checkbox2'
import Radio from './def/Radio'
import SelectBox from './def/SelectBox'
import UseId1 from './def/UseId1'

import Evt1 from './evt/Evt1'

import First from './comp/Comp1'
import Comp2 from './comp/comp기초/0_Component기초'
import Comp3 from './comp/comp기초/1_props사용하기'
import Comp4 from './comp/comp기초/2_props부모에게전달'

import Comp5 from './comp/장바구니/3_장바구니_기본'
import Comp6 from './comp/장바구니/4_장바구니_합계'
import Comp7 from './comp/장바구니/5_장바구니_관리자'
import Comp8 from './comp/장바구니/6_장바구니_관리자_응용'

import Comp9 from './comp/계산기'
import Comp10 from './comp/계산기_함수'
import Comp11 from './comp/다크모드'

import Comp12 from './comp/화면전환'
import Comp13 from './comp/학생성적/0_학생성적_기본'
import Comp14 from './comp/학생성적/1_학생성적_compont분리'
import Comp15 from './comp/학생성적/2_학생성적_입력'

import Comp16 from './comp/영역/1_div나누기'
import Comp17 from './comp/영역/2_div나누기'
import Comp18 from './comp/영역/3_div나누기'
import Comp19 from './comp/영역/4_div나누기'
import Comp20 from './comp/영역/5_div나누기'
import Comp21 from './comp/영역/6_div나누기'
import Comp22 from './comp/회원관리_지역/회원관리_지역' 

import Stat1 from './useHock사용/Sta1'
import Stat2 from './useHock사용/Sta2'
import Stat3 from './useHock사용/Sta3'
import Stat4 from './useHock사용/Sta4'
import Stat5 from './useHock사용/Sta5'
import Stat6 from './useHock사용/Sta6'
import Stat7 from './useHock사용/Sta7'
import Stat8 from './useHock사용/Sta8'
import Stat9 from './useHock사용/Sta9'
import Redu1 from './useHock사용/Reduce1'
import Redu2 from './useHock사용/Reduce2'
import Reduce3 from './useHock사용/Reduce3'
import Reduce4 from './useHock사용/Reduce4'

import Effect1 from './useHock사용/effect/1_마운트사용';
import Effect2 from './useHock사용/effect/2_변경된값';
import Effect3 from './useHock사용/effect/3_언마운트';
import Effect4 from './useHock사용/effect/4_state변경.js';
import Effect5 from './useHock사용/effect/5_총액계산하기';

import CallBack1 from './useHock사용/callBack/콜백사용이유/콜백사용안함.js';
import CallBack2 from './useHock사용/callBack/콜백사용이유/콜백사용.js';
import CallBack3 from './useHock사용/callBack/useEffect버그/index.js';
import CallBack4 from './useHock사용/callBack/아이템박스예시/index.js';
import CallBack5 from './useHock사용/callBack/아이템박스2/index.js';

import Memo1 from './useHock사용/memo/메모사용이유/메모사용안함.js';
import Memo2 from './useHock사용/memo/메모사용이유/메모사용.js';
import Memo3 from './useHock사용/memo/useEffect버그/index.js';

import Fil from './useHock사용/Fil'

import Ref1 from './useHock사용/Ref1'
import Ref2 from './useHock사용/Ref2'

import Ax1 from './ax/ax01'
import Ax2 from './ax/ax02'
import Ax3 from './ax/ax03'

import Login from './login/login'
import Signup from './login/Signup'
import BoardList from './login/BoardList'
import BoardWrite from './login/BoardWrite'
import BoardDetail from './login/BoardDetail'
import BoardEdit from './login/BoardEdit'
import Ctx1 from './contextAp/Main'
import Test01 from './login/Test01'
import MinWow from './login/minwow';

import 아이템박스 from './login/아이템박스';

import LoginJwt from './login/로그인jwt/Login.js';
import JwtStudy from './login/로그인jwt/JWT연습.js';



import Memo01 from './memo/Memo01'
import Memo02 from './memo/Memo02'
import Memo03 from './memo/Memo03'

import Call01 from './memo/Call01'
import Call02 from './memo/Call02'

/*** localStorage 함수 */
import Local1 from './DataSave함수/localStorage/local사용하기';
import Local2 from './DataSave함수/localStorage/local저장하기';
import Local3 from './DataSave함수/localStorage/local출력하기';

import Cookie1 from './DataSave함수/Cookie/1_Cookie사용하기';
import LocalLogin from './DataSave함수/Login활용';
import LoginResult from './DataSave함수/Login결과';

import Redux1 from './DataSave함수/1_redux/1_Redux사용';
import Redux2 from './DataSave함수/2_redux/1_Start';
import Redux3 from './DataSave함수/3_redux/1_Start';

/*** 일반코드 */
import 마이페이지1 from './일반코드/마이페이지1';


/*** App.js 함수 */
import Comp from './App함수/컴포넌트';
import DataSave from './App함수/Data저장하기';
import Normal from './App함수/일반코드';
import UseHock사용 from './App함수/useHock사용';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1
    }
  }
  render() {
    
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>

            <Route path={'/evt1'} element={<Evt1/>} />
            <Route path={'/json1'} element={<Json1 />}></Route>
            <Route path={'/json2'} element={<Json2 />}></Route>
            <Route path={'/img1'} element={<Img1 />} />
            <Route path={'/variable'} element={<Variable />} />
            <Route path={'/radio'} element={<Radio />} />
            <Route path={'/selectbox'} element={<SelectBox />} />
            <Route path={'/checkbox'} element={<Checkbox />} />
            <Route path={'/checkbox2'} element={<Checkbox2 />} />
            <Route path={'/useid1'} element={<UseId1 />} />



            <Route path={"/"} element={<Main />} ></Route>
            <Route path={"/first"} element={<First />} />
            <Route path={"/comp2"} element={<Comp2 />} />
            <Route path={"/comp3"} element={<Comp3 />} />
            <Route path={"/comp4"} element={<Comp4/>} />
            <Route path={"/comp5"} element={<Comp5/>} />
            <Route path={"/comp6"} element={<Comp6/>} />
            <Route path={"/comp7"} element={<Comp7/>} />
            <Route path={"/comp8"} element={<Comp8/>} />
            <Route path={"/comp9"} element={<Comp9/>} />
            <Route path={"/comp10"} element={<Comp10/>} />
            <Route path={"/comp11"} element={<Comp11/>} />
            <Route path={"/comp12"} element={<Comp12/>} />
            <Route path={"/comp13"} element={<Comp13/>} />
            <Route path={"/comp14"} element={<Comp14/>} />
            <Route path={"/comp15"} element={<Comp15/>} />
            <Route path={"/comp16"} element={<Comp16/>} />
            <Route path={"/comp17"} element={<Comp17/>} />
            <Route path={"/comp18"} element={<Comp18/>} />
            <Route path={"/comp19"} element={<Comp19/>} />
            <Route path={"/comp20"} element={<Comp20/>} />
            <Route path={"/comp21"} element={<Comp21/>} />
            <Route path={"/comp22"} element={<Comp22/>} />

            <Route path={"/sta1"} element={<Stat1 />} />
            <Route path={'/sta2'} element={<Stat2 />} />
            <Route path={'/sta3'} element={<Stat3 />} />
            <Route path={'/sta4'} element={<Stat4 />} />
            <Route path={'/sta5'} element={<Stat5 />} />
            <Route path={'/sta6'} element={<Stat6 />} />
            <Route path={'/sta7'} element={<Stat7 />} />
            <Route path={'/sta8'} element={<Stat8 />} />
            <Route path={'/sta9'} element={<Stat9 />} />
            <Route path={'/ref1'} element={<Ref1 />} />
            <Route path={'/ref2'} element={<Ref2 />} />
            <Route path={'/filter'} element={<Fil />} />

            <Route path={'/Redu1'} element={<Redu1 />} />
            <Route path={'/Redu2'} element={<Redu2 />} />
            <Route path={'/Redu3'} element={<Reduce3 />} />
            <Route path={'/Redu4'} element={<Reduce4 />} />

            <Route path={'/effect1'} element={<Effect1 />} />
            <Route path={'/effect2'} element={<Effect2 />} />
            <Route path={'/effect3'} element={<Effect3 />} />
            <Route path={'/effect4'} element={<Effect4 />} />
            <Route path={'/effect5'} element={<Effect5 />} />

            <Route path={'/callback1'} element={<CallBack1 />} />
            <Route path={'/callback2'} element={<CallBack2 />} />
            <Route path={'/callback3'} element={<CallBack3 />} />
            <Route path={'/callback4'} element={<CallBack4 />} />
            <Route path={'/callback5'} element={<CallBack5 />} />

            <Route path={'/memo1'} element={<Memo1 />} />
            <Route path={'/memo2'} element={<Memo2 />} />
            <Route path={'/memo3'} element={<Memo3 />} />

            <Route path={'/ax1'} element={<Ax1/>}/>
            <Route path={'/ax2'} element={<Ax2/>}/>
            <Route path={'/ax3'} element={<Ax3/>}/>

            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/signup'} element={<Signup />} />
            <Route path={'/boardList'} element={<BoardList />} />
            <Route path={'/boardWrite'} element={<BoardWrite />} />
            <Route path={'/boardDetail/:id'} element={<BoardDetail />} />
            <Route path={'/boardEdit/:id'} element={<BoardEdit />} />
            <Route path={'/ctx1'} element={<Ctx1 />} />
            <Route path={'/test01'} element={<Test01 />} />
            <Route path={'/minwow'} element={<MinWow />} />
            <Route path={'/아이템박스'} element={<아이템박스 />} />

            <Route path={'/jwtStudy'} element={<JwtStudy />} />
            <Route path={'/loginJwt'} element={<LoginJwt />} />

            <Route path={'/memo01'} element={<Memo01 />} />
            <Route path={'/memo02'} element={<Memo02 />} />
            <Route path={'/memo03'} element={<Memo03 />} />
            <Route path={'/call01'} element={<Call01 />} />
            <Route path={'/call02'} element={<Call02 />} />

            <Route path={'/local1'} element={<Local1 />} />
            <Route path={'/local2'} element={<Local2 />} />
            <Route path={'/local3'} element={<Local3 />} />

            <Route path={'/cookie1'} element={<Cookie1 />} />
            <Route path={'/localLogin'} element={<LocalLogin />} />
            <Route path={'/localLoginResult'} element={<LoginResult />} />
            <Route path={'/redux1'} element={<Redux1 />} />
            <Route path={'/redux2'} element={<Redux2 />} />
            <Route path={'/redux3'} element={<Redux3 />} />

            <Route path={'/normalMypage'} element={<마이페이지1 />} />

          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

/** React 기본 */
function Deafult(props) {
  
  return(
    <div>
      <h1>기본</h1>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('/variable');
      }}>변수</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('./img1');
      }}>이미지 불러오기</a><br/>

      <a className='mainDiv' onClick={function(e) {
        e.preventDefault();
        props.onPage('/evt1');
      }} >이벤트 처리하기</a><br/>

      <a className='mainDiv' onClick={function(e) {
        e.preventDefault();
        props.onPage('/radio');
      }} >라디오</a><br/>
      <a className='mainDiv' onClick={function(e) {
        e.preventDefault();
        props.onPage('/selectbox');
      }} >selectbox</a><br/>

      
    <a className='mainDiv' onClick={function(e) {
        e.preventDefault();
        props.onPage('/checkbox');
      }} >체크박스</a><br/>
      <a className='mainDiv' onClick={function(e) {
        e.preventDefault();
        props.onPage('/checkbox2');
      }} >체크박스2</a><br/>

      <a className='mainDiv' onClick={function(e) {
        e.preventDefault();
        props.onPage('/useid1');
      }} >useId</a><br/>
    </div>
  )
}

/** 메인 화면, Component */
function MainAction(props) {
  return(
    <div>
      <h1 h1>Main</h1>
      <a className="mainDiv" onClick={function(e) {
        e.preventDefault();
        props.onPage('/first');
      }}>구구단</a><br/>
      



      <a className='mainDiv' onClick={function(e) {
        e.preventDefault();
        props.onPage('./study3')
      }}>props list 넘기기</a><br/>



      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('./comp5');
      }}>장바구치_추천</a>

    </div>
  )
}


/** 응용하기 */
function Application(props) {
  return(
    <div>
      <h1>응용하기</h1>
      <a className='mainDiv' onClick={e=> {
        e.preventDefault();
        props.onPage('/json1')
      }}>Json 불러오기</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('/json2')
      }}>JSON 불러오기 필터처리하기</a><br/>
    </div>
  )
}



function Axi(props) {
  return (
    <div>
      <h1>axios</h1>
      <a className='mainDiv' onClick={e=> {
        e.preventDefault();
        props.onPage('/ax1');
      }}>Axios Get 방식</a><br/>
      <a className='mainDiv' onClick={e=> {
        e.preventDefault();
        props.onPage('/ax2');
      }}>Axios Post 방식</a><br/>
      <a className='mainDiv' onClick={ e => {
        e.preventDefault();
        props.onPage('/ax3');
      }}>Axios api 만들기</a><br/>

    </div>
  )
}

function LoginAction(props) {
  return (
    <div>
      <h1>로그인</h1>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('/login');
      }}>로그인</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('/signup');
      }}>회원가입</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('/boardList');
      }}>게시판리스트</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('/boardWrite');
      }}>게시판 글쓰기</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('/boardDetail');
      }}>게시판 상세</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('/test01');
      }}>test01</a><br/>

      <h1>장바구니</h1>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('/아이템박스');
      }}>아이템박스</a><br/>
      <h1>로그인 JWT 기능</h1>

      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('/jwtStudy');
      }}>JWT 연습</a><br/>
      
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('/loginJwt');
      }}>JWT 로그인</a><br/>
    </div>
  )
}

function Action(props) {
  return (
    <div>
      <h1>Context</h1>
      <a className='mainDiv' onClick={e=> {
        e.preventDefault();
        props.onPage('/ctx1');
      }}>Context 사용하기</a><br/>
      <a className='mainDiv' onClick={e=> {
        e.preventDefault();
        props.onPage('/memo01');
      }}>Memo 사용하기</a><br/>
      <a className='mainDiv' onClick={e=> {
        e.preventDefault();
        props.onPage('/memo02');
      }}>Memo 사용하기 2</a><br/>
      <a className='mainDiv' onClick={e=> {
        e.preventDefault();
        props.onPage('/memo03');
      }}>Memo 사용하기 3</a><br/>

      <a className='mainDiv' onClick={e=> {
        e.preventDefault();
        props.onPage('/call01');
      }}>useCallBack</a><br/>
      <a className='mainDiv' onClick={e=> {
        e.preventDefault();
        props.onPage('/call02');
      }}>useCallBack 2</a><br/>
      <a className='mainDiv' onClick={e=> {
        e.preventDefault();
        props.onPage('/minwow');
      }}>햄식이 회원가입</a><br/>
      <a className='mainDiv' onClick={e=> {
        e.preventDefault();
        props.onPage('/ctx1');
      }}>Context 사용하기</a><br/>
    </div>
  )
}

/*** Main 화면 */
function Main() {

  const movePage = useNavigate();
  function move(url) {
    movePage(url);
  }

  const [화면, 변경화면] = useState(false);
  const propMove = url => {
    movePage(url);
  }

  return(
    <div>
      <nav className='navArea'>
        <div className='btnArea' onClick={e=> {
          변경화면('default');
        }
        }>기본</div>
        <div className='btnArea' onClick={e=> {
          변경화면('main');
        }}>mian</div>
        <div className='btnArea' onClick={e=> {
          변경화면('useHock');
        }}>useHock</div>
        <div className='btnArea' onClick={e=> {
          변경화면('application');
        }}>응용하기</div>
        <div className='btnArea' onClick={e=> {
          변경화면('axios');
        }}>Axios</div>
        <div className='btnArea' onClick={e=> {
          변경화면('login');
        }}>Login</div>
        <div className='btnArea' onClick={e=> {
          변경화면('context');
        }}>기능</div>
        <div className='btnArea' onClick={e=> {
          변경화면('comp');
        }}>Comp 기능</div>
        <div className='btnArea' onClick={e=> {
          변경화면('dataSave');
        }}>DataSave 방법</div>
        <div className='btnArea' onClick={e=> {
          변경화면('normal');
        }}>일반코드</div>
      </nav>
      {화면 === 'default' && <Deafult onPage={propMove}/>}
      {화면 === 'main' && <MainAction onPage={propMove}/>}
      {화면 === 'useHock' && <UseHock사용 onPage={propMove}/>}
      {화면 === 'application' && <Application onPage={propMove}/>}
      {화면 === 'axios' && <Axi onPage={propMove}/>}
      {화면 === 'login' && <LoginAction onPage={propMove}/>}
      {화면 === 'context' && <Action onPage={propMove} />}
      {화면 === 'comp' && <Comp onPage={propMove} />}
      {화면 === 'dataSave' && <DataSave onPage={propMove} />}
      {화면 === 'normal' && <Normal onPage={propMove} />}
    </div>
  )
}

function Header() {
  let movePage = useNavigate();
  return(
  <div>
        <h3><a className="mainDiv" onClick={
          function(e) {
            e.preventDefault();
            movePage('/');
        }.bind(this)}>Home 으로</a></h3>
      </div>
  )
}

export default App;