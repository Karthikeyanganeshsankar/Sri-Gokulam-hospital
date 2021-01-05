import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Widget from '../components/widget'
import fetchData from "../api/api";
import SectionTitle from '../components/section-title'
import { useRouter } from 'next/router'
import { withRouter } from 'next/router';
import { useSelector, shallowEqual } from 'react-redux';
import { FiEye, FiEdit, FiTrash, FiX, FiSearch, FiToggleLeft, FiToggleRight } from 'react-icons/fi'

const JObPreview = () => {

  let router = useRouter();
  let [job, setjob] = useState(''),
  [view_obj, setview_obj] = useState({}),
  [view_show, setview_show] = useState(false);

  const { palettes } = useSelector((state) => ({ palettes: state.palettes }), shallowEqual)
  let { background } = { ...palettes };

  const jobs_id = router.query.job_id; 
  let apply = (e, data) => {
    e.preventDefault();

    router.push({
        pathname: '/apply-job',
        query: { job_id: router.query.job_id }
    })
}
  
     

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
                    setview_obj(res.data.response);
                    setview_show(true);
                }
            }
        }).catch((err) => {
            console.log("err", err)
        });
}, []);
  return (
    <>

          <ToastContainer position="top-right" autoClose={2500} closeOnClick />
            <SectionTitle title="" subtitle= "Job Details"  />
            <Widget title="">
            {
                    view_show ?
                        <>
                            <div>
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
                                                <div className="form-label">Designation :
                                                <input
                                                        className={`form-control`}
                                                        style={{ float: 'right' }}
                                                        disabled={true}
                                                        value={view_obj && view_obj.designation ? view_obj.designation : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Qualification :
                                                <input
                                                        className={`form-control`}
                                                        style={{ float: 'right' }}
                                                        disabled={true}
                                                        value={view_obj && view_obj.qualification ? view_obj.qualification : ''}
                                                    />
                                                </div>
                                                <div className="form-label">No of Vacancy :
                                                <input
                                                        className={`form-control`}
                                                        style={{ float: 'right' }}
                                                        disabled={true}
                                                        value={view_obj && view_obj.no_of_vacancy ? view_obj.no_of_vacancy : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Experience:
                                                <input
                                                        className={`form-control`}
                                                        style={{ float: 'right' }}
                                                        disabled={true}
                                                        value={view_obj && view_obj.experience ? view_obj.experience : ''}
                                                    />
                                                </div>
                                                <div className="form-label">No of Vacancy :
                                                <input
                                                        className={`form-control`}
                                                        style={{ float: 'right' }}
                                                        disabled={true}
                                                        value={view_obj && view_obj.no_of_vacancy ? view_obj.no_of_vacancy : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Key skills :
                                                <input
                                                        className={`form-control`}
                                                        style={{ float: 'right' }}
                                                        disabled={true}
                                                        value={view_obj && view_obj.key_skills ? view_obj.key_skills : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Salary :
                                                <input
                                                        className={`form-control`}
                                                        style={{ float: 'right' }}
                                                        disabled={true}
                                                        value={view_obj && view_obj.salary ? view_obj.salary : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Posting Date :
                                                <input
                                                        className={`form-control`}
                                                        style={{ float: 'right' }}
                                                        disabled={true}
                                                        value={view_obj && view_obj.posting_date ? view_obj.posting_date : ''}
                                                    />
                                                </div>
                                                <div className="form-label">Closing Date :
                                                <input
                                                        className={`form-control`}
                                                        style={{ float: 'right' }}
                                                        disabled={true}
                                                        value={view_obj && view_obj.closing_date ? view_obj.closing_date : ''}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer space-x-2">
                                            <button
                                                className="btn btn-default btn-rounded bg-blue-500 hover:bg-blue-600 text-white"
                                                type="button"
                                                onClick={e => apply(e, false)}>
                                                Apply </button>
                                        </div>
                            </div>
                        </>
                        : null
                }
           
           
            </Widget>
     
    </>
  )
}


export default withRouter(JObPreview)
