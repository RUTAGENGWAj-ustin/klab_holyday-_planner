import React from "react";
import Tours from "./list-of-all-tour-arr";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Notiflix from 'notiflix';
import Create_tour from "./Create_tour";
import Edit_tour from "./Edit_tour";



const Dash_tour = () =>{

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [tourToDelete, setTourToDelete] = useState(null);
  const [edittour, seteditTour] = useState(null);
  const [EditTour,setEditTour] = useState(false);
  const [createTour,setCreateTour] = useState(false)

    const [posts,setPosts] = useState([]);


    const { data ,isLoading,isError} = useQuery({
      queryKey: ["tours"],
      queryFn: async () => {
        const res = await Axios.get('https://holiday-planner-4lnj.onrender.com/api/v1/tour/')
         localStorage.setItem("tour",JSON.stringify((res.data)))
        console.log(res.data)
        setPosts(res.data)
        return res.data;

        
   
      },
    
    });
    if (isError) {
      return<h1>Sorry there is an Error</h1>
    }
    if (isLoading) {
      return<h1>loading...</h1>
    }
  
   

    
    //  const { tours, deleteTour } = usestecontext();
   
      const handleConfirmDelete = async() => {
        try {
     Notiflix.Confirm.show(
      'Confirm delete tour',
      'Do you agree with me?',
      'Yes',
      'No',
      async() => {
        const res =  await Axios.delete(`https://holiday-planner-4lnj.onrender.com/api/v1/tour/delete/${tourToDelete._id}`,{
          headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
          }
        })
        window.location.reload()
      },
      () => {
      alert('If you say so...');
      },
      {
      },
      );
        } catch (error) {
          console.log(error);
        }
      };
      const handleDeleteClick = (tours) => {
        setTourToDelete(tours);
        handleConfirmDelete()
        // setShowDeleteConfirm(true);
      };
      const handleCancelDelete = () => {
        setShowDeleteConfirm(false);
      };
      const handleCreateClick = () => {
        setCreateTour((previsEditMadel) => !previsEditMadel);
      }
      const handleEditClick = (item) => {
       seteditTour(item)
       console.log(item)
        setEditTour((previsEditMadel) => !previsEditMadel);
      }
return(
    
          <div>
            {createTour && <Create_tour handleEditClick = {handleCreateClick}/>}
            {EditTour && <Edit_tour handleEditClick = {handleEditClick}  item = {edittour}/>}
            <div className="dash_tour_headers">
            <h1 className="user-title">List of tour</h1>
            <button onClick={handleCreateClick}>Create tour</button>
            </div>
            <div className="tour-card dash">
            <table>
            <thead>
              <tr key="">
                <th>backdropImage</th>
                <th>Title</th>
                <th>Description</th>
                <th>destination</th>
                <th>Duration</th>
                <th>GroupSize</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              </thead>
              <tbody> 
          {posts.map((item, index) => (
             <tr key={item._id}>
              <td><img src={item.backdropImage} alt=""  className="table_tour_img"/></td>
              <td>{item.Title}</td>
              <td>{item.Description}</td>
          <td>{item.destination}</td>
          <td>{item.Duration}</td>
          <td>{item.GroupSize}</td>
          <td>{item.Price}</td>
          <td><button onClick={() => handleEditClick(item)}>Edit</button></td>
           <td><button onClick={() => handleDeleteClick(item)}>Delete</button></td>
           </tr>
          
                    ))} 
                        {showDeleteConfirm && (
        <div className="popup">
          <p>Are you sure you want to delete {tourToDelete._id}?</p>
          <button onClick={handleConfirmDelete}>OK</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      )} 
      </tbody>
      </table>
      </div> 
                    </div>
);
}
export default Dash_tour
