import NavBar from '@/components/Frontend/NavBar'
import React, {ReactNode} from 'react'

export default function layout({children}: {children:ReactNode}) {
  return (
    <div>
        <NavBar />
        {children}


    </div>
  )
}
