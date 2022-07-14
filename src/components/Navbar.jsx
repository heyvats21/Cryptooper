// rafce=>> react  fat arrow function

import React,{useState} from 'react'
import{FaBars,FaTimes} from "react-icons/fa"
import './Navbar.css'

const Navbar = () => {


    const[click,setClick] = useState(false)
    const handleClick=() =>setClick(!click)












  return (
    <div className='header' >
        <div className='container'>
            <h1>Crypt<span className='primary'>ooper</span></h1>
            {/* either this or that */}
            <ul className={click? 'nav-menu' : 'nav-menu'}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Featured</a>
                </li>
                <li>
                    <a href="/">Earn</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
                 </ul>

                 <div className='btn-group'>
                    <button className='btn'>Connect Wallet</button>
                 </div>

                 <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style= {{color:'#333'}}/>) : (<FaBars size={20} style= {{color:'#333'}}/>)}
                    
                 </div>
        </div>
        
    </div>
  )
}

export default Navbar