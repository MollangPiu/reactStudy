import img1 from '../../assets/img/image1.jfif';
import img2 from '../../assets/img/image2.png';

export default function Study() {
    return (
        <div>
            <h1>5_div나누기</h1>
            <h2>서로 다른 Component에게 이미지와 텍스트를 전달해보세요.</h2>

            <ImageDiv img={img1} title="귀여운 병아리" desc="작고 말랑말랑한 병아리" />
            <ImageDiv img={img2} title="애교많은 유령" desc="사람을 좋아하는 유령"/>
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