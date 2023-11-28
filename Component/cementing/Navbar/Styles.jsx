import { StyleSheet, Text, View , ScrollView, Button} from 'react-native';

export const styles = StyleSheet.create({

    navbar_container : {
        display: "flex",
        justifyContent: "spaceBetween",
        alignItems: "center",
        // position: "fixed",
        // top: 50,
        // left: 0,
        // right: 0,
        zIndex: 1000,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: "start",
        transition: "1s ease-in-out",
        backgroundColor: "rgb(78, 116, 156)",
        color: "white",
        borderBottom: "5 solid lightgray",
        cursor: "pointer",
    },

    navbar_username : {
        borderRadius: "50%",
        border: "1px solid gray",
        padding: "0.1rem 0rem 0.1rem 0.5rem",
        background: "white",
        color: "blue",
        fontWeight: 700,
    },
    navbar_icon_group : {
        display: "flex",
        gap: "1rem",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "justify",
        maxWidth: "18rem",
    },
    navbar_notification : {
        position: "relative",
        bottom: "0.4rem",
        color: "white",
        fontWeight: 600,
    },
    
    navbar_search:{
        display: "flex", 
        gap: "0.3rem", 
        borderRadius: "0.2rem",
        background: "white",
        justifyContent: "flex-start", 
        alignItems: "start",
        padding: "0.1rem",
        height: "1.5rem",
    },
    navbar_search_input : {
        borderRadius: "0.2rem", 
        border: "none", 
        marginLeft: "0rem",
        textAlign: "start",
        backgroundColor: "white",
        color: "black",
        height: "0.4rem",
        fontSize: "11px",
    },
    // navbar_search-input :focus{
    //     border: "none",
    //     outline: "none",
    // },
    
    nav_dropbar_cont : {
        position: "fixed",
        top: "5.7rem ",
        left: "75rem",
        padding: "1rem 2rem",
        backgroundColor: "white",  
        color: "rgb(29, 27, 27)",  
        borderRadius: "0.2rem",
        fontSize: "14px",
        // @media screen and (max-width: 1024px) {
        //     left: 38rem;      
        // }
        // @media screen and (max-width: 720px) {
        //     left: 12rem;      
        // }
    },
     nav_dropbar_wrapper : {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    },
     nav_dropbar_access : {
        padding: "0.3rem 1rem",
        background: "purple",
        color: "white",
        borderRadius: "0.1rem",
    }
})    

