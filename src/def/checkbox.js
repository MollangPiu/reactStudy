import { useState } from "react";

export default function Checkbox() {

    const [isDark, setIsDark] = useState(false);
    return (
        <div style={{backgroundColor: isDark ? 'black' : 'white', color: isDark ? 'white' : 'black'}}>
            <h1>CheckBox Control하기</h1>
            <input type='checkbox' checked={isDark} onChange={e=> {
                setIsDark(e.target.checked);
            }}/>
        </div>
    )
}