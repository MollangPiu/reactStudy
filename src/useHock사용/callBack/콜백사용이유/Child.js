import React from "react";

function Child({ handleClick }) {
    console.log("🔄 Child 리렌더링");
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid blue',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px'
        }}>
            <h4 style={{
                marginBottom: '20px'
            }}>자식 영역</h4>
            <button onClick={handleClick}>클릭</button>
        </div>
    );
}

export default React.memo(Child);  // React.memo로 최적화 시도
