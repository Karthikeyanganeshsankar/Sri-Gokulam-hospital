import React, { useEffect, useState } from 'react'
import Widget1 from '../../components/dashboard/widget-1'
import Section from '../../components/dashboard/section'
import SectionTitle from '../../components/dashboard/section-title'
import {
    FiActivity,
    FiUsers,
    FiExternalLink,
    FiClock,
    FiAlertCircle
} from 'react-icons/fi'
import { Bar1 } from '../../components/dashboard/bar-chart'
import { Donut1 } from '../../components/dashboard/donut-chart'
import { Line1 } from '../../components/dashboard/line-chart'
import Dropdown1 from '../../components/widgets/dropdown-1'
import Markets from '../../components/dashboard/markets'
import { List } from '../../components/dashboard/list'
import Tasks from '../../components/tasks'
import { Timeline1 } from '../../components/timelines'
import Notification from '../../components/dashboard/notification';
import fetchData from "../../api/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
    FiHome,
    FiChevronRight,
    FiChevronsRight,
    FiArrowRight
} from 'react-icons/fi'
import { FaRegBuilding, FaFile, FaInbox } from 'react-icons/fa'

const Index = () => {
    let router = useRouter();
    const [total_applied_jobs, settotal_applied_jobs] = useState(0),
        [total_appointments, settotal_appointments] = useState(0),
        [total_contact_us, settotal_contact_us] = useState(0),
        [recent_applied_jobs, setrecent_applied_jobs] = useState([]),
        [recent_appointments, setrecent_appointments] = useState([]),
        [today_appointments, settoday_appointments] = useState([]),
        [recent_contact_us, setrecent_contact_us] = useState([]);

    let home = false, icon = 'arrow', items = [
        { title: 'Home', url: '/admin/dashboard', last: false },
        { title: 'Dashboard', url: '/admin/dashboard', last: true }
    ];

    let get_dashboard_data = () => {
        let response = fetchData('/admin/get/dashboard', 'post', {});
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
                    toast.error(res.data.response);
                }
            } else {
                if (res && res.data && +res.data.status === 1) {
                    settotal_applied_jobs(res.data.response && res.data.response.total_applied_jobs ? res.data.response.total_applied_jobs : 0);
                    settotal_appointments(res.data.response && res.data.response.total_appointments ? res.data.response.total_appointments : 0);
                    settotal_contact_us(res.data.response && res.data.response.total_contact_us ? res.data.response.total_contact_us : 0);
                    setrecent_applied_jobs(res.data.response && res.data.response.recent_applied_jobs ? res.data.response.recent_applied_jobs : []);
                    setrecent_appointments(res.data.response && res.data.response.recent_appointments ? res.data.response.recent_appointments : []);
                    settoday_appointments(res.data.response && res.data.response.today_appointments ? res.data.response.today_appointments : []);
                    setrecent_contact_us(res.data.response && res.data.response.recent_contact_us ? res.data.response.recent_contact_us : []);
                }
            }
        }).catch((err) => {
            console.log("err", err)
            return router.push('/admin/login')
        })
    }

    useEffect(() => {
        get_dashboard_data();
    }, []);
    return (
        <>
            {/* <Notification /> */}
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
            <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
                {/*widget*/}
                <div className="w-full lg:w-1/4" style={{ cursor: 'pointer' }} onClick={e => { e.preventDefault(); router.push('/admin-manage-resume') }}>
                    <Widget1
                        title="Total Jobs"
                        description={total_applied_jobs}
                        right={
                            <FaFile size={24} className="stroke-current text-grey-500" />
                        }
                    />
                </div>
                {/*widget*/}
                <div className="w-full lg:w-1/4" style={{ cursor: 'pointer' }} onClick={e => { e.preventDefault(); router.push('/admin-appointment') }} >
                    <Widget1
                        title="Total Appointments"
                        description={total_appointments}
                        right={
                            <FaRegBuilding size={24} className="stroke-current text-grey-500" />
                        }
                    />
                </div>
                {/*widget*/}
                <div className="w-full lg:w-1/4" style={{ cursor: 'pointer' }} onClick={e => { e.preventDefault(); router.push('/admin-contactus') }}>
                    <Widget1
                        title="Total Messgaes"
                        description={total_contact_us}
                        right={
                            <FaInbox
                                size={24}
                                className="stroke-current text-grey-500"
                            />
                        }
                    />
                </div>
            </div>
        </>
    )
}
export default Index
