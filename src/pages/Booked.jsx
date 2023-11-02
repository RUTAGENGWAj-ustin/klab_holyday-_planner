import React from 'react'
import { useStateContext } from './AppProvider'

function Booked() {
                  
       const {Booked} = useStateContext()    
       console.log("efmdlksv",Booked);       
                  
  return (
    <div>
                   <div className="dash_tour_headers">
            <h1 className="user-title"> Booked</h1>
            
            </div>
    
      <table>
            <thead>
              <tr key="">
                <th>Status</th>
                <th>TourID</th>
                <th>UserID</th>
                <th>Is paid</th>
                <th>ID</th>
                <th>Date</th>
                
              </tr>
              </thead>
              <tbody> 
          {Booked.map((item, index) => (
             <tr key={item._id}>
              <td>{item.status}</td>
              <td>{item.tourID}</td>
              <td>{item.userID}</td>
              <td>{item.isPaid}</td>
              <td>{item._id}</td>
              <td>{item.date}</td>
          
         
          
         
           </tr>
          
                    ))} 
          
      </tbody>
      </table>
    </div>
  )
}

export default Booked
