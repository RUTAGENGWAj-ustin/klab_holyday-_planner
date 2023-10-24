import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  let url = "https://holiday-planner-4lnj.onrender.com";

  const { data: tours, isLoading: ToursLoading } = useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const res = await axios.get(url + `/api/v1/tour/`);
      return res.data;
    },
  });

  // const loggedUser = useQuery({
  //   queryKey: ["user"],
  //   queryFn: async () => {
  //     const res = await axios.get(
  //       url +
  //         `/api/v1/auth/users/getOne/${
  //           JSON.parse(localStorage.getItem("isLogin")).user.email
  //         }`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${
  //             localStorage.getItem("isLogin").access_token
  //           }`,
  //         },
  //       }
  //     );
  //     return res.data;
  //   },
  //   onError: (error) => {
  //     console.log(error.response.data.message);
  //   },
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  // });

  // console.log(loggedUser.data);
//  console.log();
  let userData = JSON.parse(localStorage.getItem("data"));
 let token = userData.access_token;
 let email = userData.user.email;
//  console.log(email);
  const loginMutation = useMutation({
    mutationFn: async (data) => {
      const res = await axios.get(url + `/api/v1/auth/users/getOne/`, data);
      return res.data;
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem("isLogin", JSON.stringify(data));
      window.location.href = "/";
    },
  });
  console.log("hollo")

  const{data: Loged_user} = useQuery({
    queryKey:["loged_user"],
    queryFn: async () =>{
      const res = await axios.get(url + `/api/v1/auth/users/getOne?fieldName=email&value=${email} `)
      console.log(res.data)
     
    },
    
      headers: {
        Authorization: "Bearer " + token,
      },
    
    // onSuccess: (data) =>{
    //   console.log(data);
    // }
    
  })

  return (
    <AppContext.Provider value={{ tours, loginMutation,Loged_user, }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export const useStateContext = () => useContext(AppContext)