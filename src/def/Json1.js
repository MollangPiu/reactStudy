import stu from '../data/student.json'

function Study() {

    return (
        <div>
            <h1>Default</h1>
            <table className='mainTable'>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>이메일</th>
                        <th>지역</th>
                    </tr>
                </thead>
                <tbody>
                    {stu.student.map(stu => {
                        return (<tr key={stu.id} ><td>{stu.name}</td>
                        <td>{stu.age}</td>
                        <td>{stu.email}</td>
                        <td>{stu.region}</td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Study;