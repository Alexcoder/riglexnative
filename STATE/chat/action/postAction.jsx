// import { useEffect } from "react";
import { publicApi, userApi,  } from "../api";
// import { io } from "socket.io-client"
import {
    createPost, 
    getAllPost, 
    getParentPostById,
    getPostById, 
    login, 
    deletePost, 
    updatePost, 
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
  } from "../redux/post";
import { useDispatch } from "react-redux";

const useSocketIo = () =>{
    const loggedInUser = JSON.parse(localStorage.getItem("riglex"))

useEffect(()=>{
    const dispatch = useDispatch();
    if( loggedInUser ){
         const socket = io(`https://riglex.onrender.com/api`, {
         withCredentials : true,
         autoConnect : true,
    });
    socket.on("connection")

    };
    socket.on('connect', ()=> console.log(`socket io connected = ${socket.connected}`));
    socket.on('new-post', (newPost)=> console.log("SocketPost",  newPost));
    socket.on('all-post', (res)=> {dispatch(getAllPost(res?.data)  )});
    socket.on('update', (res)=> dispatch(updatePost(res?.data)));
    socket.on('postById', (res)=> dispatch(getPostById(res?.data)));
    return () => {
        socket.disconnect();
    }
},[dispatch, loggedInUser?._id])

}

export const create =(newPost)=>async(dispatch)=>{
    try{
        dispatch(loadingStart())
        const res = await publicApi.post(`/post`, newPost);
        dispatch(createPost(res?.data))
        dispatch(loadingStop())
    }catch(err){
        console.log(err) 
    }
};
//UPDATE POST
export const update =( postId, updatedPost )=>async(dispatch)=>{
    try{
        dispatch(loadingStart())
        const res = await publicApi.put(`/post/update/${postId}`, updatedPost);
        dispatch(updatePost(res?.data))
        dispatch(loadingStop())
    }catch(err){
        console.log(err.response.message) 
    }
};
//FETCH ALL POSTS
export const getAll =(page)=>async(dispatch)=>{
    try{
        dispatch(loadingStart())
        const res = await publicApi.get(`/post?page=${page || 1}`);
        dispatch(getAllPost( res?.data ))
        dispatch(loadingStop())
    }catch(err){
        dispatch(loadingStop())
        // console.log(err.response.data) 
        console.log(err.response) 
    }
};
//FETCH COMMENT POST BY ID
export const getPrimePostById =(postId,)=>async(dispatch)=>{
    try{
        dispatch(loadingStart())
        const res = await publicApi.get(`/post/fetch/parentPost/${postId}`);
        // console.log("parentPostById", res?.data)
        dispatch(getParentPostById(res?.data))
        dispatch(loadingStop())
    }catch(err){
        console.log(err.response.data); 
    }
};
//FETCH COMMENT POST BY ID
export const getById =(postId, commentId)=>async(dispatch)=>{
    try{
        dispatch(loadingStart())
        const res = await publicApi.get(`/post/find/${postId}/${commentId}`);
        // console.log("postAction---postById", res?.data)
        dispatch(getPostById(res?.data))
        dispatch(loadingStop())
    }catch(err){
        console.log(err.response.data); 
    }
};
//REPLY POST 
export const comment =(postId, body )=>async(dispatch)=>{
    try{
        dispatch(commentStart())
        const postsFromDB = await publicApi.patch(`/post/comment/main/${postId}`, body);
        dispatch(updatePost(postsFromDB?.data))
        dispatch(commentStop())
    }catch(err){
        console.log(err) 
    }
};
//REPLY POST 
export const reply =(postId, body )=>async(dispatch)=>{
    console.log("trialReply", body)
    try{
        dispatch(commentStart())
        const postsFromDB = await publicApi.patch(`/post/reply/${postId}`, body);
        dispatch(updatePost(postsFromDB?.data))
        dispatch(commentStop())
    }catch(err){
        console.log(err.response.data) 
    }
};
//LIKE POST 
export const like =(createLike)=>async(dispatch)=>{
    try{
        dispatch(likeStart())
        const res = await publicApi.put(`/post/like`, createLike);
        dispatch(updatePost(res?.data))
        dispatch(likeStop())
    }catch(err){
        console.log(err.response) 
    }
};
//DELETE POST BY ID
export const removePost =(postId)=>async(dispatch)=>{
    try{
        // dispatch(loadingStart())
        await publicApi.delete(`/post/delete/${postId}`);
        dispatch(deletePost(postId))
        // dispatch(loadingStop())
    }catch(err){
        console.log(err.response.data) 
    }
};

//LOGIN IN
export const logIn =(type, loginDetail, navigate)=>async(dispatch)=>{
    let res
    const route = {
        "login" : `/user/login`,
        "register" : `/user/register`,
    };
    try{
        dispatch(loginStart())
        res = await userApi.post(route[type], loginDetail);
        dispatch(login(res?.data))
        dispatch(loginStop())
        navigate(`/`)
        // console.log('data', res.data._doc)
    }catch(err){
        console.log(err.response.data) 
    }
};
//REGISTER LINK
export const registerLink =(email)=>async(dispatch)=>{
    try{
        // dispatch(loginStart())
        res = await userApi.post(`user/registerLink`, email);
        console.log(res)
        // dispatch(login(res?.data))
        // dispatch(loginStop())
        navigate(`/`)
        // console.log('data', res.data._doc)
    }catch(err){
        console.log(err.response.data) 
    }
};
//UPDATE PROFILE
export const updateProfile =(newProfile, userId)=>async(dispatch)=>{
    try{
        dispatch(profileUpdateStart())
        res = await userApi.patch(`/user/update/${userId}`, newProfile);
        dispatch(login(res?.data))
        dispatch(profileUpdateStop())
    }catch(err){
        console.log(err.response.data) 
    }
};
//LOG OUT
export const logOut =(navigate)=>async(dispatch)=>{
    localStorage.clear("riglex")
    navigate(`/logout`)
};