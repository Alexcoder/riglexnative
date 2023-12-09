import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    conversion_cont :{
        margin: 18, 
        padding: 8,
        // gap: 6,
        flex: 1,
        borderWidth: 1,
        borderColor:"lightgray",
        height: "fit-content",
        borderRadius: 4,
    },
    main_container :{
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
        fontSize: 14,
        borderRadius: 4,
        color:"black",
        // padding: 2,
        // minWidth: 200,
        borderWidth: 1,
        borderColor: "lightgray",
        textAlign: "center",
        // boxShadow: 0rem 0.1rem 0.5rem 0rem gray,
    },
    input_cont : {
        display: "flex",
        // flexDirection: "column",
        // gap: 12,
        // alignItems: "center",
        // justifyContent: "center",
        // width: '100%',
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
        // flexDirection: "row",
        // textAlign: "center",
        // justifyContent: "center",
        // alignItems: "center",
        gap: 16,
        marginTop: 200,
    },
    button_clear :{
        // padding: 8,
        // borderWidth: 1,
        // borderColor: "transparent",
        // color: "white",
        // background: "darkred",
        // borderRadius: 2,
        // fontSize: 14,
    },
    
    button_back :{
        // padding: 4,
        // borderWidth: 1,
        // borderColor : "transparent",
        // color: "white",
        // background: "blue",
        // borderRadius: 4,
        // fontSize: 14,
    },
    
    lexwares :{
        textAlign: "center",
        marginTop: 8,
        fontStyle: "italic",
        opacity: 0.6,
    }
    
})    
