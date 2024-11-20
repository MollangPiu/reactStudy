import animal from '../assets/img/animal.webp'

function Study() {

    return (
        <div>
            <h1>이미지 불러오기</h1>
            <img src={animal} alt='귀여운 동물 사진' />
        </div>
    )
}

export default Study;