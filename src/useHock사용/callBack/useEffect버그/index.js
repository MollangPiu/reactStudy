import { useEffect, useState, useCallback } from "react";

export default function UseEffect버그() {
    const [data, setData] = useState(0);

    const fetchData = useCallback(() => {
        setData(data+1);
    }, []);

    useEffect(() => {
        console.log('data 초기화');
        fetchData();
    }, [data]);  // 🚨 매번 새로운 fetchData 함수가 생성됨!

    return (
        <div>
            <h1>UseEffect버그</h1>
            {data}
        </div>
    );
}
