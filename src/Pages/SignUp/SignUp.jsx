import React, { useState,useEffect } from 'react'
import AOS from 'aos'
import "./SignUp.css"
function SignUp() {
    useEffect(() => {
        AOS.init();
    }, [])
    const [validation, setValidation] = useState({
        nameVal: {
            isValid: true,
            message: ""
        },
        passVal: {
            isValid: true,
            message: ""
        },
        passMatchval: {
            isValid: true,
            message: ""
        },
        emailVal: {
            isValid: true,
            message: ""
        },

    })
    const [contact, updateContact] = useState({
        name: "",
        email: "",
        pass: "",
        repass: ""

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
        if (contact.name.length === 0) {
            setValidation({
                ...validation,
                name: {
                    isValid: false,
                    message: "Field cannot be empty."
                }
            })
            isValid = false;
        }
        if (contact.pass !== contact.repass) {
            setValidation({
                ...validation,
                passMatchval: {
                    isValid: false,
                    message: "Passwords donot match."
                }
            })
            isValid = false;
        }

        if (isValid) {
            updateContact({
                name: "",
                email: "",
                pass: "",
                repass: ""
            })
            setValidation({
                nameVal: {
                    isValid: true,
                    message: ""
                },
                passVal: {
                    isValid: true,
                    message: ""
                },
                passMatchval: {
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
        <div className='signupPage my-auto blueBackground'>
            <div className='col-lg-4 col-md-6 col-10 mx-auto signup' data-aos='fade-up'>
                <form className=" shadow mb-3 signupform">
                <div className='heading-text text-center h3 mt-4 text-capitalize'>Sign Up</div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label d-flex justify-content-between subheading-text">Full Name <p className='validationMessage my-auto paragraph-text' hidden={validation.nameVal.isValid}>* {validation.nameVal.message}</p></label>
                        <input name="name" type="name" className="form-control" id="name" value={contact.name} onChange={handleFormChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label d-flex justify-content-between subheading-text">Email address <p className='validationMessage my-auto paragraph-text' hidden={validation.emailVal.isValid}>* {validation.emailVal.message}</p></label>
                        <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" value={contact.email} onChange={handleFormChange} />
                        <div id="emailHelp" className="form-text paragraph-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label d-flex justify-content-between subheading-text">Password <p className='validationMessage my-auto paragraph-text' hidden={validation.passVal.isValid}>* {validation.passVal.message}.</p></label>
                        <input name="pass" type="password" className="form-control" id="pass" value={contact.pass} onChange={handleFormChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="repass" className="form-label d-flex justify-content-between subheading-text">Repeat Password <p className='validationMessage my-auto paragraph-text' hidden={validation.passMatchval.isValid}>* {validation.passMatchval.message}</p></label>
                        <input name="repass" type="password" className="form-control" id="repass" value={contact.repass} onChange={handleFormChange} />
                    </div>
                    <div className='text-center'><button className="btn btn-primary w-50 mt-4 text-capitalize paragraph-text" onClick={submitForm}>Sign Up</button></div>
                    <p className='text-center mt-2 paragraph-text'>Already have an account? <a className="text-primary text-underline" href='/Login'>Login</a></p>
                </form>
            </div>
        </div>
    )
}

export default SignUp