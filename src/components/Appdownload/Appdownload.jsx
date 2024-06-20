import React from 'react'
import { assets } from '../../assets/assets'
import './Appdownload.css'

const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For better experience <br /> Tomato app</p>
        <div className="app-download-platform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default Appdownload
