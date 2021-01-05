import React, {useState} from 'react'
import Validation from '../forms/validation'
import Alert from '../alerts'
import Axios from 'axios'

import { login } from '../../../actions/LoginAction'

const ContactUs = ({message = null}) => {
  const [data, onSubmit] = useState(null)

  // console.log("data--------------------------->>",data);
  Axios.post("http://localhost:8000/site/submit/contactus/details", data)
    .then(response => {
       var res = response.data;
      if(res && res.status == 1){
        console.log('res-----dddddddddddddddddddddddddddddddd----->>>',res.response)
      }else{

      }
    })
  .catch(error => {
    if(error) throw error
  })
  
  let items = [
    {
      label: 'Name*',
      error: {required: 'Please enter your name'},
      name: 'name',
      type: 'text',
      placeholder: 'Name'
    },
    {
      label: 'Email*',
      error: {required: 'Please enter a valid email'},
      name: 'email',
      type: 'email',
      placeholder: 'Email'
    },
    {
      label: 'Phone*',
      error: {required: 'Please enter a job'},
      name: 'phone',
      type: 'number',
      placeholder: 'Phone'
    },
    {
      label: 'Subject*',
      error: {required: 'Please enter a subject'},
      name: 'subject',
      type: 'text',
      placeholder: 'Subject'
    },
    {
      label: 'Reason*',
      error: {required: 'Please enter reason'},
      name: "reason",
      type: 'textarea',
      placeholder: 'Reason of Appoinment'
    }
  ]
  return (
    <>
      <div className="flex flex-col">
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
        
      </div>
    </>
  )
}


export default ContactUs
