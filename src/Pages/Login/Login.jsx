import React, { useState } from 'react'
import "./Login.css"
function Login() {
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
        if (isValid) {
            updateContact({
                email: "",
                pass: "",
            })
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
        event.preventDefault();
    }
    return (
        <div className='loginPage'>
            <div className='col-lg-4 col-md-6 col-10 mx-auto login'>
                <div className='heading-text text-center h3 my-4 text-capitalize'>Login</div>
                <form className="shadow loginform mb-3">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label d-flex justify-content-between subheading-text">Email address <p className='validationMessage my-auto paragraph-text' hidden={validation.emailVal.isValid}>* {validation.emailVal.message}</p></label>
                        <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" value={contact.email} onChange={handleFormChange} />
                        <div id="emailHelp" className="form-text paragraph-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label d-flex justify-content-between subheading-text">Password <p className='validationMessage my-auto paragraph-text' hidden={validation.passVal.isValid}>* {validation.passVal.message}.</p></label>
                        <input name="pass" type="password" className="form-control" id="pass" value={contact.pass} onChange={handleFormChange} />
                    </div>
                    <div className='text-center paragraph-text'><button className="btn btn-primary w-50 mt-4 text-capitalize" onClick={submitForm}>Login</button></div>
                    <p className='text-center mt-2 paragraph-text'>Not a member? <a className="text-primary text-underline" href='/SignUp'>Sign Up</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login