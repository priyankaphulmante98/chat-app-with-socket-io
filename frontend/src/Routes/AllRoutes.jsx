import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Chatpage from '../Pages/Chatpage'
import Homepage from '../Pages/Homepage'



function AllRoutes() {
    return (
       <Routes>
       <Route path="/" element={<Homepage />} />
      <Route path="/chat" element={<Chatpage />} />
    

       </Routes>
    )
}

export default AllRoutes
