import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    quizApp_container :{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        /* font-family: 'Courier New', Courier, monospace; */
        fontWeight: 500,
        // width: 200,
        marginTop: 18,
    },
    
    cate_count_container:{
        // width: '100%',
        display: 'flex',
        flexDirection:"row",
        justifyContent: 'space-between',   
        // margin: 10,
    },
     category:{
        color: 'black',
        fontSize: 14,
        fontWeight: 600,
        fontSize: 12,
    },
     count_down_end:{
        fontSize: 14,
        color: 'red',
        fontWeight: 600,
    
        
    },
     count_down_start:{
        fontSize: 14,
        color: 'blue',
        fontWeight: 600,
    },
    
     question_container :{
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
     questionNumber: {
        fontSize: 18,
        fontWeight: 600,
        color: 'silver',
    },
    
     question_con :{
        width: '100%',
        // minHeight: 350,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 2,
        borderColor : 'plum',
        padding: 20,      
      },
     question :{
        fontWeight: 600,
        fontSize: 15,
        color: 'black',
    },
      quizApp_option_container :{
        width: '100%',
        display: 'flex',
        flexWrap:'wrap',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10,
      },
      
     quizApp_secondary_container :{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
        
     singleOption :{
        width: '100%',
        height: 'max-content',
        // paddingTop: 20,
        // paddingBottom: 20,
        // paddingLeft: 40,
        // paddingRight: 40,
        marginTop: 20,
        borderRadius: 2,
        // boxShadow: '0 0 2px black',
        backgroundColor: 'lightgrey',
       fontWeight: 700,
    },
       
    correct :{
        backgroundColor: 'rgb(7, 207, 0)',
        color: 'black',  
        // width: '100%',
        // height: 'max-content',
        // paddingTop: 20,
        // paddingBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
        // marginTop: 20,
        // borderRadius: 2,
        // // boxShadow: '0 0 2px black',
       fontWeight: 700,

   
    },
     wrong :{
        backgroundColor: 'rgb(233, 0, 0)',
        color: 'black',      
    //     width: '100%',
    //     height: 'max-content',
        // paddingTop: 20,
        // paddingBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
    //     marginTop: 20,
    //     borderRadius: 2,
    //     // boxShadow: '0 0 2px black',
       fontWeight: 700,

    },
     quizApp_nav_button :{
        marginTop: 8,
        padding: 8,
    }
    //  quizApp_nav_button >button :{
    //     // width: 30,       
    //     padding: 8,
    //     backgroundColor: 'blue',
    //     color: 'white',
    //     borderRadius: 0.1rem,
    // }
    
    
      
}) 