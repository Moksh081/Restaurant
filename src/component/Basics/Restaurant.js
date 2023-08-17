import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";



const Restaurant = () => {
    const[menuData, setMenuData] = React.useState(Menu);
    
    const filterItem = (cateogary) =>{
        const updatedList = Menu.filter((curElem)=>{
            return curElem.cateogary === cateogary;
        }) ;
    setMenuData(updatedList);
};
   return(
    <>
      <nav className='navbar'>
        <div className='btn-group'>
            <button className='btn-group__item' onClick={() => filterItem("Breakfast")}>Breakfast</button>
            <button className='btn-group__item' onClick={() => filterItem("Lunch")}>Lunch</button>
            <button className='btn-group__item' onClick={() => filterItem("Dinner")}>Dinner</button>
            <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>
        </div>
      </nav>
       <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant;
