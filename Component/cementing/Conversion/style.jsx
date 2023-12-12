import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    conversion_cont :{
        marginTop: 48, 
        padding: 18,
        // gap: 6,
        flex: 1,
        // borderWidth: 1,
        // borderColor:"lightgray",
        height: "fit-content",
        borderRadius: 4,
    },
    main_container :{
        marginTop: 43,
        padding: 8,
        borderWidth: 1,
        borderColor:"lightgray",
        backgroundColor: "whiteSmoke",
        // flex: 1,
        height: 400,
        // padding: 4,
        // margin: 2,
        color: "black",
        borderRadius: 4,
        display: "flex",
        // flexDirection: "column",
        gap: 28,
        // alignItems: "center",
        // justifyContent: "center",
        // boxShadow: 0rem 0.1rem 0.5rem 0rem gray,
        // width: 600,
    },
    label_select: {
        fontSize: 4,
        fontWeight: 600,
        textAlign: "center",
    },
    select : {
        // height: 28,
        fontSize: 14,
        borderRadius: 4,
        color:"black",
        borderWidth: 1,
        borderColor: "lightgray",
        textAlign: "center",
        // boxShadow: 0rem 0.1rem 0.5rem 0rem gray,
    },
    input_cont : {
        display: "flex",
    },
    h1_data : {
        color: "blue",
        textAlign:"center",
        fontSize: 16,
        fontWeight: "700",
        paddingTop: 35,
        paddingBottom: 25,

    },
    textField_cont :{
        display: "flex",
        alignItems:"center",
        flexDirection: "row",
        gap: 18,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "lightgray",
        padding: 8,
    },
    /* Result */
    text : {
        fontSize: 14,
        fontWeight: 700,
        color: "green",
        textAlign: "center",
        marginTop: 65,
    },
    button_container :{
        display: "flex",
        gap: 16,
        marginTop: 50,
    },
    button_clear :{
    },
    
    button_back :{
    },
    
    lexwares :{
        textAlign: "center",
        marginTop: 8,
        fontStyle: "italic",
        opacity: 0.6,
    }
    
})    
