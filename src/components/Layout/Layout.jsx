import React from 'react'
import css from './index.module.css'
export const Layout = ({children}) => {
  return (
    <div className={css.container}>
        {children} 
    </div>
  )
}
