import React, { useState, useEffect } from 'react'
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Widget from '../../components/widget'
import fetchData from "../../api/api";
import SectionTitle from '../../components/section-title'
import Datetime from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Widget1 from '../../components/dashboard/widget-1'
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
import { Editor } from "@tinymce/tinymce-react";

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

    const { palettes } = useSelector((state) => ({ palettes: state.palettes }), shallowEqual)
    let { background } = { ...palettes };

    let home = false, icon = 'arrow', items = [
        { title: 'Home', url: '/admin/dashboard', last: false },
        { title: 'Post jobs', url: '/admin/jobs', last: true }
    ];

    let get_category = () => {
        let response = fetchData('/admin/get/category', 'post', {});
        response.then((res) => {
            if (res && res.data && String(res.data.status) === '00') {
                return router.push('/admin/login')
            }
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
            return router.push('/admin/login');
        });
    };

    let get_bobs = (tabops) => {
        let response = fetchData('/admin/jobs/list', 'post', tabops);
        response.then((res) => {
            if (res && res.data && String(res.data.status) === '00') {
                return router.push('/admin/login')
            }
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
            return router.push('/admin/login');
        });
    }

    let onChange = (e, name) => {
        if (String(name) === String('category_id')) {
            if (!e.target.value) {
                setcategory_id_err(true);
            } else {
                setcategory_id_err(false);
            }
            setcategory_id(e.target.value);
        }
        if (String(name) === String('designation')) {
            if (!e.target.value) {
                setdesignation_err(true);
            } else {
                setdesignation_err(false);
            }
            setdesignation(e.target.value);
        }
        if (String(name) === String('qualification')) {
            if (!e.target.value) {
                setqualification_err(true);
            } else {
                setqualification_err(false);
            }
            setqualification(e.target.value);
        }
        if (String(name) === String('no_of_vacancy')) {
            if (!e.target.value) {
                setno_of_vacancy_err(true);
            } else {
                setno_of_vacancy_err(false);
            }
            setno_of_vacancy(e.target.value);
        }
        if (String(name) === String('experience')) {
            if (!e.target.value) {
                setexperience_err(true);
            } else {
                setexperience_err(false);
            }
            setexperience(e.target.value);
        }
        // if (String(name) === String('key_skills')) {
        //     if (!e.target.value) {
        //         setkey_skills_err(true);
        //     } else {
        //         setkey_skills_err(false);
        //     }
        //     setkey_skills(e.target.value);
        // }
        if (String(name) === String('salary')) {
            if (!e.target.value) {
                setsalary_err(true);
            } else {
                setsalary_err(false);
            }
            setsalary(e.target.value);
        }
        if (String(name) === String('status')) {
            if (!e.target.value) {
                setstatus_err(true);
            } else {
                setstatus_err(false);
            }
            setstatus(e.target.value);
        }
        if (String(name) === String('posting_date')) {
            if (!e) {
                setposting_date_err(true);
            } else {
                setposting_date_err(false);
            }
            setposting_date(e);
        }
        if (String(name) === String('closing_date')) {
            if (!e) {
                setclosing_date_err(true);
            } else {
                setclosing_date_err(false);
            }
            setclosing_date(e);
        }
    };

    let clear_for = (e) => {
        e.preventDefault();
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
    };

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
        setclicked(true);
        let data = {
            designation, qualification, no_of_vacancy, experience, key_skills,
            salary, posting_date, closing_date, category_id, status,
            _id: selected_id && selected_id.length > 0 && String(selected_id) !== String(undefined) ? selected_id : ''
        };
        let response = fetchData('/admin/jobs/add', 'post', data);
        response.then((res) => {
            setclicked(false);
            if (res && res.data && String(res.data.status) === '00') {
                return router.push('/admin/login')
            }
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
            return router.push('/admin/login');
        })
    };

    let get_edit_data = (e, _id, type) => {
        e.preventDefault();
        if (_id && _id.length > 0 && String(_id) !== String(undefined)) {
            setselected_id(_id);
            let response = fetchData('/admin/jobs/edit', 'post', { _id });
            response.then((res) => {
                if (res && res.data && String(res.data.status) === '00') {
                    return router.push('/admin/login')
                }
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
                return router.push('/admin/login');
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
                return router.push('/admin/login');
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

    let handleEditorChange = value => {
        if (!value.level.content) {
            setkey_skills_err(true);
        } else {
            setkey_skills_err(false);
        }
        setkey_skills(value.level.content);
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
            <div className="flex flex-row mb-4">
                <div className="w-full">
                    <nav className="w-full flex">
                        <ol className="list-none flex flex-row items-center justify-start">
                            {home && (
                                <li className="mr-2 flex items-center">
                                    <FiHome className="h-3 w-3 stroke-current" />
                                </li>
                            )}
                            {items.map((item, i) => (
                                <li className="flex items-center" key={i}>
                                    <Link href={item.url}>
                                        <a className="mr-2">{item.title}</a>
                                    </Link>
                                    {!item.last && icon === 'arrow' && (
                                        <FiArrowRight className="h-3 w-3 mr-2 stroke-current" />
                                    )}
                                    {!item.last && icon === 'chevron' && (
                                        <FiChevronRight className="h-3 w-3 mr-2 stroke-current" />
                                    )}
                                    {!item.last && icon === 'chevrons' && (
                                        <FiChevronsRight className="h-3 w-3 mr-2 stroke-current" />
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>
            </div>
            <SectionTitle title="" subtitle={!view_show && selected_id && selected_id.length > 0 && String(selected_id) !== String(undefined) ? 'Edit Jobs' : "Add Jobs"} />
            <Widget title="">
                <form>
                    <div className="flex flex-col lg:flex-row lg:flex-wrap w-full lg:w-1/2">
                        <div className="w-full mt-3 mb-6">
                            <div className={`form-element`}>
                                <div className="form-label">Choose Category <span className="form-error">*</span> </div>
                                <select name="category_id" value={category_id} onChange={e => onChange(e, 'category_id')} className={`form-input form-input-${category_id_err ? 'invalid' : 'valid'}`} >
                                    <option value="" >Choose Category</option>
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
                                {category_id_err ? <div className="form-error">Category is required</div> : null}
                            </div>
                        </div>
                        <div className="w-full mt-3 mb-6">
                            <div className={`form-element`}>
                                <div className="form-label">Designation <span className="form-error">*</span></div>
                                <input
                                    name="designation"
                                    type="text"
                                    className={`form-input form-input-${designation_err ? 'invalid' : 'valid'}`}
                                    placeholder="Designation"
                                    value={designation}
                                    onChange={e => onChange(e, 'designation')}
                                />
                                {designation_err ? <div className="form-error">Designation is required</div> : null}
                            </div>
                        </div>
                        <div className="w-full mt-3 mb-6">
                            <div className={`form-element`}>
                                <div className="form-label">Qualification <span className="form-error">*</span></div>
                                <input
                                    name="qualification"
                                    type="text"
                                    className={`form-input form-input-${qualification_err ? 'invalid' : 'valid'}`}
                                    placeholder="Qualification"
                                    value={qualification}
                                    onChange={e => onChange(e, 'qualification')}
                                />
                                {qualification_err ? <div className="form-error">Qualification is required</div> : null}
                            </div>
                        </div>
                        <div className="w-full mt-3 mb-6">
                            <div className={`form-element`}>
                                <div className="form-label">No of Vacancy <span className="form-error">*</span></div>
                                <input
                                    name="no_of_vacancy"
                                    type="text"
                                    className={`form-input form-input-${no_of_vacancy_err ? 'invalid' : 'valid'}`}
                                    placeholder="No of Vacancy"
                                    value={no_of_vacancy}
                                    onChange={e => onChange(e, 'no_of_vacancy')}
                                />
                                {no_of_vacancy_err ? <div className="form-error">No of Vacancy is required</div> : null}
                            </div>
                        </div>
                        <div className="w-full mt-3 mb-6">
                            <div className={`form-element`}>
                                <div className="form-label">Experience <span className="form-error">*</span></div>
                                <input
                                    name="experience"
                                    type="text"
                                    className={`form-input form-input-${experience_err ? 'invalid' : 'valid'}`}
                                    placeholder="Experience"
                                    value={experience}
                                    onChange={e => onChange(e, 'experience')}
                                />
                                {experience_err ? <div className="form-error">Experience is required</div> : null}
                            </div>
                        </div>
                        <div className="w-full mt-3 mb-6">
                            <div className={`form-element`}>
                                <div className="form-label">Key Skills <span className="form-error">*</span></div>
                                {/* <input
                                    name="key_skills"
                                    type="text"
                                    className={`form-input form-input-${key_skills_err ? 'invalid' : 'valid'}`}
                                    placeholder="Key Skills"
                                    value={key_skills}
                                    onChange={e => onChange(e, 'key_skills')}
                                /> */}
                                <Editor
                                    apiKey={'zdictuwfz2lmhm9gnyn6196cv047wsklol3hu1268qe0n8qy'}
                                    name="key_skills"
                                    className={`form-input form-input-${key_skills_err ? 'invalid' : 'valid'}`}
                                    initialValue={key_skills}
                                    init={{
                                        menubar: true,
                                        cache_suffix: '?v=4.1.6',
                                        plugins: [
                                            'casechange advlist autolink preview anchor',
                                            'insertdatetime media table toc paste wordcount pagebreak print', 'code codesample link lists fullscreen fullpage hr nonbreaking', 'image imagetools', 'help'
                                        ],
                                        toolbar:
                                            'fontselect fontsizeselect formatselect | bold italic forecolor backcolor alignleft aligncenter alignright alignjustify |\
                                                table fullscreen fullpage bullist | \ numlist | \
                                                undo redo  | \
                                                pagebreak | preview print | \
                                                 code paste link hr nonbreaking | image | help | strikethrough blockquote codesample casechange',
                                        default_link_target: "_blank",
                                        height: 460,
                                        visual: false
                                    }}
                                    onChange={e => handleEditorChange(e, 'key_skills')}
                                    value={key_skills}
                                />
                                {key_skills_err ? <div className="form-error">Key Skills is required</div> : null}
                            </div>
                        </div>
                        <div className="w-full mt-3 mb-6">
                            <div className={`form-element`}>
                                <div className="form-label">Salary <span className="form-error">*</span></div>
                                <input
                                    name="salary"
                                    type="text"
                                    className={`form-input form-input-${salary_err ? 'invalid' : 'valid'}`}
                                    placeholder="Salary"
                                    value={salary}
                                    onChange={e => onChange(e, 'salary')}
                                />
                                {salary_err ? <div className="form-error">Salary is required</div> : null}
                            </div>
                        </div>
                        <div className="w-full mt-3 mb-6">
                            <div className={`form-element`}>
                                <div className="form-label">Posting Date <span className="form-error">*</span></div>
                                {/* <Datetime
                                    className={`form-input form-input-${posting_date_err ? 'invalid' : 'valid'}`}
                                    value={posting_date}
                                    defaultValue={new Date()}
                                    dateFormat="DD-MM-YYYY"
                                    timeFormat={false}
                                    input={true}
                                    inputProps={{
                                        className: 'form-input',
                                        placeholder: 'Select date'
                                    }}
                                    viewMode={'days'}
                                    onChange={e => onChange(e, 'posting_date')}
                                /> */}
                                <Datetime
                                    className={`form-input form-input-${posting_date_err ? 'invalid' : 'valid'}`}
                                    minDate={new Date()}
                                    dateFormat='dd-MM-yyyy'
                                    selected={posting_date}
                                    onChange={e => onChange(e, 'posting_date')}
                                />

                                {posting_date_err ? <div className="form-error">Posting Date is required</div> : null}
                            </div>
                        </div>
                        <div className="w-full mt-3 mb-6">
                            <div className={`form-element`}>
                                <div className="form-label">Closing Date <span className="form-error">*</span></div>
                                {/* <Datetime
                                    className={`form-input form-input-${closing_date_err ? 'invalid' : 'valid'}`}
                                    value={closing_date}
                                    defaultValue={new Date()}
                                    dateFormat="DD-MM-YYYY"
                                    timeFormat={false}
                                    input={true}
                                    inputProps={{
                                        className: 'form-input',
                                        placeholder: 'Select date'
                                    }}
                                    viewMode={'days'}
                                    onChange={e => onChange(e, 'closing_date')}
                                /> */}
                                <Datetime
                                    className={`form-input form-input-${closing_date_err ? 'invalid' : 'valid'}`}
                                    minDate={new Date()}
                                    dateFormat='dd-MM-yyyy'
                                    selected={closing_date}
                                    onChange={e => onChange(e, 'closing_date')}
                                />
                                {closing_date_err ? <div className="form-error">Closing Date is required</div> : null}
                            </div>
                        </div>
                        <div className="w-full mt-3 mb-6">
                            <div className={`form-element`}>
                                <div className="form-label">Status <span className="form-error">*</span> </div>
                                <select name="status" value={status} onChange={e => onChange(e, 'status')} className={`form-input form-input-${status_err ? 'invalid' : 'valid'}`} >
                                    <option value="" >Select Status</option>
                                    <option value="1">Active</option>
                                    <option value="2" >In-Active</option>
                                </select>
                                {status_err ? <div className="form-error">Status is required</div> : null}
                            </div>
                        </div>
                    </div>
                    <button
                        className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded"
                        onClick={e => submit(e)}
                        disabled={clicked}
                    >{!view_show && selected_id && selected_id.length > 0 && String(selected_id) !== String(undefined) ? 'Update' : "Submit"} </button>
                    {' '}
                    <button
                        className="btn btn-default bg-red-500 hover:bg-red-600 text-white btn-rounded"
                        onClick={e => clear_for(e)}
                    >Reset </button>
                </form>
            </Widget>
            <Widget title="">
                <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
                    <div className="w-full lg:w-1/4">

                    </div>
                    <div className="w-full lg:w-1/4" style={{ cursor: 'pointer' }} onClick={e => status_active(e, 1)}>
                        <Widget1
                            title="Active"
                            description={active_statu}
                            right={
                                <FiToggleRight size={24} className="stroke-current text-grey-500" />
                            }
                        />
                    </div>
                    <div className="w-full lg:w-1/4" style={{ cursor: 'pointer' }} onClick={e => status_active(e, 2)} >
                        <Widget1
                            title="In-Active"
                            description={inactive_status}
                            right={
                                <FiToggleLeft size={24}
                                    className="stroke-current text-grey-500"
                                />
                            }
                        />
                    </div>
                    <div className="w-full lg:w-1/4">
                    </div>
                </div>
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
                    <div className="relative w-full max-w-lg mb-2">
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
                    </div>
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
                                    Posted Date
                            {
                                        tableOptions.field === 'posting_date' ?
                                            +tableOptions.order === 1 ? <FaSortNumericUp style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'posting_date', -1)} />
                                                : <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'posting_date', 1)} /> :
                                            <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'posting_date', 1)} />
                                    }
                                </span>
                            </th>
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
                                        <td>{item.no_of_vacancy}</td>
                                        <td>{item.posting_date}</td>
                                        <td>
                                            <button type="button" title="View" id={`view${i}`} onClick={e => get_edit_data(e, item._id, 'view')}>
                                                <FiEye className="stroke-current" />
                                            </button> {' '}
                                            <button type="button" title="Edit" id={`edit${i}`} onClick={e => get_edit_data(e, item._id, 'edit')}>
                                                <FiEdit className="stroke-current" />
                                            </button> {' '}
                                            <button type="button" title="Delete" id={`delete${i}`} onClick={e => delete_data(e, item._id)}>
                                                <FiTrash className="stroke-current" />
                                            </button> {' '}
                                            <Popover isOpen={String(item._id) === String(deleted_id)} placement="left" target={`delete${i}`}>
                                                <PopoverHeader>Confirmation</PopoverHeader>
                                                <PopoverBody>
                                                    <h6>Are You Sure, You Want To Delete ?</h6>
                                                    <button type="button" title="Yes" className="btn btn-default btn-outlined bg-transparent text-red-500 hover:text-red-700 border-red-500 hover:border-red-700 btn-rounded" color="success" onClick={(e) => { DeleteJobs(e) }}>
                                                        Yes </button> {' '}
                                                    <button type="button" title="No" className="btn btn-default btn-outlined bg-transparent text-blue-500 hover:text-blue-700 border-blue-500 hover:border-blue-700 btn-rounded" color="secondary" onClick={(e) => { e.preventDefault(); setdeleted_id('') }}>
                                                        No </button>
                                                </PopoverBody>
                                            </Popover>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                                <tr>
                                    <td style={{ textAlign: 'center' }} colSpan={11}>{<h5>No record available</h5>}</td>
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
                {
                    view_show ?
                        <>
                            <div className="modal-backdrop fade-in"></div>
                            <div className={`modal show ${background === 'dark' ? 'dark-mode' : ''}`} data-background={background}>
                                <div className="relative min-w-sm w-auto mx-auto lg:max-w-5xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="text-xl font-semibold">{'View Jobs'}</h3>
                                            <button
                                                className="modal-close btn btn-transparent"
                                                onClick={e => view_modal_close(e, false)}>
                                                <FiX size={18} className="stroke-current" />
                                            </button>
                                        </div>
                                        <div className="relative p-4 flex-auto" style={{ width: '600px' }}>
                                            <div className={`form-element`}>
                                                <div className="form-label">Category :
                                                <input
                                                        className={`form-control`}
                                                        style={{ float: 'right' }}
                                                        disabled={true}
                                                        value={view_obj && view_obj.name ? view_obj.name : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Designation :
                                                <input
                                                        className={`form-control`}
                                                        disabled={true}
                                                        style={{ float: 'right' }}
                                                        value={view_obj && view_obj.designation ? view_obj.designation : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Qualification :
                                                <input
                                                        className={`form-control`}
                                                        disabled={true}
                                                        style={{ float: 'right' }}
                                                        value={view_obj && view_obj.qualification ? view_obj.qualification : ''}
                                                    />
                                                </div>
                                                <div className="form-label">No of Vacancy :
                                                <input
                                                        className={`form-control`}
                                                        disabled={true}
                                                        style={{ float: 'right' }}
                                                        value={view_obj && view_obj.no_of_vacancy ? view_obj.no_of_vacancy : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Experience :
                                                <input
                                                        className={`form-control`}
                                                        disabled={true}
                                                        style={{ float: 'right' }}
                                                        value={view_obj && view_obj.experience ? view_obj.experience : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Key Skills :
                                                    <div className="text-container" style={{ width: '154px', margin: '2px', float: 'right', padding: 0, lineHeight: 'inherit', color: 'inherit' }} dangerouslySetInnerHTML={{ __html: view_obj && view_obj.key_skills ? view_obj.key_skills : '' }} />
                                                </div>
                                                {/* <div className="form-label">Key Skills :
                                                <input
                                                        className={`form-control`}
                                                        disabled={true}
                                                        style={{ float: 'right' }}
                                                        value={view_obj && view_obj.key_skills ? view_obj.key_skills : ''}
                                                    />
                                                </div> */}
                                                <div className="form-label">Salary :
                                                <input
                                                        className={`form-control`}
                                                        disabled={true}
                                                        style={{ float: 'right' }}
                                                        value={view_obj && view_obj.salary ? view_obj.salary : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Posting Date :
                                                <input
                                                        className={`form-control`}
                                                        disabled={true}
                                                        style={{ float: 'right' }}
                                                        value={view_obj && view_obj.posting_date ? moment(view_obj.posting_date).format('DD-MM-YYYY') : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Closing Date :
                                                <input
                                                        className={`form-control`}
                                                        disabled={true}
                                                        style={{ float: 'right' }}
                                                        value={view_obj && view_obj.closing_date ? moment(view_obj.closing_date).format('DD-MM-YYYY') : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Status :
                                                <input
                                                        className={`form-control`}
                                                        disabled={true}
                                                        style={{ float: 'right' }}
                                                        value={view_obj && +view_obj.status === 1 ? 'Active' : 'In-active'}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer space-x-2">
                                            <button
                                                className="btn btn-default btn-rounded bg-blue-500 hover:bg-blue-600 text-white"
                                                type="button"
                                                onClick={e => view_modal_close(e, false)}>
                                                Close </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        : null
                }
            </Widget>
        </>
    );
};
export default Index