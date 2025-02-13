import img1 from '../../assets/img/image1.jfif';
import img2 from '../../assets/img/image2.png';


export default function Study() {

    const data = [
        {
            img: img1,
            title: "귀여운 병아리",
            desc: "작고 말랑말랑한 병아리"
        },
        {
            img: img2,
            title: "애교많은 유령",
            desc: "사람을 좋아하는 유령"
        }
    ]

    return (
        <div>
            <h1>6_div 나누기기</h1>
            <h2>JSON으로 데이터를 관리하여, map으로 데이터를 반복하여 표시해보세요.</h2>
            {data.map((item, index) => (
                <ImageDiv key={index} img={item.img} title={item.title} desc={item.desc} />
            ))}
        </div>
    )
}

function ImageDiv(props) {
    return (
            <div style={{
                display: 'flex',
                border: '3px solid red',
            }}>
                <div>
                <img src={props.img} alt="img1" style={{width: '200px',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '1px solid black',
                    }} />
                </div>
                <div>
                    <h1>{props.title}</h1>
                    <span>{props.desc}</span>
                </div>
            </div>
    )
}