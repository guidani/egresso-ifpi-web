import React, { useContext } from 'react'
import { UserContext } from '../../../context/AuthProvider'

const useAuth = () => {
  return useContext(UserContext)
}

export default useAuth