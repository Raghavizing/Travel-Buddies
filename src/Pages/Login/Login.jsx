import React, { useState } from 'react'
import "./Login.css"
function Login() {
    const [formType, setFormType] = useState("login");
    const [validation, setValidation] = useState({
        nameVal:{
            isValid:true,
            message:""
        },
        passVal:{
            isValid:true,
            message:""
        },
        passMatchval:{
            isValid:true,
            message:""
        },
        emailVal:{
            isValid:true,
            message:""
        },

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
        if (contact.pass.length === 0) {
            setValidation({
                ...validation,
                passVal:{
                    isValid:false,
                    message:"Field cannot be empty."
                }
            })
            isValid = false;
        }
        if (contact.email.length === 0) {
            setValidation({
                ...validation,
                emailVal:{
                    isValid:false,
                    message:"Field cannot be empty."
                }
            })
            isValid = false;
        }
        if (formType === "sign up") {
            if (contact.name.length == 0) {
                setValidation({
                    ...validation,
                    name:{
                        isValid:false,
                        message:"Field cannot be empty."
                    }
                })
                isValid = false;
            }
            if (contact.pass != contact.repass) {
                setValidation({
                    ...validation,
                    passMatchval:{
                        isValid:false,
                        message:"Passwords donot match."
                    }
                })
                isValid = false;
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
            nameVal:{
                isValid:true,
                message:""
            },
            passVal:{
                isValid:true,
                message:""
            },
            passMatchval:{
                isValid:true,
                message:""
            },
            emailVal:{
                isValid:true,
                message:""
            },
        })
    }
    event.preventDefault();
    }
    return (
        <div style={{ height: "100vh" }}>
            <div className='w-25 mx-auto mt-5'>
                <div className='heading-text text-center h3 my-2 text-capitalize'>{formType}</div>
                <form className="mb-3">
                    <div className="mb-3" hidden={formType === "login" ? true : false}>
                        <label htmlFor="name" className="form-label d-flex justify-content-between">Full Name <p className='validationMessage my-auto' hidden={validation.nameVal.isValid}>* {validation.nameVal.message}</p></label>
                        <input name="name" type="name" className="form-control" id="name" value={contact.name} onChange={handleFormChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label d-flex justify-content-between">Email address <p className='validationMessage my-auto' hidden={validation.emailVal.isValid}>* {validation.emailVal.message}</p></label>
                        <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" value={contact.email} onChange={handleFormChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label d-flex justify-content-between">Password <p className='validationMessage my-auto' hidden={validation.passVal.isValid}>* {validation.passVal.message}.</p></label>
                        <input name="pass" type="password" className="form-control" id="pass" value={contact.pass} onChange={handleFormChange} />
                    </div>
                    <div className="mb-3" hidden={formType === "login" ? true : false}>
                        <label htmlFor="repass" className="form-label d-flex justify-content-between">Repeat Password <p className='validationMessage my-auto' hidden={validation.passMatchval.isValid}>* {validation.passMatchval.message}</p></label>
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