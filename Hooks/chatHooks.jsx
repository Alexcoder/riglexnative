import React, {useEffect} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from '@react-navigation/native';

const Hook = () => {
  const navigation = useNavigation();
  const location = useRoute();

    // Save Item to Async Storage
     async function saveUserInfoInStorage(name, itemToSave) {
        const stringifyItemToSave = JSON.stringify(itemToSave)
        try{
           await AsyncStorage.setItem(name, stringifyItemToSave)
        }catch(err){
          console.log(err)
        }
    };
  // Save random Item To Async Storage
   async function saveInStorage(name, itemToSave){
        try{
            await AsyncStorage.setItem(name, itemToSave)
         }catch(err){
           console.log(err)
         } 
    };
    // Get Item from storage
    async function getItemInStorage(itemToFetch){
        try{
            await JSON.parse(AsyncStorage.getItem(itemToFetch))
         }catch(err){
           console.log(err)
         } 
    };
    //Auto Update User
    useEffect(()=>{
        getItemInStorage(itemToFetch)
       },[location]);
       const loggedIn = getItemInStorage(itemToFetch);
       const user = loggedIn?.result
       const token = loggedIn?.token;
  
       
    // Reverse Array
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

       //Recursive Search for ID
       function recursiveSearchId(array, searchId){
        if(array.length){
          for(const item of array){
            if(item._id === searchId){
              return item
            }else if(array.length>0){
              const isFound = recursiveSearchId(item.comment, searchId)
              return isFound
            };
          };
          return
        };
       };

      // OnChange for Object
      function handleObjectChange(event, name, setState){
         setState(prev=>({...prev,[name] : event}))
      };
  



  return {
    navigation,
    saveUserInfoInStorage,
    saveInStorage,
    getItemInStorage,
    reverseArray,
    recursiveSearchId,
    handleObjectChange,
    loggedIn,
    user,
  }
}

export default Hook;
