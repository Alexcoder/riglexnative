import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

const Hook = () => {
  const navigation = useNavigation();

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
  



  return {
    navigation,
    saveUserInfoInStorage,
    saveInStorage,
    getItemInStorage,
    reverseArray,
  }
}

export default Hook
