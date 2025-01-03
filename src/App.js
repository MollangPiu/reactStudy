import {Component, useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Variable from './def/variable'
import Json1 from './def/Json1'
import Json2 from './def/Json2' 
import Json3 from './def/Json3' 
import Img1 from './def/img1'
import Checkbox from './def/checkbox'
import Checkbox2 from './def/checkbox2'
import Radio from './def/Radio'
import SelectBox from './def/SelectBox'
import UseId1 from './def/UseId1'

import Evt1 from './evt/Evt1'

import First from './comp/Comp1'
import Study from './comp/Comp2'
import Study2 from './comp/Comp3'
import Comp4 from './comp/Comp4'
import Comp5 from './comp/Comp5'

import Stat1 from './sta/Sta1'
import Stat2 from './sta/Sta2'
import Stat3 from './sta/Sta3'
import Stat4 from './sta/Sta4'
import Stat5 from './sta/Sta5'
import Stat6 from './sta/Sta6'
import Stat7 from './sta/Sta7'
import Stat8 from './sta/Sta8'
import Redu1 from './sta/Reduce1'
import Redu2 from './sta/Reduce2'
import Reduce3 from './sta/Reduce3'
import Reduce4 from './sta/Reduce4'

import Fil from './sta/Fil'

import Ref1 from './sta/Ref1'

import Eft1 from './eft/Eft1'
import Eft2 from './eft/Eft2'
import Eft3 from './eft/Eft3'
import Eff4 from './eft/Eft4'

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
import MinWow from './login/minwow'

import Memo01 from './memo/Memo01'
import Memo02 from './memo/Memo02'
import Memo03 from './memo/Memo03'

import Call01 from './memo/Call01'
import Call02 from './memo/Call02'

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
            <Route path={'/json3'} element={<Json3 />}></Route>
            <Route path={'/img1'} element={<Img1 />} />
            <Route path={'/variable'} element={<Variable />} />
            <Route path={'/radio'} element={<Radio />} />
            <Route path={'/selectbox'} element={<SelectBox />} />
            <Route path={'/checkbox'} element={<Checkbox />} />
            <Route path={'/checkbox2'} element={<Checkbox2 />} />
            <Route path={'/useid1'} element={<UseId1 />} />



            <Route path={"/"} element={<Main />} ></Route>
            <Route path={"/first"} element={<First />} />
            <Route path={"/study1"} element={<Study />} />
            <Route path={"/study2"} element={<Study2 />} />
            <Route path={"/comp4"} element={<Comp4/>} />
            <Route path={"/comp5"} element={<Comp5/>} />

            <Route path={"/sta1"} element={<Stat1 />} />
            <Route path={'/sta2'} element={<Stat2 />} />
            <Route path={'/sta3'} element={<Stat3 />} />
            <Route path={'/sta4'} element={<Stat4 />} />
            <Route path={'/sta5'} element={<Stat5 />} />
            <Route path={'/sta6'} element={<Stat6 />} />
            <Route path={'/sta7'} element={<Stat7 />} />
            <Route path={'/sta8'} element={<Stat8 />} />
            <Route path={'/ref1'} element={<Ref1 />} />
            <Route path={'/filter'} element={<Fil />} />

            <Route path={'/Redu1'} element={<Redu1 />} />
            <Route path={'/Redu2'} element={<Redu2 />} />
            <Route path={'/Redu3'} element={<Reduce3 />} />
            <Route path={'/Redu4'} element={<Reduce4 />} />
            <Route path={'/eft1'} element={<Eft1 />} />
            <Route path={'/eft2'} element={<Eft2 />} />
            <Route path={'/eft3'} element={<Eft3 />} />
            <Route path={'/eft4'} element={<Eff4 />} />
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

            <Route path={'/memo1'} element={<Memo01 />} />
            <Route path={'/memo2'} element={<Memo02 />} />
            <Route path={'/memo3'} element={<Memo03 />} />
            <Route path={'/call01'} element={<Call01 />} />
            <Route path={'/call02'} element={<Call02 />} />
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
        props.onPage('/study1');
      }}>study</a><br/>

      <a className='mainDiv' onClick={function(e) {
        e.preventDefault();
        props.onPage('/study2');
      }}>props obj 넘기기</a><br/>

      <a className='mainDiv' onClick={function(e) {
        e.preventDefault();
        props.onPage('./study3')
      }}>props list 넘기기</a><br/>


      <a className='mainDiv' onClick={(e) => {
        e.preventDefault();
        props.onPage('./comp4');
      }}>state와 comp 넘기기</a><br/>
      <a className='mainDiv' onClick={e => {
        e.preventDefault();
        props.onPage('./comp5');
      }}>장바구니 - com + state</a>

    </div>
  )
}

function State(props) {
  return (
    <div>
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
      <a className='mainDiv' onClick={e=> {
        e.preventDefault();
        props.onPage('/json3');
      }}>JSON 필터링 COMPONENT</a><br/>
    </div>
  )
}

/** Effect 기능 */
function Effect(props) {
  return(
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
        props.onPage('/memo1');
      }}>Memo 사용하기</a><br/>
      <a className='mainDiv' onClick={e=> {
        e.preventDefault();
        props.onPage('/memo2');
      }}>Memo 사용하기 2</a><br/>
      <a className='mainDiv' onClick={e=> {
        e.preventDefault();
        props.onPage('/memo3');
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
    </div>
  )
}

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
          변경화면('state');
        }}>State</div>
        <div className='btnArea' onClick={e=> {
          변경화면('application');
        }}>응용하기</div>
        <div className='btnArea' onClick={e=> {
          변경화면('effect');
        }}>Effect</div>
        <div className='btnArea' onClick={e=> {
          변경화면('axios');
        }}>Axios</div>
        <div className='btnArea' onClick={e=> {
          변경화면('login');
        }}>Login</div>
        <div className='btnArea' onClick={e=> {
          변경화면('context');
        }}>기능</div>
      </nav>
      {화면 === 'default' && <Deafult onPage={propMove}/>}
      {화면 === 'main' && <MainAction onPage={propMove}/>}
      {화면 === 'state' && <State onPage={propMove}/>}
      {화면 === 'application' && <Application onPage={propMove}/>}
      {화면 === 'effect' && <Effect onPage={propMove}/>}
      {화면 === 'axios' && <Axi onPage={propMove}/>}
      {화면 === 'login' && <LoginAction onPage={propMove}/>}
      {화면 === 'context' && <Action onPage={propMove} />}
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
