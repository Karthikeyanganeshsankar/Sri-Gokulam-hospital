import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Widget from '../components/widget'
import fetchData from "../api/api";
import SectionTitle from '../components/section-title'
import { useRouter } from 'next/router'

const ContactUs = () => {

  let router = useRouter();
  let [name, setname] = useState(''),
      [name_err, setname_err] = useState(false),
      [clicked, setclicked] = useState(false),
      [email, setemail] = useState(''),
      [email_err, setemail_err] = useState(false),
      [phone, setphone] = useState(''),
      [phone_err, setphone_err] = useState(false),
      [subject, setsubject] = useState(''),
      [subject_err, setsubject_err] = useState(false),
      [reason, setreason] = useState(''),
      [reason_err, setreason_err] = useState(false)

  let onChange = (e, name) => {
    if (String(name) === String('name')) {
        if (!e.target.value) {
            setname_err(true);
        } else {
            setname_err(false);
        }
        setname(e.target.value);
    }
    if (String(name) === String('email')) {
        if (!e.target.value) {
            setemail_err(true);
        } else {
            setemail_err(false);
        }
        setemail(e.target.value);
    }
    if (String(name) === String('phone')) {
        if (!e.target.value) {
            setphone_err(true);
        } else {
            setphone_err(false);
        }
        setphone(e.target.value);
    }
    if (String(name) === String('subject')) {
        if (!e.target.value) {
            setsubject_err(true);
        } else {
            setsubject_err(false);
        }
        setsubject(e.target.value);
    }
    if (String(name) === String('reason')) {
        if (!e.target.value) {
            setreason_err(true);
        } else {
            setreason_err(false);
        }
        setreason(e.target.value);
    }
};
  
  let submit = (e) => {
    e.preventDefault();
    if (!name) {
        setname_err(true);
        return toast.error('Name is required')
    }
    if (!email) {
        setemail_err(true);
        return toast.error('Email is required')
    }
    if (!phone) {
        setphone_err(true);
        return toast.error('Phone is required')
    }
    if (!subject) {
        setsubject_err(true);
        return toast.error('Subject is required')
    }
    if (!reason) {
        setreason_err(true);
        return toast.error('Reason is required')
    }
    
    if (name_err) {
        return toast.error('Name is required')
    }
    if (email_err) {
        return toast.error('Email is required')
    }
    if (phone_err) {
        return toast.error('Phone is required')
    }
    if (subject_err) {
        return toast.error('Subject is required')
    }
    if (reason_err) {
        return toast.error('Reason is required')
    }
    
    setclicked(true);
    let data = { name, email, phone, subject, reason };
    let response = fetchData('/site/submit/contactus/details', 'post', data);
    response.then((res) => {
        setclicked(false);
          
          if (res && res.data && +res.data.status === 0) {
              if (res.data.errors && res.data.errors.length > 0 && Array.isArray(res.data.errors)) {
                  res.data.errors.map((item) => {
                      return toast.error(item.msg);
                  })
              } else {
                  toast.error(res.data.response);
              }
          } else {
              if (res && res.data && +res.data.status === 1) {
                  toast.success(res.data.response);
                  setTimeout(() => {
                      setname(''); setemail(''); setname_err(false); setemail_err(false); setphone(''); setphone_err(false); setsubject(''); setsubject_err(false); setreason(''); setreason_err(false);
                  }, 1000);
              }
          }
      }).catch((err) => {
          console.log("err", err)
          return router.push('/admin-login');
      })
  };
  return (
    <>

          <ToastContainer position="top-right" autoClose={2500} closeOnClick />
            <SectionTitle title="" subtitle= "Contact Us"  />
            <Widget title="">
                <form>
                    <div className="flex flex-col lg:flex-row lg:flex-wrap w-full lg:w-1/2">
                     <div className="w-full">
                            <div className={`form-element`}>
                                <div className="form-label">Name <span className="form-error">*</span></div>
                                <input
                                    type="text"
                                    className={`form-input form-input-${name_err ? 'invalid' : 'valid'}`}
                                    placeholder="name"
                                    value={name}
                                    onChange={e => onChange(e, 'name')}
                                />
                                {name_err ? <div className="form-error"> Name is required</div> : null}
                            </div>
                        </div>
                        <div className="w-full">
                            <div className={`form-element`}>
                                <div className="form-label">Email <span className="form-error">*</span></div>
                                <input
                                    type="email"
                                    className={`form-input form-input-${email_err ? 'invalid' : 'valid'}`}
                                    placeholder="email"
                                    value={email}
                                    onChange={e => onChange(e, 'email')}
                                />
                                {email_err ? <div className="form-error"> Email is required</div> : null}
                            </div>
                        </div>

                        <div className="w-full">
                            <div className={`form-element`}>
                                <div className="form-label">Phone <span className="form-error">*</span></div>
                                <input
                                  type="number"
                                  className={`form-input form-input-${phone_err ? 'invalid' : 'valid'}`}
                                  placeholder="phone"
                                  value={phone}
                                  onChange={e => onChange(e, 'phone')}
                                />
                                {phone_err ? <div className="form-error">phone is required</div> : null}
                            </div>
                        </div>

                        <div className="w-full">
                            <div className={`form-element`}>
                                <div className="form-label">Subject <span className="form-error">*</span></div>
                                <input
                                    type="text"
                                    className={`form-input form-input-${subject_err ? 'invalid' : 'valid'}`}
                                    placeholder="subject"
                                    value={subject}
                                    onChange={e => onChange(e, 'subject')}
                                />
                                {subject_err ? <div className="form-error">Subject is required</div> : null}
                            </div>
                        </div>

                        <div className="w-full">
                            <div className={`form-element`}>
                                <div className="form-label">Reason* <span className="form-error">*</span></div>
                                <input
                                    type="textarea"
                                    className={`form-input form-input-${reason_err ? 'invalid' : 'valid'}`}
                                    placeholder="Reason of Appoinment"
                                    value={reason}
                                    onChange={e => onChange(e, 'reason')}
                                />
                                {reason_err ? <div className="form-error">Reason is required</div> : null}
                            </div>
                        </div>
                        
                    </div>
                    <button
                        className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded"
                        onClick={e => submit(e)}
                        disabled={clicked}
                    >{"Submit"} </button>
                    {' '}
                   
                </form>
            </Widget>
      {/* <div className="flex flex-col">
        {data && message && (
          <div className="w-full mb-4">
            <Alert
              color="bg-transparent border-green-500 text-green-500"
              borderLeft
              raised>
              {message}
            </Alert>
          </div>
        )}
        <Validation items={items} onSubmit={onSubmit} />
        
      </div> */}
    </>
  )
}


export default ContactUs
