import React from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import Tab from '../../pages/tabs'

const Navbar = () => {
  const {config} = useSelector(
    state => ({
      config: state.config
    }),
    shallowEqual
  )
  
  return (
    <div className="navbar navbar-1 border-b">
      <div className="navbar-inner w-full flex items-center justify-start">
       <Tab/> 
      </div>
    </div>
  )
}

export default Navbar
