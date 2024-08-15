import React, { useState, useEffect } from 'react'
import "./Login.css"
import AOS from 'aos'
function Login() {
    useEffect(() => {
        AOS.init();
    }, [])
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const [validation, setValidation] = useState({
        passVal: {
            isValid: true,
            message: ""
        },
        emailVal: {
            isValid: true,
            message: ""
        },

    })
    const [contact, updateContact] = useState({
        email: "",
        pass: "",

    })
    function resetValidation() {
        setValidation({
            passVal: {
                isValid: true,
                message: ""
            },
            emailVal: {
                isValid: true,
                message: ""
            },
        })

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
        resetValidation();
        let isValid = true;
        if (contact.pass.length === 0) {
            setValidation({
                ...validation,
                passVal: {
                    isValid: false,
                    message: "Field cannot be empty."
                }
            })
            isValid = false;
        }
        else if (contact.pass.length < 8) {
            setValidation({
                ...validation,
                passVal: {
                    isValid: false,
                    message: "Password too short."
                }
            })
            isValid = false;
        }
        if (contact.email.length === 0) {
            setValidation({
                ...validation,
                emailVal: {
                    isValid: false,
                    message: "Field cannot be empty."
                }
            })
            isValid = false;
        }
        else if (!contact.email.match(isValidEmail)) {
            setValidation({
                ...validation,
                emailVal: {
                    isValid: false,
                    message: "Please enter a valid email id."
                }
            })
            isValid = false;
        }
        if (isValid) {
            updateContact({
                email: "",
                pass: "",
            })
            resetValidation();
        }
        event.preventDefault();
    }
    return (
        <div className='loginPage blueBackground'>
            <div className='col-lg-4 col-md-6 col-10 mx-auto login' data-aos="fade-up">
                <form className="loginform">
                    <div className='heading-text text-center h3 mb-4'>Login</div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label d-flex justify-content-between">Email address
                            <p className='validationMessage my-auto' hidden={validation.emailVal.isValid}>* {validation.emailVal.message}</p>
                        </label>
                        <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" value={contact.email} onChange={handleFormChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label d-flex justify-content-between">Password
                            <p className='validationMessage my-auto' hidden={validation.passVal.isValid}>* {validation.passVal.message}</p>
                        </label>
                        <input name="pass" type="password" className="form-control" id="pass" value={contact.pass} onChange={handleFormChange} />
                    </div>
                    <div className='text-center'><button className="btn btn-primary w-50 mt-4">Login</button></div>
                    <p className='text-center mt-2'>Not a member? <a className="text-primary" href='/SignUp'>Sign Up</a></p>
                </form>
            </div>
        </div>

    )
}

export default Login