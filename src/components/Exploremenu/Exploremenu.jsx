import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'
const Exploremenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text' > menu is a fundamental element in both digital and physical environments, serving as a guide to available options and features. In the context of a restaurant.first when u visited a restaurant the first thing you would see is the menu</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"all":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                    </div>
            
                )
            })
            }
        </div>
      <hr />
    </div>
  )
}

export default Exploremenu
