import img1 from '../../assets/img/image1.jfif';
import img2 from '../../assets/img/image2.png';

export default function Study() {
    return (
        <div>
            <h1>3_div나누기</h1>
            <h2>아래의 빨간색 영역을 Component로 나누어 보세요.</h2>
            <div style={{
                display: 'flex',
                border: '3px solid red',
            }}>
                <div>
                    <img src={img1} alt="img1" />
                </div>
                <div>
                    <h1>귀여운 병아리</h1>
                    <span>작고 말랑말랑한 병아리</span>
                </div>
            </div>
        </div>
    )
}
