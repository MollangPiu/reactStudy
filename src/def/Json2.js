import stu from '../data/student.json'

function Study() {
    const legion = '서울';
    const stuList = stu.student.filter(s => s.region === legion);
    console.log(stuList);

    return (
        <div>
            <h1>Default2</h1>
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
                    {stuList.map(stu => {
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