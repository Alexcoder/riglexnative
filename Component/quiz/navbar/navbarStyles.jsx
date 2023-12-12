import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    nav_cont :{
        fontSize: 14,
        backgroundColor: 'lightblue',
        width: '100%',
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 20,
    },
    nav_home_btn :{
        position: 'relative',
        // left: '1%', 
        padding: 4, 
        fontSize: 14, 
        background: 'purple',
        color: 'white',
        borderRadius: 2,
    },
    nav_quiz_hub :{
        // position: 'relative',
        // right: '45%,
        // color: 'red',
    }

})     
