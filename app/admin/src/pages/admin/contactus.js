import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Widget from '../../components/widget'
import fetchData from "../../api/api";
import SectionTitle from '../../components/section-title'
import Widget1 from '../../components/dashboard/widget-1'
import { useSelector, shallowEqual } from 'react-redux';
import { FiEye, FiEdit, FiTrash, FiX, FiSearch, FiToggleLeft, FiToggleRight } from 'react-icons/fi'
import { Popover, PopoverHeader, PopoverBody, Pagination, PaginationLink, PaginationItem } from "reactstrap";
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
    FiHome,
    FiChevronRight,
    FiChevronsRight,
    FiArrowRight
} from 'react-icons/fi'
import { FaSortNumericDown, FaSortNumericUp } from 'react-icons/fa'

const Index = () => {
    let router = useRouter();
    let [selected_id, setselected_id] = useState(''),
        [deleted_id, setdeleted_id] = useState(''),
        [search, setsearch] = useState(''),
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
            status: ""
        }),
        [table_arr, settable_arr] = useState([]),
        [view_obj, setview_obj] = useState({}),
        [pages, setpages] = useState(0),
        [page_count, setpage_count] = useState(0),
        [activePage, setactivePage] = useState(0),
        [view_show, setview_show] = useState(false);

    const { palettes } = useSelector((state) => ({ palettes: state.palettes }), shallowEqual)
    let { background } = { ...palettes };

    let home = false, icon = 'arrow', items = [
        { title: 'Home', url: '/admin/dashboard', last: false },
        { title: 'Messages', url: '/admin/contactus', last: true }
    ];

    let get_contact_us = (tabops) => {
        let response = fetchData('/admin/contactus/list', 'post', tabops);
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
                    setpages(Math.ceil(Number(res.data.response.fullcount) / 10));
                }
            }
        }).catch((err) => {
            console.log("err", err)
            return router.push('/admin/login');
        });
    };

    let get_edit_data = (e, _id) => {
        e.preventDefault();
        if (_id && _id.length > 0 && String(_id) !== String(undefined)) {
            setselected_id(_id);
            let response = fetchData('/admin/contactus/edit', 'post', { _id });
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
                        setview_show(true);
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
            let response = fetchData('/admin/contactus/soft_delete', 'post', { _id: deleted_id });
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
                        get_contact_us(tableOptions);
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
        get_contact_us(tableOptions);
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
            <SectionTitle title="" subtitle='Message' />
            <Widget title="">
                {/* <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
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
                </div> */}
                <div className="w-full flex flex-row items-center justify-center">
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
                                    Name
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
                                    Email
                            {
                                        tableOptions.field === 'email' ?
                                            +tableOptions.order === 1 ? <FaSortNumericUp style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'email', -1)} />
                                                : <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'email', 1)} /> :
                                            <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'email', 1)} />
                                    }
                                </span>
                            </th>
                            <th>  <span style={{ display: 'inline-flex' }}>
                                Phone Number
                            {
                                    tableOptions.field === 'phone' ?
                                        +tableOptions.order === 1 ? <FaSortNumericUp style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'phone', -1)} />
                                            : <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'phone', 1)} /> :
                                        <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'phone', 1)} />
                                }
                            </span>
                            </th>
                            <th>   <span style={{ display: 'inline-flex' }}>
                                Subject
                            {
                                    tableOptions.field === 'subject' ?
                                        +tableOptions.order === 1 ? <FaSortNumericUp style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'subject', -1)} />
                                            : <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'subject', 1)} /> :
                                        <FaSortNumericDown style={{ margin: '0 5px', cursor: 'pointer' }} onClick={e => sort_created(e, 'subject', 1)} />
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
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.subject}</td>
                                        <td>
                                            <button type="button" title="View" id={`view${i}`} onClick={e => get_edit_data(e, item._id)}>
                                                <FiEye className="stroke-current" />
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
                                            <h3 className="text-xl font-semibold">{'View Messages'}</h3>
                                            <button
                                                className="modal-close btn btn-transparent"
                                                onClick={e => view_modal_close(e, false)}>
                                                <FiX size={18} className="stroke-current" />
                                            </button>
                                        </div>
                                        <div className="relative p-4 flex-auto" style={{ width: '600px' }}>
                                            <div className={`form-element`}>
                                                <div className="form-label">Name :
                                                <input
                                                        className={`form-control`}
                                                        style={{ float: 'right' }}
                                                        disabled={true}
                                                        value={view_obj && view_obj.name ? view_obj.name : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Email :
                                                <input
                                                        className={`form-control`}
                                                        style={{ float: 'right' }}
                                                        disabled={true}
                                                        value={view_obj && view_obj.email ? view_obj.email : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Phone Number :
                                                <input
                                                        className={`form-control`}
                                                        style={{ float: 'right' }}
                                                        disabled={true}
                                                        value={view_obj && view_obj.phone ? view_obj.phone : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Subject :
                                                <input
                                                        className={`form-control`}
                                                        disabled={true}
                                                        style={{ float: 'right' }}
                                                        value={view_obj && +view_obj.subject ? view_obj.subject : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Message :
                                                <input
                                                        className={`form-control`}
                                                        disabled={true}
                                                        style={{ float: 'right' }}
                                                        value={view_obj && +view_obj.message ? view_obj.message : ''}
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
