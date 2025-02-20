import React, { useRef, useState, useEffect } from 'react';

function SignUpForm() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const validationsRef = useRef({ username: true, email: true, password: true });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let isValid = true;
        if (name === 'email') {
            isValid = /^\S+@\S+\.\S+$/.test(value);
        } else if (name === 'password') {
            isValid = value.length >= 6;
        } else if (name === 'username') {
            isValid = value.trim() !== '';
        }
        validationsRef.current[name] = isValid;  // Update the validation state in the ref
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(validationsRef.current).every(Boolean)) {
            console.log('Form data:', formData);
            // Submit form data to server or handle it as needed
        } else {
            console.log('Validation errors:', validationsRef.current);
            // Handle validation errors
        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <h1>회원가입 만들기</h1>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUpForm;
