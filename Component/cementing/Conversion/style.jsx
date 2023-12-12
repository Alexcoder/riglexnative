import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({

    conversion_cont :{
        paddingTop: 68, 
        padding: 18,
        // gap: 6,
        flex: 1,
        // borderWidth: 1,
        // borderColor:"lightgray",
        height: "fit-content",
        // borderRadius: 1,
        backgroundColor:"purple"
    },
    main_container :{
        marginTop: 43,
        padding: 12,
        borderWidth: 0.5,
        borderColor:"lightgray",
        backgroundColor: "lightgray",
        height: 400,
        color: "black",
        borderRadius: 4,
        display: "flex",
        gap: 28,
        ...Platform.select({
            ios:{
                shadowColor: 'lightgray',
                shadowOffset:{
                    width: 0, height: 1
                },
                shadowOpacity: 0.1,
                shadowRadius: 0.1,
            },
            android:{
                elevation : 1
            }
        })
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
        backgroundColor: "lightgray"
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
        backgroundColor: "white"
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
