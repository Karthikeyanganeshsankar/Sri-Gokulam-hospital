import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Widget from '../components/widget'
import fetchData from "../api/api";
import CONFIG from "../api/base_url";
import SectionTitle from '../components/section-title'
import { useRouter } from 'next/router'
import { withRouter } from 'next/router';
import { useSelector, shallowEqual } from 'react-redux';
import { FiEye, FiEdit, FiTrash, FiX, FiSearch, FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import axios from "axios";
import stringify from 'json-stringify-safe';

const JObPreview = () => {

  let router = useRouter();
  let [job, setjob] = useState(''),
  [view_obj, setview_obj] = useState({}),
  [view_show, setview_show] = useState(false);

  let   [applyname, setapplyname] = useState(''),
        [applyname_err, setapplyname_err] = useState(false),
        [applyemail, setapplyemail] = useState(''),
        [applyemail_err, setapplyemail_err] = useState(false),
        [applyphone, setapplyphone] = useState(''),
        [applyphone_err, setapplyphone_err] = useState(false),
        [applyqualification, setapplyqualification] = useState(''),
        [applyqualification_err, setapplyqualification_err] = useState(false),
        [applycategoryname, setapplycategoryname] = useState(''),
        [applycategoryname_err, setapplycategoryname_err] = useState(false),
        [applycategoryid, setapplycategoryid] = useState(''),
        [applycategoryid_err, setapplycategoryid_err] = useState(false),
        [applycovernotes, setapplycovernotes] = useState(''),
        [applycovernotes_err, setapplycovernotes_err] = useState(false),
        [applyjobid, setapplyjobid] = useState(''),
        [show_skills_data, setshow_skills] = useState(''),
        [clicked, setclicked] = useState(false),
        [selectedFile, setselectedFile] = useState(''),
        [selectedFile_name, setselectedFile_name] = useState(false),
        [applyfile, setapplyfile] = useState(''),
        [applyfile_err, setapplyfile_err] = useState(false)

  const { palettes } = useSelector((state) => ({ palettes: state.palettes }), shallowEqual)
  let { background } = { ...palettes };

 

  let applyonChange = (e, name) => {
    if (String(name) === String('applyname')) {
        if (!e.target.value) {
            setapplyname_err(true);
        } else {
            setapplyname_err(false);
        }
        setapplyname(e.target.value);
    }
    if (String(name) === String('applyemail')) {
        if (!e.target.value) {
            setapplyemail_err(true);
        } else {
            setapplyemail_err(false);
        }
        setapplyemail(e.target.value);
    }
    if (String(name) === String('applyphone')) {
        if (!e.target.value) {
            setapplyphone_err(true);
        } else {
            setapplyphone_err(false);
        }
        setapplyphone(e.target.value);
    }
    if (String(name) === String('applyqualification')) {
        if (!e.target.value) {
            setapplyqualification_err(true);
        } else {
            setapplyqualification_err(false);
        }
        setapplyqualification(e.target.value);
    }
    if (String(name) === String('applycovernotes')) {
        if (!e.target.value) {
            setapplycovernotes_err(true);
        } else {
            setapplycovernotes_err(false);
        }
        setapplycovernotes(e.target.value);
    }

};
//   const router = useRouter();
  const jobs_id = router.query.job_id;
     
  let apply_submit = (e) =>{
    e.preventDefault();
 

    if (!applycategoryname) {
        setapplycategoryname_err(true);
        return toast.error('Category is required')
    }
    if (applycategoryname_err) {
        return toast.error('Category is required')
    }

    if (!applyname) {
        setapplyname_err(true);
        return toast.error('Name is required')
    }
    if (applyname_err) {
        return toast.error('Name is required')
    }

    if (!applyemail) {
        setapplyemail_err(true);
        return toast.error('Email is required')
    }
    if (applyemail_err) {
        return toast.error('Email is required')
    }


    if (!applyqualification) {
        setapplyqualification_err(true);
        return toast.error('Qualification is required')
    }
    if (applyqualification_err) {
        return toast.error('Qualification is required')
    }

    if (!applyphone) {
        setapplyphone_err(true);
        return toast.error('Phone is required')
    }
    if (applyphone_err) {
        return toast.error('Phone is required')
    }
    

    if (!applycovernotes) {
        setapplycovernotes_err(true);
        return toast.error('Cover notes is required')
    }
    if (applycovernotes_err) {
        return toast.error('Cover notes is required')
    }

    let data = {
        applyname, applyemail, applyphone, applyqualification, applycategoryname,
        applycategoryid, applycovernotes, applyjobid, applyfile
    };


    var apply={};
    
    apply.jobs_id = data.applyjobid;
    apply.category_id = data.applycategoryid;
    apply.category_name = data.applycategoryname;
    apply.name = data.applyname;
    apply.email = data.applyemail;
    apply.phone = data.applyphone;
    apply.qualification = data.applyqualification;
    apply.message = data.applycovernotes;

    let formData = new FormData();
    formData.append('data', JSON.stringify(apply));
    formData.append('file', applyfile);
    let response = fetchData('/site/apply/jobs', 'post', formData);
    response.then((res) => {
        
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
            }
            setTimeout(() => {
                setapplyname(''); setapplyname_err(false);
                setapplyemail(''); setapplyemail_err(false);
                setapplyphone(''); setapplyphone_err(false);
                setapplyqualification(''); setapplyqualification_err(false);
                setapplycategoryname(''); setapplycategoryname_err(false);
                setapplycategoryid(''); setapplycategoryid_err(false);
                setapplycovernotes(''); setapplycovernotes_err(false);
                setapplyjobid(''); setapplyfile('');
            }, 1000);
        }
    }).catch((err) => {
        console.log("err", err)
        // return router.push('/admin-login');
    })
    
   
}

