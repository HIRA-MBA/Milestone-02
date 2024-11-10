import React from 'react'
import Image from 'next/image'
import cssStyle from "./Header.module.css"



const Header = () => {
  return (
    <div className={cssStyle.header}>
      <h1 className={cssStyle.text}>AI Coders</h1>
      <Image src="/images/logo.svg" alt='logo' width={80} height={80} />
    </div>
  )
}

export default Header
