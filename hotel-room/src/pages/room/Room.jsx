import React from 'react'
import "./room.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Searchitem from "../../components/searchitem/Searchitem";


const Room = () => {
  return (
    <div>
      <Navbar />
      <Header type="room" />
      <div className="roomResult">
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
          </div>
      </div>
  )
}

export default Room