import React from 'react'
import "./searchitem.css";

const Searchitem = () => {
  return (
    <div className="searchitem">
     <img
        src="i1.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Apartments</h1>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <button>9🌟</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};   
    
export default Searchitem