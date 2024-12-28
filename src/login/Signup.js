import React, { useEffect, useState } from 'react';
// import './Signup.css'; // Import the CSS file
import { findId, areaAll, regist } from './axios'

function Signup() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [region, setRegion] = useState('');
    const [gender, setGender] = useState('');
    const [isIdAvailable, setIsIdAvailable] = useState(null);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [areaList, setAreaList] = useState([]); // area 리스트
    const checkIdDuplication = () => {

        findId(id).then(res => {
            console.log(res.data.data);
            setIsIdAvailable(res.data.data);
        })

        // ID 중복 확인 로직을 여기에 작성
        setIsIdAvailable(true); // or false based on your logic
    };

    const onSignup = () => {
        // 회원가입 로직을 여기에 추가
        console.log('회원가입 정보:', { id, name, password, passwordConfirm, birthdate, email, region, gender });
        const obj = {
            userId: id,
            userName: name,
            userPw: password,
            birth: birthdate,
            email: email,
            region: region,
            gender: gender
        }
        regist(obj).then(res => {
            console.log(res.data.data);
        })
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        // Check for letters and numbers
        const hasLetters = /[a-zA-Z]/.test(value);
        const hasNumbers = /[0-9]/.test(value);
        const isLengthValid = value.length <= 15;

        // Calculate password strength
        let strength = 0;
        if (hasLetters) strength += 33;
        if (hasNumbers) strength += 33;
        if (isLengthValid) strength += 34;

        setPasswordStrength(strength);

        // Set error message
        if (!hasLetters) {
            setPasswordError('비밀번호에 영어가 포함되어야 합니다.');
        } else if (!hasNumbers) {
            setPasswordError('비밀번호에 숫자가 포함되어야 합니다.');
        } else if (!isLengthValid) {
            setPasswordError('비밀번호는 15자리 이하이어야 합니다.');
        } else {
            setPasswordError('');
        }
    };

    const handlePasswordConfirmChange = (e) => {
        const value = e.target.value;
        setPasswordConfirm(value);

        if (password !== value) {
            setConfirmPasswordError('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        } else {
            setConfirmPasswordError('');
        }
    };

    useEffect(() => {
        areaAll().then(res => {
            setAreaList(res.data.data);
        })
    }, []);

    return (
        <div className="signup-container">
            <h2>회원가입</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="user_id">아이디:</label>
                    <input
                        type="text"
                        id="user_id"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        required
                    />
                    <button type="button" className="id-check" onClick={checkIdDuplication}>ID 확인</button>
                    <div id="id-message" className="message" style={{ display: isIdAvailable !== null ? 'block' : 'none', color: isIdAvailable === 'Y' ? 'green' : 'red' }}>
                        {isIdAvailable === 'Y' ? '사용 가능한 아이디입니다.' : '이미 사용 중인 아이디입니다.'}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="password">비밀번호:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: `${passwordStrength}%`, backgroundColor: passwordStrength === 100 ? 'green' : 'red' }}>
                            {passwordStrength === 100 ? 'Strong' : 'Weak'}
                        </div>
                    </div>
                    {passwordError && <div className="message">{passwordError}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="confirm_password">비밀번호 확인:</label>
                    <input
                        type="password"
                        id="confirm_password"
                        value={passwordConfirm}
                        onChange={handlePasswordConfirmChange}
                        required
                    />
                    {confirmPasswordError && <div className="message">{confirmPasswordError}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="name">이름:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="birth_date">생년월일:</label>
                    <input
                        type="date"
                        id="birth_date"
                        value={birthdate}
                        onChange={e => setBirthdate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">이메일:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="region">지역:</label>
                    <select
                        id="region"
                        value={region}
                        onChange={e => {setRegion(e.target.value); console.log(e.target.value)}}
                    >
                        <option value="">지역 선택</option>
                        {areaList.map(area => (
                            <option value={area.idx}>{area.areaName}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>성별:</label>
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="M"
                        onChange={e => setGender(e.target.value)}
                    />
                    <label htmlFor="male">남자</label>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="F"
                        onChange={e => setGender(e.target.value)}
                    />
                    <label htmlFor="female">여자</label>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button type="button" className="submit-button" onClick={onSignup}>가입하기</button>
                    <button type="button" className="back-button" onClick={() => window.location.href='/login'}>돌아가기</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;