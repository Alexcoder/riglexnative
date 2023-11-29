import { createSlice } from '@reduxjs/toolkit';
import Hook from '../../../Hooks/hooks';
import React from 'react';

const {     
  saveUserInfoInStorage,
} = Hook();

const initialState = {
   allPost : [],
   postById : {},
   parentPostById : {},
   profile : {}, 
   currentPage: "",
   numberOfPages: "",
   isLoading : false, 
   isLoggedIn : false,
   isLiked : false,
   isCommented : false,
   isProfileUpdated: false,
}

const postSlice = createSlice({
    name : "post",
    initialState : initialState,
    reducers:{
        createPost : (state, action)=>{
          state.allPost = [action?.payload, ...state.allPost]
        },
       getAllPost : (state, action)=>{
         state.allPost = action?.payload?.data;
         state.currentPage = action?.payload?.currentPage;
         state.numberOfPages = action?.payload?.numberOfPages;
       },
       getPostById : (state, action)=>{
         state.postById = action?.payload;
       },
       getParentPostById : (state, action)=>{
         state.parentPostById = action?.payload;
       },
       updatePost : (state, action)=>{
         const isFound = state.allPost.findIndex((post)=> post?._id === action?.payload._id)
         state.allPost[ isFound ] = action?.payload;
        },
       deletePost : (state, action)=>{
         const index = state.allPost.findIndex((item)=> item?._id === action?.payload)
         state.allPost.splice(index, 1);
       },
       login : (state, action)=>{
        //  localStorage.setItem("riglex", JSON.stringify(action.payload));
         saveUserInfoInStorage("riglex", action?.payload)
         state.profile = action.payload ;
       },
       loadingStart : (state)=>{
         state.isLoading = true;
       },
       loadingStop : (state)=>{
         state.isLoading = false;
       },
       loginStart : (state)=>{
         state.isLoggedIn = true;
       },
       loginStop : (state)=>{
         state.isLoggedIn = false;
       },
       likeStart : (state)=>{
         state.isLiked = true;
       },
       likeStop : (state)=>{
         state.isLiked = false;
       },
       commentStart : (state)=>{
         state.isCommented = true;
       },
       commentStop : (state)=>{
         state.isCommented = false;
       },
       profileUpdateStart : (state)=>{
         state.isProfileUpdated = true;
       },
       profileUpdateStop : (state)=>{
         state.isProfileUpdated = false;
       },
      // 
    }
});

export const {
    createPost,
    getAllPost,
    getPostById,
    getParentPostById,
    updatePost,
    deletePost,
    login,
    loadingStart,
    loadingStop,
    loginStart,
    loginStop,
    likeStart,
    likeStop,
    commentStart,
    commentStop,
    profileUpdateStart,
    profileUpdateStop,
} = postSlice.actions;

export default postSlice.reducer;
