import React from 'react'
import "./propertyList.css"

const propertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
         <img src="v1.jpg" alt="" className="pListImg" /> 
         <div className="pListTitles ">
           <h1>Hotels</h1> 
        </div> 
        </div>
        <div className="pListItem">
         <img src="v4.jpg" alt="" className="pListImg" /> 
         <div className="pListTitles ">
           <h1>Decoration</h1> 
        </div> 
        </div>
        <div className="pListItem">
         <img src="v2.jpg" alt="" className="pListImg" /> 
         <div className="pListTitles ">
           <h1>Hotels</h1> 
        </div> 
        </div>
        <div className="pListItem">
         <img src="v3.jpg" alt="" className="pListImg" /> 
         <div className="pListTitles ">
           <h1>Hotels</h1> 
        </div> 
        </div>
    </div>
  )
}

export default propertyList