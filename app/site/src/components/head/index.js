import React from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import {FiSettings, FiMenu} from 'react-icons/fi'
import {
  UnderlinedTabs,
 
} from '../../components/tabs'
import Widget from '../../components/widget'
// import Dropdown5 from './dropdown-5'

const Navbar = () => {
  const {config} = useSelector(
    state => ({
      config: state.config
    }),
    shallowEqual
  )
  let {rightSidebar, collapsed} = {...config}
  const dispatch = useDispatch()
  return (
    <div className="navbar navbar-1 border-b">
      <div className="navbar-inner w-full flex items-center justify-start">
      <Widget
      title="Underlined tabs"
      description={
        <span>
          Use the <code>&lt;UnderlinedTabs /&gt;</code> component for underlined
          tabs
        </span>
      }>
      <div className="flex flex-wrap">
        <div className="w-full">
          <UnderlinedTabs tabs={tabs} />
        </div>
      </div>
    </Widget>
        <span className="ml-auto"></span>
        {/* <Dropdown5 /> */}
        <button
          className="btn-transparent flex items-center justify-center h-16 w-8 mx-4"
          onClick={() =>
            dispatch({
              type: 'SET_CONFIG_KEY',
              key: 'rightSidebar',
              value: !rightSidebar
            })
          }>
          <FiSettings size={18} />
        </button>
      </div>
    </div>
  )
}

export default Navbar
