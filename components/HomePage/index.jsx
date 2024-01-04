'use client'
import React from 'react'
import Sidebar from '@/components/Sidebar'
import { useGlobalState } from '@/providers/globalProvider'


const HomePage = ({children}) => {
  const {selectedTheme} = useGlobalState()

  return (
<div className='flex min-h-screen ' theme={selectedTheme}>

    <Sidebar/>
    {children}
</div>
  )
}

export default HomePage
