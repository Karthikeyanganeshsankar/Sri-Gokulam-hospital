import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import fetchData from "../api/api";
import { withRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';

const EmailConfirmation = (props) => {

  let log_out = () => {
    let response = fetchData('/admin/logout', 'post', {});
    response.then((res) => {
      if (res && res.data && String(res.data.status) === '00') {
        return props.router.push('/admin/login')
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
          localStorage.removeItem('SGH');
          sessionStorage.removeItem('SGH');
          setTimeout(() => {
           return props.router.push('/admin/login')
          }, 1500);
        }
      }
    }).catch((err) => {
      console.log("err", err)
      return props.router.push('/admin/login');
    });
  };

  useEffect(() => {
    log_out();
  }, [])

  return (
    <>
      <ToastContainer position="top-right" autoClose={2500} closeOnClick />
      <div className="flex flex-col w-full max-w-xl text-center">
        <img
          className="object-contain w-auto h-64 mb-8"
          src="/images/illustration.svg"
          alt="svg"
        />
        <div className="mb-8 text-center text-grey-900">
          You have succesfully signed out.
      </div>
        <div className="flex w-full">
          <Link href="/admin/login">
            <a className="btn btn-lg btn-rounded btn-block bg-blue-500 hover:bg-blue-600 text-white">
              Go back
          </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default withRouter(EmailConfirmation)
