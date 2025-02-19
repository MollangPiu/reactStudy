import { useState } from "react";

function Study() {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div style={
            {backgroundColor: darkMode ? 'black' : 'white',
                color: darkMode ? 'white' : 'black',
                width: '100vw',
                height: '100vh'
            }}>
            <h1>다크모드</h1>

            <input type="button" value="버튼"
            onClick={
                e=> setDarkMode(!darkMode)
            }/>
        </div>
    );
}   

export default Study;