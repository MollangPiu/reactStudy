import axios from "axios";

function Study() {

    function api() {
        axios.post('http://localhost:8080/api/member/list')
        .then(res=> {
            console.log(res);
        })
    }


    function api2() {
        const params = {id: 'super'};
        console.log(params);
        axios.post('http://localhost:8080/api/member/find', 'super', {
            headers: {
                'Content-Type': 'text/plain'  // 텍스트 데이터를 전송함을 명시
            }
        })
        .then(res => {
            console.log(res);
        })
    }
return (
    <div>
        <h1>Axios Post</h1>
        <input type='button' value='axios post - 회원 리스트' onClick={api} /><br/>
        <input type='button' value='axios 실행3 - id 1 보내기' onClick={api2} /><br/>
    </div>
)
}

export default Study;