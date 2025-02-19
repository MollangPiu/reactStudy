import axios from "axios";

function Study() {

    
    function api() {
        axios.get('http://localhost:8080/api/con')
        .then(res=> {
            console.log(res);
        })
    }

    function api2() {
        axios.get('http://localhost:8080/api/area/list')
        .then(res => {
            console.log(res);
        })
    }


    function api3() {
        const params = {id: 1};
        console.log(params);
        axios.get('http://localhost:8080/api/area/byId', { params })
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
return (
    <div>
        <h1>Axios Get</h1>
        <input type='button' value='axios 연결확인' onClick={api} /><br/>
        <input type='button' value='axios 지역코드 불러오기' onClick={api2} /><br/>
        <input type='button' value='axios 실행3 - id 1 보내기' onClick={api3} /><br/>
    </div>
)
}

export default Study;