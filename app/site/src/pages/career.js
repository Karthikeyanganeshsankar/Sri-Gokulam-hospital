import React, {useState, useEffect, useRef} from 'react'
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Widget from '../components/widget'
import fetchData from "../api/api";
import SectionTitle from '../components/section-title'
import Datetime from 'react-datetime';
import Widget1 from '../components/dashboard/widget-1'
import { FiEye, FiEdit, FiTrash, FiX, FiSearch, FiToggleLeft, FiToggleRight } from 'react-icons/fi'
import { useSelector, shallowEqual } from 'react-redux';
import { Popover, PopoverHeader, PopoverBody, Pagination, PaginationLink, PaginationItem } from "reactstrap";
import { useRouter } from 'next/router';
import Link from 'next/link'
import {
    FiHome,
    FiChevronRight,
    FiChevronsRight,
    FiArrowRight
} from 'react-icons/fi'
import { FaSortNumericDown, FaSortNumericUp } from 'react-icons/fa'
import Portal from '../components/portal'

const Index = () => {
    let router = useRouter();
    let [status, setstatus] = useState(''),
        [status_err, setstatus_err] = useState(false),
        [clicked, setclicked] = useState(false),
        [category_arr, setcategory_arr] = useState(false),
        [category_id, setcategory_id] = useState(''),
        [category_id_err, setcategory_id_err] = useState(''),
        [designation, setdesignation] = useState(''),
        [designation_err, setdesignation_err] = useState(''),
        [qualification, setqualification] = useState(''),
        [qualification_err, setqualification_err] = useState(''),
        [no_of_vacancy, setno_of_vacancy] = useState(''),
        [no_of_vacancy_err, setno_of_vacancy_err] = useState(''),
        [experience, setexperience] = useState(''),
        [experience_err, setexperience_err] = useState(''),
        [key_skills, setkey_skills] = useState(''),
        [key_skills_err, setkey_skills_err] = useState(''),
        [salary, setsalary] = useState(''),
        [salary_err, setsalary_err] = useState(''),
        [posting_date, setposting_date] = useState(new Date()),
        [closing_date, setclosing_date] = useState(new Date()),
        [posting_date_err, setposting_date_err] = useState(false),
        [closing_date_err, setclosing_date_err] = useState(false),
        [selected_id, setselected_id] = useState(''),
        [deleted_id, setdeleted_id] = useState(''),
        [search, setsearch] = useState(''),
        [active_statu, setactive_statu] = useState(0),
        [inactive_status, setinactive_status] = useState(0),
        [selected_category, setselected_category] = useState(''),
        [tableOptions, settableOptions] = useState({
            search: "",
            filter: "all",
            page: {
                history: "",
                current: 1
            },
            order: "",
            field: "",
            limit: 10,
            skip: 0,
            category_id: "",
            status: ""
        }),
        [table_arr, settable_arr] = useState([]),
        [view_obj, setview_obj] = useState({}),
        [page_count, setpage_count] = useState(0),
        [activePage, setactivePage] = useState(0),
        [pages, setpages] = useState(0),
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
        [show_skills_data, setshow_skills] = useState('')


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

    const { palettes } = useSelector((state) => ({ palettes: state.palettes }), shallowEqual)
    let { background } = { ...palettes };

    let home = false, icon = 'arrow', items = [
        { title: 'Home', url: '/admin-dashboard', last: false },
        { title: 'Post jobs', url: '/admin-jobs', last: true }
    ];

    const modalRef = useRef(null)
    const [open, setOpen] = useState(false)
    // const show = () => {
    //     setOpen(true)
    // }
    const hide = () => {
        setOpen(false)
    }

    const [skillopen, setSkillOpen] = useState(false)
    const show_skills = (e, data) => {
        e.preventDefault();
        if(data){
            setshow_skills(data.key_skills);
        }
        setSkillOpen(true)
    }
    const hide_skills = () => {
        setSkillOpen(false)
    }

    let get_category = () => {
        let response = fetchData('/site/get/category', 'post', {});
        response.then((res) => {
           
            if (res && res.data && +res.data.status === 0) {
                if (res.data.errors && res.data.errors.length > 0 && Array.isArray(res.data.errors)) {
                    res.data.errors.map((item) => {
                        return toast.error(item.msg);
                    })
                } else {
                    setcategory_arr([]);
                }
            } else {
                if (res && res.data && +res.data.status === 1) {
                    setcategory_arr(res.data.response && res.data.response.length > 0 ? res.data.response : []);
                }
            }
        }).catch((err) => {
            console.log("err", err)
            // return router.push('/admin-login');
        });
    };

    let get_bobs = (tabops) => {
        let response = fetchData('/site/jobs/list', 'post', tabops);
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
                    settable_arr(res.data.response && res.data.response.result && res.data.response.result.length > 0 ? res.data.response.result : []);
                    setpage_count(res.data.response && res.data.response.length ? res.data.response.length : 0);
                    setactive_statu(res.data.response && res.data.response.active ? res.data.response.active : 0);
                    setinactive_status(res.data.response && res.data.response.inactive ? res.data.response.inactive : 0);
                    setpages(Math.ceil(Number(res.data.response.fullcount) / 10));
                }
            }
        }).catch((err) => {
            console.log("err", err)
            // return router.push('/admin-login');
        });
    }

   

   

    let submit = (e) => {
        e.preventDefault();
        if (!category_id) {
            setcategory_id_err(true);
            return toast.error('Category is required')
        }
        if (category_id_err) {
            return toast.error('Category is required')
        }
        if (!designation) {
            setdesignation_err(true);
            return toast.error('Designation is required')
        }
        if (designation_err) {
            return toast.error('Designation is required')
        }
        if (!qualification) {
            setqualification_err(true);
            return toast.error('Qualification is required')
        }
        if (qualification_err) {
            return toast.error('Qualification is required')
        }
        if (!no_of_vacancy) {
            setno_of_vacancy_err(true);
            return toast.error('No of Vacancy is required')
        }
        if (no_of_vacancy_err) {
            return toast.error('No of Vacancy is required')
        }
        if (!experience) {
            setexperience_err(true);
            return toast.error('Experience is required')
        }
        if (experience_err) {
            return toast.error('Experience is required')
        }
        if (!key_skills) {
            setkey_skills_err(true);
            return toast.error('Key Skills is required')
        }
        if (key_skills_err) {
            return toast.error('Key Skills is required')
        }
        if (!salary) {
            setsalary_err(true);
            return toast.error('Salary is required')
        }
        if (salary_err) {
            return toast.error('Salary is required')
        }
        if (!status) {
            setstatus_err(true);
            return toast.error('Status is required')
        }
        if (status_err) {
            return toast.error('Status is required')
        }
        if (!posting_date) {
            setposting_date_err(true);
            return toast.error('Posting Date is required')
        }
        if (posting_date_err) {
            return toast.error('Posting Date is required')
        }
        if (!closing_date) {
            setclosing_date_err(true);
            return toast.error('Closing Date is required')
        }
        if (closing_date_err) {
            return toast.error('Closing Date is required')
        }
        if (!(new Date(closing_date).getTime() > new Date(posting_date).getTime())) {
            return toast.error('Closing Date should be greater than posting date')
        }
     
        let data = {
            designation, qualification, no_of_vacancy, experience, key_skills,
            salary, posting_date, closing_date, category_id, status,
            _id: selected_id && selected_id.length > 0 && String(selected_id) !== String(undefined) ? selected_id : ''
        };
        let response = fetchData('/admin/jobs/add', 'post', data);
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
                    get_bobs(tableOptions);
                    setTimeout(() => {
                        setstatus(''); setstatus_err(false);
                        setcategory_id(''); setcategory_id_err(false);
                        setdesignation(''); setdesignation_err(false);
                        setqualification(''); setqualification_err(false);
                        setno_of_vacancy(''); setno_of_vacancy_err(false);
                        setexperience(''); setexperience_err(false);
                        setkey_skills(''); setkey_skills_err(false);
                        setsalary(''); setsalary_err(false);
                        setposting_date_err(false); setclosing_date_err(false);
                        setposting_date(new Date()); setclosing_date(new Date());
                        setselected_id('');
                    }, 1000);
                }
            }
        }).catch((err) => {
            console.log("err", err)
            // return router.push('/admin-login');
        })
    };


    
    let apply_job = (e, data) => {
        e.preventDefault();

        router.push({
            pathname: '/jop-preview',
            query: { job_id: data._id }
        })


        // if(data){
        //     setapplycategoryname(data.name);
        //     setapplycategoryid(data.category_id);
        //     setapplyjobid(data._id);
        // }
        // setOpen(true);
    }


    
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
            applycategoryid, applycovernotes, applyjobid
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
        // return;
        
        let response = fetchData('/site/apply/jobs', 'post', apply);
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
                setOpen(false)
                setTimeout(() => {
                    setapplyname(''); setapplyname_err(false);
                    setapplyemail(''); setapplyemail_err(false);
                    setapplyphone(''); setapplyphone_err(false);
                    setapplyqualification(''); setapplyqualification_err(false);
                    setapplycategoryname(''); setapplycategoryname_err(false);
                    setapplycategoryid(''); setapplycategoryid_err(false);
                    setapplycovernotes(''); setapplycovernotes_err(false);
                    setapplyjobid(''); 
                }, 1000);
            }
        }).catch((err) => {
            console.log("err", err)
            // return router.push('/admin-login');
        })
        
       
    }

    let get_edit_data = (e, _id, type) => {
        e.preventDefault();
        if (_id && _id.length > 0 && String(_id) !== String(undefined)) {
            setselected_id(_id);
            let response = fetchData('/admin/jobs/edit', 'post', { _id });
            response.then((res) => {
                
                if (res && res.data && +res.data.status === 0) {
                    if (res.data.errors && res.data.errors.length > 0 && Array.isArray(res.data.errors)) {
                        res.data.errors.map((item) => {
                            return toast.error(item.msg);
                        })
                    } else {
                        setview_obj({});
                    }
                } else {
                    if (res && res.data && +res.data.status === 1) {
                        setview_obj(res.data.response);
                        if (String(type) === String('view')) {
                            setview_show(true);
                        } else {
                            window.scrollTo(0, 0);
                            setcategory_id(res.data.response && res.data.response.category_id ? String(res.data.response.category_id) : '');
                            setdesignation(res.data.response && res.data.response.designation ? res.data.response.designation : '');
                            setqualification(res.data.response && res.data.response.qualification ? res.data.response.qualification : '');
                            setno_of_vacancy(res.data.response && res.data.response.no_of_vacancy ? res.data.response.no_of_vacancy : '');
                            setexperience(res.data.response && res.data.response.experience ? res.data.response.experience : '');
                            setkey_skills(res.data.response && res.data.response.key_skills ? res.data.response.key_skills : '');
                            setsalary(res.data.response && res.data.response.salary ? res.data.response.salary : '');
                            setstatus(res.data.response && res.data.response.status ? res.data.response.status : '');
                            setposting_date(res.data.response && res.data.response.posting_date ? new Date(res.data.response.posting_date) : '');
                            setclosing_date(res.data.response && res.data.response.closing_date ? new Date(res.data.response.closing_date) : '');
                        }
                    }
                }
            }).catch((err) => {
                console.log("err", err)
                // return router.push('/admin-login');
            });
        }
    };

    let delete_data = (e, _id) => {
        e.preventDefault();
        if (_id && _id.length > 0 && String(_id) !== String(undefined)) {
            setdeleted_id(_id);
        }
    };

    let DeleteJobs = (e) => {
        e.preventDefault();
        if (deleted_id && deleted_id.length > 0 && String(deleted_id) !== String(undefined)) {
            let response = fetchData('/admin/jobs/soft_delete', 'post', { _id: deleted_id });
            response.then((res) => {
                if (res && res.data && +res.data.status === 0) {
                    if (res.data.errors && res.data.errors.length > 0 && Array.isArray(res.data.errors)) {
                        res.data.errors.map((item) => {
                            return toast.error(item.msg);
                        })
                    } else {
                        return toast.error(res.data.response);
                    }
                } else {
                    if (res && res.data && +res.data.status === 1) {
                        toast.success(res.data.response);
                        get_bobs(tableOptions);
                        setdeleted_id('');
                    }
                }
            }).catch((err) => {
                console.log("err", err)
                // return router.push('/admin-login');
            });
        }
    };

    let view_modal_close = (e, value) => {
        e.preventDefault();
        if (String(value) === String(false)) {
            setdeleted_id('')
        }
        setview_show(value);
    };

    let search_onchange = (value) => {
        setsearch(value);
        settableOptions({ ...tableOptions, search: value });
    };

    let category_onchange = (value) => {
        setselected_category(value);
        settableOptions({ ...tableOptions, category_id: value });
    };

    let setPageSize = (value) => {
        settableOptions({ ...tableOptions, limit: value });
    };

    let paginate = (evt, data) => {
        evt.preventDefault();
        setactivePage(data)
        const limit = tableOptions.limit;
        data = Number(data) + 1;
        if (data) {
            settableOptions({ ...tableOptions, skip: data * limit - limit, 'page.current': data, 'page.history': data });
        }
    };

    let status_active = (e, value) => {
        settableOptions({ ...tableOptions, status: value });
    };

    let sort_created = (e, type, order) => {
        e.preventDefault();
        settableOptions({ ...tableOptions, order: Number(order), field: type });
    };

    useEffect(() => {
        get_category();
    }, []);

    useEffect(() => {
        get_bobs(tableOptions);
    }, [tableOptions]);


    return (
        <>
            <ToastContainer position="top-right" autoClose={2500} closeOnClick />
            <Widget title="">
                
                <div className="w-full flex flex-row items-center justify-center">
                    <div className="w-full mt-3 mb-6">
                        <div className={`form-element`}>
                            <div className="form-label">Choose Category </div>
                            <select name="selected_category" value={selected_category} onChange={e => category_onchange(e.target.value)} className={`form-input`} >
                                <option value="" >All Category</option>
                                {
                                    category_arr && category_arr.length > 0 ?
                                        category_arr.map((item, index) => {
                                            return (
                                                <>
                                                    <option key={index} value={item._id} >{item.name}</option>
                                                </>
                                            )
                                        })
                                        : null
                                }
                            </select>
                        </div>
                    </div>
                    {/* <div className="relative w-full max-w-lg mb-2">
                        <input
                            type="search"
                            name="search"
                            value={search}
                            onChange={e => search_onchange(e.target.value)}
                            placeholder="Search..."
                            className="w-full appearance-none h-10 pl-10 pr-5 rounded-full text-sm bg-grey-100 focus:outline-none"
                        />
                        <button type="submit" className="absolute top-0 mt-3 left-0 ml-4">
                            <FiSearch className="stroke-current h-4 w-4" />
                        </button>
                    </div> */}
                </div>
                <table className="table border">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>
                                <span style={{ display: 'inline-flex' }}>
                                    Department
                            {
                                        tableOptions.field === 'name' ?
                                            +tableOptions.order === 1 ? <FaSortNumericUp style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'name', -1)} />
                                                : <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'name', 1)} /> :
                                            <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'name', 1)} />
                                    }
                                </span>
                            </th>
                            <th>
                                <span style={{ display: 'inline-flex' }}>
                                    Designation
                            {
                                        tableOptions.field === 'designation' ?
                                            +tableOptions.order === 1 ? <FaSortNumericUp style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'designation', -1)} />
                                                : <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'designation', 1)} /> :
                                            <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'designation', 1)} />
                                    }
                                </span>
                            </th>

                            <th>
                                <span style={{ display: 'inline-flex' }}>
                                Qualification
                            {
                                        tableOptions.field === 'qualification' ?
                                            +tableOptions.order === 1 ? <FaSortNumericUp style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'qualification', -1)} />
                                                : <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'qualification', 1)} /> :
                                            <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'qualification', 1)} />
                                    }
                                </span>
                            </th>

                            <th>
                                <span style={{ display: 'inline-flex' }}>
                                Experience
                            {
                                        tableOptions.field === 'experience' ?
                                            +tableOptions.order === 1 ? <FaSortNumericUp style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'experience', -1)} />
                                                : <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'experience', 1)} /> :
                                            <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'experience', 1)} />
                                    }
                                </span>
                            </th>

                            <th>
                                <span style={{ display: 'inline-flex' }}>
                                Salary
                            {
                                        tableOptions.field === 'salary' ?
                                            +tableOptions.order === 1 ? <FaSortNumericUp style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'salary', -1)} />
                                                : <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'salary', 1)} /> :
                                            <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'salary', 1)} />
                                    }
                                </span>
                            </th>


                            <th>
                                <span style={{ display: 'inline-flex' }}>
                                    Vacancy
                            {
                                        tableOptions.field === 'no_of_vacancy' ?
                                            +tableOptions.order === 1 ? <FaSortNumericUp style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'no_of_vacancy', -1)} />
                                                : <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'no_of_vacancy', 1)} /> :
                                            <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'no_of_vacancy', 1)} />
                                    }
                                </span>
                            </th>

                            <th>
                                <span style={{ display: 'inline-flex' }}>
                                Closed Date
                            {
                                        tableOptions.field === 'closing_date' ?
                                            +tableOptions.order === 1 ? <FaSortNumericUp style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'closing_date', -1)} />
                                                : <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'closing_date', 1)} /> :
                                            <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'closing_date', 1)} />
                                    }
                                </span>
                            </th>


                            {/* <th>
                                <span style={{ display: 'inline-flex' }}>
                                Key Skills
                            {
                                        tableOptions.field === 'key_skills' ?
                                            +tableOptions.order === 1 ? <FaSortNumericUp style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'key_skills', -1)} />
                                                : <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'key_skills', 1)} /> :
                                            <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'key_skills', 1)} />
                                    }
                                </span>
                            </th> */}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table_arr && table_arr.length > 0 ? (
                            table_arr.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{Number(tableOptions && tableOptions.skip ? tableOptions.skip : 0) + i + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.experience}</td>
                                        <td>{item.salary}</td>
                                        <td>{item.no_of_vacancy}</td>
                                        <td>{item.closing_date}</td>
                                        {/* <td>
                                        <button className="btn btn-default btn-rounded bg-blue-500 hover:bg-blue-600 text-white" type="button" onClick={e => show_skills(e, item)}>
                                                <i className="fa fa-bell-o"></i>Show
                                            </button>

                                            {skillopen && (
                                                <Portal selector="#portal">
                                                <div className="modal-backdrop fade-in"></div>
                                                <div className={`modal show ${background === 'dark' ? 'dark-mode' : ''}`} data-background={background}>
                                                    <div className="relative min-w-sm w-auto mx-auto lg:max-w-5xl" ref={modalRef}>

                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                        <h3 className="text-xl font-semibold">Skills</h3>
                                                        <button
                                                            className="modal-close btn btn-transparent"
                                                            onClick={hide_skills}>
                                                            <FiX size={18} className="stroke-current" />
                                                        </button>
                                                        </div>
                                                        <div className="relative p-4 flex-auto"> {show_skills_data}</div>
                                                        <div className="modal-footer space-x-2">
                                                        <button
                                                            className="btn btn-default btn-rounded bg-blue-500 hover:bg-blue-600 text-white"
                                                            type="button"
                                                            onClick={hide_skills}>
                                                            Close
                                                        </button>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </Portal>
                                            )}
                                        
                                        </td> */}
                                        <td>
                                            {/* <button type="button" title="Apply" id={`view${i}`} onClick={e => get_edit_data(e, item._id, 'view')}>
                                                Apply
                                            </button> {' '} */}
                                             <button className="btn btn-default btn-rounded bg-blue-500 hover:bg-blue-600 text-white" type="button" onClick={e => apply_job(e, item)}>
                                                <i className="fa fa-bell-o"></i>Open
                                            </button>

                                            {open && (
                                                <Portal selector="#portal">
                                                <div className="modal-backdrop fade-in"></div>
                                                <div className={`modal show ${background === 'dark' ? 'dark-mode' : ''}`} data-background={background}>
                                                    <div className="relative min-w-sm w-auto mx-auto lg:max-w-5xl" ref={modalRef}>
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                        <h3 className="text-xl font-semibold">APPLY NOW</h3>
                                                        <button
                                                            className="modal-close btn btn-transparent"
                                                            onClick={hide}>
                                                            <FiX size={18} className="stroke-current" />
                                                        </button>
                                                        </div>
                                                        <div className="relative p-4 flex-auto">
                                                        <div>
                                                        <form>
                                                        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:w-1/2">
                                                                
                                                                <div className="w-full ">
                                                                    <div className={`form-element`}>
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
                                                                        <input
                                                                        type="number"
                                                                        className={`form-input form-input-${applyphone_err ? 'invalid' : 'valid'}`}
                                                                        placeholder="Phone Number"
                                                                        value={applyphone}
                                                                        onChange={e => applyonChange(e, 'applyphone')}
                                                                        />
                                                                        {applyphone_err ? <div className="form-error">phone is required</div> : null}
                                                                    </div>
                                                                </div>
                                                                <div className="w-full ">
                                                                    <div className={`form-element`}>
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
                                                                
                                                            </div>
                                                            <button
                                                                className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded"
                                                                onClick={e => apply_submit(e)}
                                                                disabled={clicked}
                                                            >{"Submit"} </button>
                                                            {' '}
                                                        
                                                        </form>
                                                        </div>
                                                        </div>
                                                        {/* <div className="modal-footer space-x-2">
                                                        <button
                                                            className="btn btn-default btn-rounded bg-blue-500 hover:bg-blue-600 text-white"
                                                            type="button"
                                                            onClick={hide}>
                                                            Close
                                                        </button>
                                                        <button
                                                            className="btn btn-default btn-rounded bg-blue-500 hover:bg-blue-600 text-white"
                                                            type="button"
                                                            onClick={hide}>
                                                            Save Changes
                                                        </button>
                                                        </div> */}
                                                    </div>
                                                    </div>
                                                </div>
                                                </Portal>
                                            )}
                                            
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                                <tr>
                                    <td style={{ textAlign: 'center' }} colSpan={11}>{<h5>No Job available</h5>}</td>
                                </tr>
                            )}
                    </tbody>
                </table>
                <div className="flex flex-row items-center justify-between my-4">
                    <div style={{ wordSpacing: '30px' }}>
                        <Pagination
                            aria-label="Page navigation example"
                            className="pagination-primary"
                            style={{ justifyContent: "flex-end", display: 'flex' }}
                        >
                            <PaginationItem disabled style={{ padding: '15px 20px', border: '1px solid #ddd', fontSize: '14px', color: '#0006b5' }}>
                                <PaginationLink first />
                            </PaginationItem>
                            <PaginationItem disabled style={{ padding: '15px 20px', border: '1px solid #ddd', fontSize: '14px', color: '#0006b5' }}>
                                <PaginationLink previous />
                            </PaginationItem>
                            {[...Array(pages)].map((item, i) => {
                                return (
                                    <PaginationItem
                                        active={i === activePage}
                                        key={i}
                                        style={{ padding: '15px 20px', border: '1px solid #ddd', fontSize: '14px', color: '#0006b5' }}
                                    >
                                        <PaginationLink
                                            onClick={(e) =>
                                                paginate(e, i)
                                            }
                                            style={i === activePage ? { color: '#4caf50' } : { color: '#0006b5' }}
                                        >
                                            {i + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            })}
                            <PaginationItem disabled style={{ padding: '15px 20px', border: '1px solid #ddd', fontSize: '14px', color: '#0006b5' }}>
                                <PaginationLink next />
                            </PaginationItem>
                            <PaginationItem disabled style={{ padding: '15px 20px', border: '1px solid #ddd', fontSize: '14px', color: '#0006b5' }}>
                                <PaginationLink last />
                            </PaginationItem>
                        </Pagination>
                    </div>
                    <span>
                        Page{' '}
                        <b>
                            {tableOptions && tableOptions.skip ? tableOptions.skip + 1 : 1} of {page_count}
                        </b>{' '}
                    </span>
                    <select
                        className="form-select text-sm bg-white dark:bg-grey-800 dark:border-grey-800 outline-none shadow-none focus:shadow-none"
                        value={tableOptions.limit}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value))
                        }}>
                        {[10, 25, 50, 100].map((pageSize) => (
                            <option key={pageSize} value={pageSize}> Show {pageSize} </option>
                        ))}
                    </select>
                </div>
               
            </Widget>
        </>
    );
};
export default Index