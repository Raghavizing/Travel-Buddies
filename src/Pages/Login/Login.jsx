import React, { useState } from 'react'
import "./Login.css"
function Login() {
    const [formType, setFormType] = useState("login");
    const [validation, setValidation] = useState({
        nameVal: false,
        passwordVal: false,
        passMatchval: false,
        emailVal: false

    })
    const [contact, updateContact] = useState({
        name: "",
        email: "",
        pass: "",
        repass: ""

    })

    function handleChange() {
        setFormType((formType === "login") ? "sign up" : "login")
    }
    function handleFormChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        updateContact({
            ...contact,
            [name]: value
        })

    }
    function submitForm(event) {
        let isValid = true;
        if (formType === "sign up") {
            if (contact.name.length == 0) {
                validation.nameVal = true;
                isValid = false;
            }
            if (contact.name === "") {
                validation.nameVal = true;
            }
            if (contact.pass != contact.repass) {
                validation.passMatchval = true;
            }

        }
        if(isValid){
        updateContact({
            name: "",
            email: "",
            pass: "",
            repass: ""
        })
        setValidation({
            nameVal: false,
            passwordVal: false,
            passMatchval: false,
            emailVal: false
        })
        event.preventDefault();
    }
    }
    return (
        <div style={{ height: "100vh" }}>
            <div className='w-25 mx-auto mt-5'>
                <div className='heading-text text-center h3 my-2 text-capitalize'>{formType}</div>
                <form className="mb-3">
                    <div className="mb-3" hidden={formType === "login" ? true : false}>
                        <label htmlFor="name" className="form-label d-flex justify-content-between">Full Name <p className='validationMessage my-auto' hidden={!validation.nameVal}>* Name cannot be empty.</p></label>
                        <input name="name" type="name" className="form-control" id="name" value={contact.name} onChange={handleFormChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label d-flex justify-content-between">Email address <p className='validationMessage my-auto' hidden={!validation.emailVal}>* Invalid email.</p></label>
                        <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" value={contact.email} onChange={handleFormChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label d-flex justify-content-between">Password <p className='validationMessage my-auto' hidden={!validation.passval}>* Password must be greater than 8 characters and must not contain special characters.</p></label>
                        <input name="pass" type="password" className="form-control" id="pass" value={contact.pass} onChange={handleFormChange} />
                    </div>
                    <div className="mb-3" hidden={formType === "login" ? true : false}>
                        <label htmlFor="repass" className="form-label d-flex justify-content-between">Repeat Password <p className='validationMessage my-auto' hidden={!validation.passMatchval}>* passwords donot match.</p></label>
                        <input name="repass" type="password" className="form-control" id="repass" value={contact.repass} onChange={handleFormChange} />
                    </div>
                    <div className='text-center'><button className="btn btn-primary w-50 mt-4 text-capitalize" onClick={submitForm}>{formType}</button></div>
                    <p className='text-center mt-2'>{(formType === "login") ? "Not a member?" : "Already have an account?"} <a className="text-primary text-underline" onClick={handleChange}>{(formType === "login") ? "Sign Up" : "Login"}</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login