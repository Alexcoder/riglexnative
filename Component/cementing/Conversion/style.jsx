import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    conversion_cont :{
        // width: 400,
        marginTop: 44, 
        display: "flex",
        // flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center", 
        gap: 6,
        flex: 1,
    },
    main_container :{
        backgroundColor: "whiteSmoke",
        minWidth: 800,
        height: 200,
        padding: 4,
        color: "black",
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        gap: 18,
        alignItems: "center",
        justifyContent: "center"
        // boxShadow: 0rem 0.1rem 0.5rem 0rem gray,
        // width: 600,
    },
    label_select: {
        fontSize: 4,
        fontWeight: 600,
        textAlign: "center",
    },
    select : {
        marginTop: 8,
        fontSize: 14,
        borderRadius: 4,
        color:"black",
        padding: 2,
        minWidth: 200,
        borderWidth: 1,
        borderColor: "lightgray",
        textAlign: "center",
        // boxShadow: 0rem 0.1rem 0.5rem 0rem gray,
    },
    input_cont : {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "center",
        justifyContent: "center",
        minWidth: 100,
    },
    h1_data : {
        color: "blue",
        alignItems: "center",
    },
    textField_cont :{
        display: "flex",
        alignItems:"center",
        flexDirection: "row",
        gap: 18,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "lightgray",
        padding: 4,
    },
    /* Result */
    text : {
        fontSize: 14,
        fontWeight: 550,
        color: "green",
        textAlign: "center",
    },
    button_container :{
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
        marginTop: 8,
    },
    button_clear :{
        padding: 8,
        borderWidth: 1,
        borderColor: "transparent",
        color: "white",
        background: "darkred",
        borderRadius: 2,
        fontSize: 14,
    },
    
    button_back :{
        padding: 4,
        borderWidth: 1,
        borderColor : "transparent",
        color: "white",
        background: "blue",
        borderRadius: 4,
        fontSize: 14,
    },
    
    lexwares :{
        textAlign: "center",
        marginTop: 4,
        fontStyle: "italic",
        opacity: 0.6,
    }
    
})    
