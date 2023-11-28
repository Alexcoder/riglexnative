import { configureStore } from "@reduxjs/toolkit";
import post from "../redux/post"

export const store = configureStore(
    {
       reducer : {post,}
    }
);