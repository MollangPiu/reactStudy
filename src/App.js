import {Component, useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Json1 from './def/Json1'
import Json2 from './def/Json2' 
import Json3 from './def/Json3' 

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

import Eft1 from './eft/Eft1'


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

            <Route parh={'./eft1'} element={<Eft1 />} />
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
      <a className='mainDiv' onClick={function(e) {
        e.preventDefault();
        props.onPage('/evt1');
      }} >이벤트 처리하기</a><br/>
    </div>
  )
}

/** 메인 화면 */
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
      }}>List 활용하기</a>
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
        props.onPage('./eft1');
      }}>Effect 동작 1</a>
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
      </nav>
      {화면 === 'default' && <Deafult onPage={propMove}/>}
      {화면 === 'main' && <MainAction onPage={propMove}/>}
      {화면 === 'state' && <State onPage={propMove}/>}
      {화면 === 'application' && <Application onPage={propMove}/>}
      {화면 === 'effect' && <Effect onPage={propMove}/>}
      
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
