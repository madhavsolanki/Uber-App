/* eslint-disable no-unused-vars */
import React from 'react'
import { createContext } from 'react'

export const UserDataContext = createContext();

const UserContext = ({children}) => {
  const user = 'Madhav';
  return (
    <div>
      {/* 2:53 times */}
        {children}
    </div>
  )
}

export default UserContext