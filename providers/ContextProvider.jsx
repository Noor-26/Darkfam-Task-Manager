"use client"
import React from 'react'
import { GlobalProvider } from './globalProvider'

const ContextProvider = ({children}) => {
  return (
    <GlobalProvider>
      {children}
    </GlobalProvider>
  )
}

export default ContextProvider
