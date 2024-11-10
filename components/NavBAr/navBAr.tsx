import React from 'react'
import Link from 'next/link'
import cssStyle from "./navbar.module.css"

const NavBAr = () => {
  return (
    
          <div className={cssStyle.navbar}>
       <ul>
       <li><Link href="/">Home</Link></li>
<li><Link href="/about">About</Link></li>
<li><Link href="/contact">Contact</Link></li>

</ul>

    </div>
  )
}

export default NavBAr
