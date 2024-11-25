import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext'
import Header from './Header'
import Footer from './Footer'

function Main() {
    //const data = useContext(ThemeContext);

    const [da, setDa] = useState({name:'홍길동'});

    return (
        <div>
            {/* <ThemeContext.Provider value={{da, setDa}}> */}
            <ThemeContext.Provider value={{da, setDa}}>
                <Header />
            
                <MainContent/>
                <Footer />
            </ThemeContext.Provider>
        </div>
    )
}

function MainContent() {
    const {da, setDa} = useContext(ThemeContext);
    
    const [name, setName] = useState('');

    return (
        <div style={{border:'3px solid green',
            height:'500px'
        }}>
            <h1>MainContent</h1>
            <p>Name: {da.name}</p>
            <input type='text'
                value={name}
                onChange={e => {
                    console.log(e.target.value);
                    setName(e.target.value); // 
                }}
            />
            <input type='button' value='변경' onClick={e=> {
                setDa({name:name});
            }} />
        </div>
    )
}

export default Main