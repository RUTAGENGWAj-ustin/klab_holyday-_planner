import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  let url = "https://holiday-planner-4lnj.onrender.com";

  //list of all tour

  const { data: tours, isLoading: ToursLoading } = useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const res = await axios.get(url + `/api/v1/tour/`);
      return res.data;
    },
  });

 // delete tour
  // const [Deletetour,setDeletetour] = useState(null)

  // const { data: Deletetours,} = useQuery({
  //   queryKey: ["tours"],
  //   queryFn: async () => {
  //     const res = await axios.delete(url + `/api/v1/tour/delete/${Deletetour._id}`,
  //    { headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`
  //     },
  //   }
  //     );
  //     return res.data;
  //   },
  // });
  
  
  let userData = JSON.parse(localStorage.getItem("data"));
 let token = userData.access_token;
 let Email = userData.user.email;
 console.log("token:",token);
  const loginMutation = useMutation({
    mutationFn: async (data) => {
      const res = await axios.get(url + `/api/v1/auth/users/getOne/`, data);
      return res.data;
    },
    onError: (error) => {
      console.log("errrrrrrrr",error.response.data.message);
    },
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem("isLogin", JSON.stringify(data));
      window.location.href = "/";
    },
  });
  console.log("hollo")
// list of all users

const { data: fetchUsersData,} = useQuery({
  queryKey: ["users"],
  queryFn: async () => {
    const response = await axios.get(url + `/api/v1/auth/users`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqq",response.data);
    return response.data;
  },
  onSuccess: (data) => {
    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqq",response.data);
  }
});



// loged user
  const{data: Loged_user,isError,isLoading} = useQuery({
    queryKey:["loged_user"],
    queryFn: async () =>{
      const res = await axios.get(url + `/api/v1/auth/users/getOne?fieldName=email&value=${Email} `,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
      );
      if (isError) {
        return<h1>Sorry there is an Error</h1>
      }
      if (isLoading) {
        return<h1>loading...</h1>
      }
      console.log("asdfghjk",res.data);
      return res.data;    
    },
  })
  console.log("iiiiiiiiiiiiiiiiiiiiiiiiii", Loged_user);

  //updete user

  const {data: Update_user} = useQuery({
    queryKey:["update_user"],
    queryFn: async () =>{
      const response = await axios.put(url+ `/api/v1/auth/users/update/:${id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
      )
    }
  });
/*list of all massage contact*/
  const {data: Message} = useQuery({
    queryKey:["Message"],
    queryFn: async () =>{
      const response = await axios.get(url+ `/api/v1/contact`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
      )
      console.log("contact",response.data);
      return (response.data);
     
    }
  });

  
  return (
    <AppContext.Provider value={{ tours, loginMutation, Loged_user,fetchUsersData,Message }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export const useStateContext = () => useContext(AppContext)