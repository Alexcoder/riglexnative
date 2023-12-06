import { createContext, useContext, useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation, useRoute } from '@react-navigation/native';


export const PostContext = createContext();

export const StateContext = ({ children }) =>{
     const [profile, setProfile] = useState({
        firstName : "",
        lastName  : "",
        email     : "",
        password  : "",
        confirmPassword: "",
     });
     const[currentPostId, setCurrentPostId]= useState("");
     const[showComment, setShowComment] = useState(false);
     const[openSideBarForSmallDevice, setOpenSideBarForSmallDevice] = useState(false);


     function useQuery(){
      // return new URLSearchParams(location.search)
     };
     const query = useQuery();

     function reverseArray(arr){
      const length = arr.length;
      const mid = Math.floor(length/2);
       for(let i = 0; i < mid; i++){
          //Swap element 
          const temp = arr[i];
          arr[i] = arr[length-1-i];
          arr[length-1-i] = temp;
       }
       return arr
     };

         // Get Item from storage
    async function getItemInStorage(itemToFetch){
      try{
          await JSON.parse(AsyncStorage.getItem(itemToFetch))
       }catch(err){
         console.log(err)
       } 
  };
  // const loggedIn = getItemInStorage();
  // const user = loggedIn?.result
  // const token = loggedIn?.token;
  // const location = xxx;



// useEffect(()=>{
//  getItemInStorage()
// },[location]);

// useEffect(()=>{
//   if(location.pathname===`/`){
//     setShowComment(false)
//   }else{
//     setShowComment(true)
//   }  
// },[location.pathname])


    return(
        <PostContext.Provider
         value={{
         profile,
         setProfile,
         currentPostId,
         setCurrentPostId,
         showComment, 
        //  setShowComment,
         openSideBarForSmallDevice,
         setOpenSideBarForSmallDevice,

         query:"finer",
         user: "fine",
         token: "finest",
         reverseArray,
        }}
        >
          {children} 
        </PostContext.Provider>
    )
}

export const usePostContext =()=> useContext(PostContext)