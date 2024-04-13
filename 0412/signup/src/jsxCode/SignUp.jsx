import React, { useState } from 'react';

function SignUp() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = (e) => {
        if (password == passwordConfirm && id != '' && password != ''){
            window.alert(`회원가입 성공! ${id} ${password} ${passwordConfirm}`);
        }else{
            window.alert(`제대로 작성해주세요.`);
        }
    };

    const inputStyle = {
        display: "block",
        margin : "5% 35% 5% 35%",
        width : "30%",
        height : "2em",
        borderRadius : "20px 20px 20px 20px",
        border : "0.5px solid black",
        textAlign : "center",
        fontSize : "larger",
    }
    const formStyle = {
        padding : "5% 0% 5% 0%",
        borderRadius : "20px 20px 20px 20px",
        backgroundColor : "aliceBlue",
        margin : "10% 10% 10% 10%"
    }

    return (
        <div className="App">
            <h1>회원가입 페이지</h1>
            <form style={formStyle} onSubmit={handleSubmit}>
                <input style={inputStyle}
                    name="id"
                    value={id}
                    placeholder="아이디"
                    onChange={(e) => setId(e.target.value)}
                />
                <input style={inputStyle}
                    type="password"
                    name="password"
                    value={password}
                    placeholder="비밀번호"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input style={inputStyle}
                    type="password"
                    name="passwordConfirm"
                    value={passwordConfirm}
                    placeholder="비밀번호 확인"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                <div>
                    {password !== passwordConfirm && <p>비밀번호가 일치하지 않습니다.</p>}
                </div>
                <input style={inputStyle} type="submit" />
            </form>
        </div>
    );
}

export default SignUp;