import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import CenteredForm from '../../layouts/centered-form'
import Login from '../../components/sample-forms/login'
import Layout from '../../layouts/centered'
import Widget from '../../components/widget'
import fetchData from "../../api/api";
import { useRouter } from 'next/router'

const Index = () => {
    let router = useRouter();
    const [email, setemail] = useState(''),
        [password, setpassword] = useState(''),
        [email_err, setemail_err] = useState(false),
        [password_err, setpassword_err] = useState(false),
        [clicked, setclicked] = useState(false);

    let onChange = (e, name) => {
        if (String(name) === String('email')) {
            if (!e.target.value) {
                setemail_err(true);
            } else {
                setemail_err(false);
            }
            setemail(e.target.value);
        }
        if (String(name) === String('password')) {
            if (!e.target.value) {
                setpassword_err(true);
            } else {
                setpassword_err(false);
            }
            setpassword(e.target.value);
        }
    };

    let submit = (e) => {
        e.preventDefault();
        if (!email) {
            setemail_err(true);
            return toast.error('Username or Email is required')
        }
        if (!password) {
            setpassword_err(true);
            return toast.error('Password is required')
        }
        if (email_err) {
            return toast.error('Username or Email is required')
        }
        if (password_err) {
            return toast.error('Password is required')
        }
        setclicked(true);
        let loginData = { email, password };
        let response = fetchData('/admin/login', 'post', loginData);
        response.then((res) => {
            if (res && res.data && +res.data.status === 0) {
                setclicked(false);
                if (res.data.errors && res.data.errors.length > 0 && Array.isArray(res.data.errors)) {
                    res.data.errors.map((item) => {
                        return toast.error(item.msg);
                    })
                } else {
                    setclicked(false);
                    toast.error(res.data.response);
                }
            } else {
                if (res && res.data && +res.data.status === 1) {
                    toast.success(res.data.response);
                    localStorage.setItem('SGH', res.data.auth_token);
                    sessionStorage.setItem('SGH', res.data.auth_token);
                    setTimeout(() => {
                        setclicked(false);
                        return router.push('/admin/dashboard')
                    }, 1500);
                }
            }
        }).catch((err) => {
            setclicked(false);
            console.log("err", err)
        })
    }


    return (
        <Layout>
            <ToastContainer position="top-right" autoClose={2500} closeOnClick />
            <CenteredForm title="" subtitle="Login">
                <form>
                    <div className="flex flex-col lg:flex-row lg:flex-wrap w-full lg:space-x-4">
                        <div className="w-full mt-3 mb-6">
                            <div className={`form-element`}>
                                <div className="form-label">Username or Email <span className="form-error">*</span></div>
                                <input
                                    name="email"
                                    type="text"
                                    className={`form-input form-input-${email_err ? 'invalid' : 'valid'}`}
                                    placeholder="Enter username or email"
                                    value={email}
                                    onChange={e => onChange(e, 'email')}
                                />
                                {email_err ? <div className="form-error">Username or Email is required</div> : null}
                            </div>
                            <div className={`form-element`}>
                                <div className="form-label">Password <span className="form-error">*</span></div>
                                <input
                                    name="password"
                                    type="password"
                                    className={`form-input form-input-${password_err ? 'invalid' : 'valid'}`}
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={e => onChange(e, 'password')}
                                />
                                {password_err ? <div className="form-error">Password is required</div> : null}
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded"
                        onClick={e => submit(e)}
                        disabled={clicked}
                    >Submit </button>
                </form>
            </CenteredForm>
        </Layout>
    );
};
export default Index
