import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import "./SignUp.css";

function SignUp() {
    useEffect(() => {
        AOS.init();
    }, []);

    const [validation, setValidation] = useState({
        nameVal: { isValid: true, message: "" },
        passVal: { isValid: true, message: "" },
        passMatchval: { isValid: true, message: "" },
        emailVal: { isValid: true, message: "" },
    });

    const [contact, updateContact] = useState({
        name: "",
        email: "",
        pass: "",
        repass: ""
    });

    function handleFormChange(event) {
        const { name, value } = event.target;
        updateContact({
            ...contact,
            [name]: value
        });
    }

    function submitForm(event) {
        event.preventDefault();
        let isValid = true;
        
        if (contact.pass.length === 0) {
            setValidation((prev) => ({
                ...prev,
                passVal: { isValid: false, message: "Field cannot be empty." }
            }));
            isValid = false;
        }
        if (contact.email.length === 0) {
            setValidation((prev) => ({
                ...prev,
                emailVal: { isValid: false, message: "Field cannot be empty." }
            }));
            isValid = false;
        }
        if (contact.name.length === 0) {
            setValidation((prev) => ({
                ...prev,
                nameVal: { isValid: false, message: "Field cannot be empty." }
            }));
            isValid = false;
        }
        if (contact.pass !== contact.repass) {
            setValidation((prev) => ({
                ...prev,
                passMatchval: { isValid: false, message: "Passwords do not match." }
            }));
            isValid = false;
        }

        if (isValid) {
            updateContact({
                name: "",
                email: "",
                pass: "",
                repass: ""
            });
            setValidation({
                nameVal: { isValid: true, message: "" },
                passVal: { isValid: true, message: "" },
                passMatchval: { isValid: true, message: "" },
                emailVal: { isValid: true, message: "" },
            });
        }
    }

    return (
        <div className='signupPage blueBackground'>
            <div className='col-lg-4 col-md-6 col-10 mx-auto signup' data-aos='fade-up'>
                <form className="shadow signupform">
                    <div className='heading-text text-center h3 mt-4'>Sign Up</div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label d-flex justify-content-between">Full Name 
                            <p className='validationMessage my-auto' hidden={validation.nameVal.isValid}>* {validation.nameVal.message}</p>
                        </label>
                        <input name="name" type="text" className="form-control" id="name" value={contact.name} onChange={handleFormChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label d-flex justify-content-between">Email address 
                            <p className='validationMessage my-auto' hidden={validation.emailVal.isValid}>* {validation.emailVal.message}</p>
                        </label>
                        <input name="email" type="email" className="form-control" id="email" value={contact.email} onChange={handleFormChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label d-flex justify-content-between">Password 
                            <p className='validationMessage my-auto' hidden={validation.passVal.isValid}>* {validation.passVal.message}</p>
                        </label>
                        <input name="pass" type="password" className="form-control" id="pass" value={contact.pass} onChange={handleFormChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="repass" className="form-label d-flex justify-content-between">Repeat Password 
                            <p className='validationMessage my-auto' hidden={validation.passMatchval.isValid}>* {validation.passMatchval.message}</p>
                        </label>
                        <input name="repass" type="password" className="form-control" id="repass" value={contact.repass} onChange={handleFormChange} />
                    </div>
                    <div className='text-center'>
                        <button className="btn btn-primary w-50 mt-4" onClick={submitForm}>Sign Up</button>
                    </div>
                    <p className='text-center mt-2'>Already have an account? <a className="text-primary" href='/Login'>Login</a></p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
