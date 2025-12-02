import { useState } from "react";
import './Sta9.css';

export default function Study() {

    const [스타일1, set스타일1] = useState({backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '10px'});

    const [스타일2, set스타일2] = useState({backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '10px'});

    const [class1, setClass1] = useState('style1');

    const [class2, setClass2] = useState('back1 font1');

    const [class3, setClass3] = useState('back1');
    const [class4, setClass4] = useState('font1');
    
    return (
        <div>
            <h1>Style 적용해보기</h1>
            <div style={{backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '10px'}}>
                <span>Style 적용해보기</span>
            </div>
            <h3>일반 json 변경</h3>
            <input type="button" value="스타일1 변경" onClick={() => {
                set스타일1({backgroundColor: 'blue'});
            }} />
            <div style={스타일1}>
                <span>Style 적용해보기</span>
            </div>
            Style을 변경 할 때, json값을 전체 덮어쓰기 하는 방식으로 변경합니다.
            <h3> style 일부 값 변경</h3>
            <input type="button" value="스타일2 변경" onClick={() => {
                set스타일2({...스타일2, backgroundColor: 'blue'});
            }} />
            <div style={스타일2}>
                <span>Style 적용해보기</span>
            </div>
            Style을 변경 할 때, json값을 일부 값만 변경하는 방식으로 변경합니다.
            <br/>
            <br/>
            <h1>Class로 적용해보기</h1>
            <div className="style2">
                <span>Style 적용해보기</span>
            </div>
            <h3>Class 변경하기</h3>
            <input type="button" value="스타일2 변경" onClick={() => {
                setClass1('style2');
            }} />
            <div className={class1}>
                <span>Style 적용해보기</span>
            </div>

            <h3>Class 여러개 적용하기</h3>
            <div className="back1 font1">
                <span>Style 적용해보기</span>
            </div>

            <h3>Class 여러개 적용하기</h3>
            <input type="button" value="스타일3 변경" onClick={() => {
                setClass2('back2 font2');
            }} />
            <div className={class2}>
                <span>Style 적용해보기</span>
            </div>
            <h3>Class 여러개 적용하기</h3>
            <input type="button" value="스타일4 변경" onClick={() => {
                setClass3('back2');
                setClass4('font2');
            }} />
            <div className={`${class3} ${class4}`}>
                <span>Style 적용해보기</span>
            </div>
        </div>
    );
}