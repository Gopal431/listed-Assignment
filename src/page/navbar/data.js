import React from 'react';
import { BiUser,BiCircleThreeQuarter,BiPurchaseTagAlt } from 'react-icons/bi';
import { BsCalendar2Date } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';


export const SIDE_BAR_DATA = {
    ADVANCED: [ {
    title: 'Dashboard',
    path: '/',
    icon: <BiCircleThreeQuarter/>,
  },
  {
    title: 'Transactions',
    path: '/pages/transactions',
    icon: <BiPurchaseTagAlt/>,
  },
    {
      title: 'Schedules',
      path: '/pages/schedules',
      icon: <BsCalendar2Date/>,
    },
    {
      title: 'Users',
      path: '/pages/users',
      icon: <BiUser/>,
    },
    {
      title: 'Settings',
      path: '/pages/settings',
      icon: <AiOutlineSetting />,
    },
 
  ]
}