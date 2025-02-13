import img1 from '../../assets/img/image1.jfif';
import img2 from '../../assets/img/image2.png';

export default function Study() {
    return (
        <div>
            <h1>4_div나누기</h1>
            <h2>Component를 연속으로 사용해 보세요.</h2>

            <ImageDiv/>
            <ImageDiv/>
        </div>
    )
}

function ImageDiv() {
    return (
            <div style={{
                display: 'flex',
                border: '3px solid red',
            }}>
                <div>
                    <img src={img1} alt="img1" style={{width: '200px',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '1px solid black',
                    }} />
                </div>
                <div>
                    <h1>귀여운 병아리</h1>
                    <span>작고 말랑말랑한 병아리</span>
                </div>
            </div>
    )
}