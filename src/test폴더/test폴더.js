import { useState } from 'react';

export default function Test() {

    


    const [회원아이디, set회원아이디] = useState('');
    const [회원비밀번호, set회원비밀번호] = useState('');
    const [회원이름, set회원이름] = useState('');
    const [회원이메일, set회원이메일] = useState('');
    const [회원전화번호, set회원전화번호] = useState('');
    const [회원주소, set회원주소] = useState('');
    const [회원가입일, set회원가입일] = useState('');
    const [회원상태, set회원상태] = useState('');
    const [회원권한, set회원권한] = useState('');
    const [회원포인트, set회원포인트] = useState('');
    const [회원쿠폰, set회원쿠폰] = useState('');
    
    const member = {
        memberId: 회원아이디,
        memberPw: 회원비밀번호,
        memberName: 회원이름,
        memberEmail: 회원이메일,
        memberPhone: 회원전화번호,
        memberAddress: 회원주소,
        memberJoinDate: 회원가입일,
    };

    
    return (
        <div>
            <h1>Test</h1>
            {member.memberId}
            {member.memberPw}
            {member.memberName}
            {member.memberEmail}
            {member.memberPhone}
            {member.memberAddress}
            {member.memberJoinDate}
        </div>
    )
}
