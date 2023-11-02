import React from 'react'
import { useStateContext } from './AppProvider'
import { TbMassage } from 'react-icons/tb'
function Dash_Massages() {

          const {Message} = useStateContext()


  return (
    <div>
        <div className="dash_tour_headers">
            <h1 className="user-title"> Email Message</h1>
            
            </div>
      <table>
          <thead>
                    <th>ID</th>
                    <th>Full Names</th>
                    <th>Email Address</th>
                    <th>Phone Number</th>
                    <th>Services</th>
                    <th>Massage</th>
                    <th>Replay</th>

                    
                    </thead>
                    <tbody>
                    {Message.map((item, index) => (          
                     <tr key="">
                              <td>{item._id}</td>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.phone}</td>
                              <td>{item.__v}</td>
                              <td>{item.message}</td>
                              <td><button>Replay</button></td>
                              
                              </tr> 
                     
                    ))}       
                    </tbody>
      </table>
    </div>
  )
}

export default Dash_Massages
