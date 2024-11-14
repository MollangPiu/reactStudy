import react, {useState} from 'react'


function Study() {

    const [리스트, 변경리스트] = useState(['서울', '경기', '대전', '부산']);
    return (
        <div>
            {리스트}
            <input type="button" value="변경" onClick={e=> {
                let list = [...리스트];
                list[1] = '제주';
                변경리스트(list);
            }}></input>
        </div>
    )
}

export default Study;