import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Widget from '../components/widget'
import fetchData from "../api/api";
import SectionTitle from '../components/section-title'
import { useRouter } from 'next/router';
import Datetime from 'react-datetime';  

const Appoinment = () => {

    let router = useRouter();
    let [name, setname] = useState(''),
        [name_err, setname_err] = useState(false),
        [clicked, setclicked] = useState(false),
        [email, setemail] = useState(''),
        [email_err, setemail_err] = useState(false),
        [phone, setphone] = useState(''),
        [phone_err, setphone_err] = useState(false),
        [gender, setgender] = useState(''),
        [gender_err, setgender_err] = useState(false),
        [age, setage] = useState(''),
        [age_err, setage_err] = useState(false),
        [date, setdate] = useState(''),
        [time, settime] = useState(''),
        [time_err, settime_err] = useState(false),
        [department_arr, setdepartment_arr] = useState(false),
        [department_id, setdepartment_id] = useState(''),
        [department_id_err, setdepartment_id_err] = useState(false),
        [appoinment_date_err, setappoinment_date_err] = useState(false),
        [appoinment_date, setappoinment_date] = useState(new Date())

  
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
        if (String(name) === String('gender')) {
            if (!e.target.value) {
                setgender_err(true);
            } else {
                setgender_err(false);
            }
            setgender(e.target.value);
        }
        if (String(name) === String('age')) {
            if (!e.target.value) {
                setage_err(true);
            } else {
                setage_err(false);
            }
            setage(e.target.value);
        }
        if (String(name) === String('date')) {
            if (!e.target.value) {
                setdate_err(true);
            } else {
                setdate_err(false);
            }
            setdate(e.target.value);
        }

        if (String(name) === String('appoinment_date')) {
            if (!e) {
                setappoinment_date_err(true);
            } else {
                setappoinment_date_err(false);
            }
            setappoinment_date(e);
        }

        if (String(name) === String('time')) {
            if (!e.target.value) {
                settime_err(true);
            } else {
                settime_err(false);
            }
            settime(e.target.value);
        }
        if (String(name) === String('department_id')) {
            if (!e.target.value) {
                setdepartment_id_err(true);
            } else {
                setdepartment_id_err(false);
            }
            setdepartment_id(e.target.value);
        }
        if (String(name) === String('appoinment_date')) {
            if (!e) {
                setappoinment_date_err(true);
            } else {
                setappoinment_date_err(false);
            }
            setappoinment_date(e);
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
        if (!gender) {
            setgender_err(true);
            return toast.error('Gender is required')
        }
        if (!age) {
            setage_err(true);
            return toast.error('Age is required')
        }
    
        if (!time) {
            settime_err(true);
            return toast.error('Time is required')
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
        if (gender_err) {
            return toast.error('Gender is required')
        }
        if (age_err) {
            return toast.error('Age is required')
        }
    
        if (time_err) {
            return toast.error('Time is required')
        }
        if (department_id_err) {
            return toast.error('department_id is required')
        }

        if (!appoinment_date) {
            setappoinment_date_err(true);
            return toast.error('Appoinment Date is required')
        }
        if (appoinment_date_err) {
            return toast.error('Appoinment Date is required')
        }

        setclicked(true);
        let data = { department_id, name, email, phone, gender, age, date, time, appoinment_date };
        let response = fetchData('/site/submit/appointments/details', 'post', data);
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
                            setname(''); setemail(''); setname_err(false); setemail_err(false); setphone(''); setphone_err(false); setgender(''); setgender_err(false); setage(''); setage_err(false);setappoinment_date_err(false);settime(''); settime_err(false); setdepartment_id(''); setdepartment_id_err(false);
                        }, 1000);
                    }
                }
            }).catch((err) => {
                console.log("err", err)
                setOpen(false)
            })
    };

    let get_department = () => {
    
        let response = fetchData('/site/department/list', 'post', {});
        response.then((res) => {
    
         
            if (res && res.data && +res.data.status === 0) {
                if (res.data.errors && res.data.errors.length > 0 && Array.isArray(res.data.errors)) {
                    res.data.errors.map((item) => {
                        return toast.error(item.msg);
                    })
                } else {
                    setdepartment_arr([]);
                }
            } else {
            
                if (res && res.data && +res.data.status === 1) {
                  setdepartment_arr(res.data.response && res.data.response.length > 0 ? res.data.response : []);
                  
                }
            }
        }).catch((err) => {
            console.log("err", err)
            
        });
    };


    useEffect(() => {
        get_department();
      }, [])



  return (
    <>

          <ToastContainer position="top-right" autoClose={2500} closeOnClick />
            <SectionTitle title="" subtitle= "Appoinment"  />
            <Widget title="">
            <form>
                    <div className="flex flex-col lg:flex-row lg:flex-wrap lg:w-1/2">
                        <div className="w-full ">
                            <div className={`form-element`}>
                            <div className="form-label">Name</div>
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
                        <div className="w-full ">
                            <div className={`form-element`}>
                            <div className="form-label">Email</div>
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

                        <div className="w-full ">
                            <div className={`form-element`}>
                            <div className="form-label">Phone</div>
                                <input
                                  type="number"
                                  className={`form-input form-input-${phone_err ? 'invalid' : 'valid'}`}
                                  placeholder="Phone Number"
                                  value={phone}
                                  onChange={e => onChange(e, 'phone')}
                                />
                                {phone_err ? <div className="form-error">Phone is required</div> : null}
                            </div>
                        </div>

                        <div className="w-full ">
                            <div className={`form-element`}>
                            <div className="form-label">Gender</div>
                                <select name="gender" value={gender} onChange={e => onChange(e, 'gender')} className={`form-input form-input-${gender_err ? 'invalid' : 'valid'}`} >
                                    <option value="" >Gender</option>
                                    <option value="1">Male</option>
                                    <option value="2" >Female</option>
                                </select>
                                {gender_err ? <div className="form-error">Gender is required</div> : null}
                            </div>
                        </div>
                        <div className="w-full">
                            <div className={`form-element`}>
                            <div className="form-label">Age</div>
                                <input
                                    type="text"
                                    className={`form-input form-input-${age_err ? 'invalid' : 'valid'}`}
                                    placeholder="Age"
                                    value={age}
                                    onChange={e => onChange(e, 'age')}
                                />
                                {age_err ? <div className="form-error">Age is required</div> : null}
                            </div>
                        </div>

                        <div className="w-full ">
                            <div className={`form-element`}>
                                 <div className="form-label">Choose Department</div>
                                <select name="department_id" value={department_id} onChange={e => onChange(e, 'department_id')} className={`form-input form-input-${department_id_err ? 'invalid' : 'valid'}`} >
                                    <option value="" >Choose Department</option>
                                    {
                                        department_arr && department_arr.length > 0 ?
                                            department_arr.map((item, index) => {
                                                return (
                                                    <>
                                                        <option key={index} value={item._id} >{item.name}</option>
                                                    </>
                                                )
                                            })
                                            : null
                                    }
                                </select>
                                {department_id_err ? <div className="form-error">Department is required</div> : null}
                            </div>
                        </div>

                        <div className="w-full">
                            <div className={`form-element`}>
                                <div className="form-label">Appoinment Date <span className="form-error">*</span></div>
                                <Datetime
                                    className={`form-input form-input-${appoinment_date_err ? 'invalid' : 'valid'}`}
                                    value={appoinment_date}
                                    defaultValue={new Date()}
                                    dateFormat="DD-MM-YYYY"
                                    timeFormat={false}
                                    input={true}
                                    inputProps={{
                                        className: 'form-input',
                                        placeholder: 'Select date'
                                    }}
                                    viewMode={'days'}
                                    min={new Date().getTime()}
                                    onChange={e => onChange(e, 'appoinment_date')}
                                />
                                {appoinment_date_err ? <div className="form-error">Posting Date is required</div> : null}
                            </div>
                        </div>

                        <div className="w-full ">
                            <div className={`form-element`}>
                            <div className="form-label">Time</div>
                            <select name="time" value={time} onChange={e => onChange(e, 'time')} className={`form-input form-input-${time_err ? 'invalid' : 'valid'}`} >
                                    <option value="">Time</option>
                                    <option value="8:00 AM" >8 : 00 AM</option>
                                    <option value="10:00 AM">10 : 00 AM</option>
                                    <option value="12:00 PM">12 : 00 PM</option>
                                    <option value="2:00 PM">2 : 00 PM</option>
                                    <option value="4:00 PM">4 : 00 PM</option>
                                    <option value="6:00 PM">6 : 00 PM</option>
                                    <option value="8:00 PM">8 : 00 PM</option>
                                    <option value="10:00 PM">10 : 00 PM</option>
                                </select>
                                {time_err ? <div className="form-error">Time is required</div> : null}
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
    </>
  )
}


export default Appoinment