let onFileChange = (fileChangeEvent) => {
    setapplyfile(fileChangeEvent.target.files[0]);
}

let handleUpload  = (e, file)=> {
    e.preventDefault();

    console.log("file--------------", file)
    // console.log("this.state.selectedFile.name---------------", this.state.selectedFile.name)
    // setselectedFile(this.state.selectedFile);
    // setselectedFile_name(this.state.selectedFile.name);

    // [selectedFile, setselectedFile] = useState(''),
    // [selectedFile_name, setselectedFile_name] = useState(false)

    // const data = new FormData();
    // data.append('file', this.state.selectedFile, this.state.selectedFile.name);
    // axios.post(endpoint, data).then((res) => {
    //   console.log(res.statusText);
    // });
  };

  useEffect(() => {
    var data = {};
    data.job_id = jobs_id;
    let response = fetchData('/site/jobs/getjobdetails', 'post', data);
        response.then((res) => {
            if (res && res.data && +res.data.status === 0) {
                if (res.data.errors && res.data.errors.length > 0 && Array.isArray(res.data.errors)) {
                    res.data.errors.map((item) => {
                        return toast.error(item.msg);
                    })
                } else {
                    settable_arr([]);
                }
            } else {
                if (res && res.data && +res.data.status === 1) {
                    // setview_obj(res.data.response);

                    setapplycategoryname(res.data.response.name);
                    setapplycategoryid(res.data.response.category_id);
                    setapplyjobid(res.data.response._id);
                    
                }
            }
        }).catch((err) => {
            console.log("err", err)
        });
}, []);
  return (
    <>

          <ToastContainer position="top-right" autoClose={2500} closeOnClick />
            <SectionTitle title="" subtitle= "Apply Job"  />
            <Widget title="">
                <div>
                        <form>
                            <div className="flex flex-col lg:flex-row lg:flex-wrap lg:w-1/2">
                                    
                                    <div className="w-full ">
                                        <div className={`form-element`}>
                                        <div className="form-label">Category</div>
                                            <input
                                                type="text"
                                                className={`form-input form-input-${applycategoryname_err ? 'invalid' : 'valid'}`}
                                                placeholder="Name"
                                                value={applycategoryname}
                                                onChange={e => applyonChange(e, 'applycategoryname')}
                                                disabled={true}
                                            />
                                            {applycategoryname_err ? <div className="form-error"> Category is required</div> : null}
                                        </div>
                                    </div>
                                    <div className="w-full ">
                                        <div className={`form-element`}>
                                        <div className="form-label">Name</div>
                                            <input
                                                type="text"
                                                className={`form-input form-input-${applyname_err ? 'invalid' : 'valid'}`}
                                                placeholder="Name"
                                                value={applyname}
                                                onChange={e => applyonChange(e, 'applyname')}
                                            />
                                            {applyname_err ? <div className="form-error"> Name is required</div> : null}
                                        </div>
                                    </div>
                                    <div className="w-full ">
                                        <div className={`form-element`}>
                                        <div className="form-label">Email</div>
                                            <input
                                                type="email"
                                                className={`form-input form-input-${applyemail_err ? 'invalid' : 'valid'}`}
                                                placeholder="Email"
                                                value={applyemail}
                                                onChange={e => applyonChange(e, 'applyemail')}
                                            />
                                            {applyemail_err ? <div className="form-error"> Email is required</div> : null}
                                        </div>
                                    </div>
                                    <div className="w-full ">
                                        <div className={`form-element`}>
                                        <div className="form-label">Qualification</div>
                                            <input
                                                type="text"
                                                className={`form-input form-input-${applyqualification_err ? 'invalid' : 'valid'}`}
                                                placeholder="Qualification"
                                                value={applyqualification}
                                                onChange={e => applyonChange(e, 'applyqualification')}
                                            />
                                            {applyqualification_err ? <div className="form-error"> Qualification is required</div> : null}
                                        </div>
                                    </div>

                                    <div className="w-full ">
                                        <div className={`form-element`}>
                                        <div className="form-label">Phone</div>
                                            <input
                                            type="number"
                                            className={`form-input form-input-${applyphone_err ? 'invalid' : 'valid'}`}
                                            placeholder="Phone Number"
                                            value={applyphone}
                                            onChange={e => applyonChange(e, 'applyphone')}
                                            />
                                            {applyphone_err ? <div className="form-error">Phone is required</div> : null}
                                        </div>
                                    </div>
                                    <div className="w-full ">
                                        <div className={`form-element`}>
                                        <div className="form-label">Cover Notes</div>
                                            <input
                                            type="text"
                                            className={`form-input form-input-${applycovernotes_err ? 'invalid' : 'valid'}`}
                                            placeholder="Cover notes"
                                            value={applycovernotes}
                                            onChange={e => applyonChange(e, 'applycovernotes')}
                                            />
                                            {applycovernotes_err ? <div className="form-error">Cover notes is required</div> : null}
                                        </div>
                                    </div>
                                    <div className="w-full ">
                                        <div className={`form-element`}>
                                        <div className="form-label">Resume upload</div>
                                        {/* <input
                                              className={`form-input form-input-${applyfile_err ? 'invalid' : 'valid'}`}
                                            id="file"
                                            type="file"
                                            name="file"
                                            value={applyfile} 
                                            onChange={e => handleUpload(e, 'applyfile')}
                                            // onChange={this.handleFileChange}
                                        /> */}
                                         <input type="file" onChange={e => onFileChange(e)}></input>
                                        {/* <label htmlFor="file">Choose a file</label>
                                        <button onClick={e => handleUpload(e, 'applyfile')} >Upload</button> */}
                                        {/* <button onClick={this.handleUpload} >Upload</button> */}
                                        </div>
                                    </div>
                                    
                                </div>
                                <button
                                    className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded"
                                    onClick={e => apply_submit(e)}
                                    disabled={clicked}
                                >{"Apply Job"} </button>
                                {' '}
                            
                        </form>
                </div>
           
           
            </Widget>
     
    </>
  )
}


export default withRouter(JObPreview)
