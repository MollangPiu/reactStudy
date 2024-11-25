import { useState } from "react";

export default function Memo02() {

    const [isDark, setIsDark] = useState(false);
    return (
        <div style={{backgroundColor: isDark ? 'black' : 'white', color: isDark ? 'white' : 'black'}}>
            <h1>Memo02</h1>
            <input type='checkbox' checked={isDark} onChange={e=> {
                setIsDark(e.target.checked);
            }}/>
        </div>
    )
}