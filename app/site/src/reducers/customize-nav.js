import React from 'react'
import {
  FiToggleLeft,
  FiList,
  FiActivity,
  FiCalendar,
  FiStar,
  FiDroplet,
  FiGrid,
  FiClock,
  FiCopy,
  FiUser,
  FiPieChart,
  FiCompass,
  FiHelpCircle,
  FiShoppingCart,
  FiHome
} from 'react-icons/fi'
const initialState = [
  {
    title: 'Applications',
    items: [
      {
        url: '/',
        icon: <FiCompass size={20} />,
        title: 'Dashboard',
        items: []
      },
      {
        url: '/users',
        icon: <FiUser size={20} />,
        title: 'Users',
        items: []
      }
    ]
  }
]

export default function customizeNav(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
