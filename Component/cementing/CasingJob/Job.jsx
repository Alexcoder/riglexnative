import { useState } from "react";
import InputField from "./Input/Input";
import useCsgDobData from "./InputData";
import Preview from "./Preview";
import Result from "./Result/Result";
import { useGlobalState } from "../../../STATE/cementing/jobContext";

import { View, Text , Button, StyleSheet, TouchableOpacity} from "react-native";


const Job = () => {
    const [page, setPage] = useState(1);
    const { casingType, setCasingType } = useGlobalState()
    const {InputData1, InputData2, InputData3, InputData4} = useCsgDobData()
    const pageNumber=(goTo)=>{
        setPage((prev)=>
                goTo==="next" && prev < 5  ? prev + 1 :
                goTo==="prev" && prev > 1 ? prev - 1 : 6
                )
    };

    const goTo = (myPage) => {
        if(page > myPage) setPage(myPage);
        return
    };

    const  nav_btn =(pageNumber)=> {
      return{
        backgroundColor: page===pageNumber ? "green" : "white",
        borderWidth: 1, 
        // borderColor:"lightgray", 
        borderRadius: 3,
        width: 50,
        padding: 8,
      }
    };
    //Temporal CSS For Select Job Touchable Opactity
    const selectJob = (size) =>{
      return{
        color: casingType===size ? "white" : "black",
        backgroundColor: casingType===size ? "green" : "white",
        padding: 10,
        fontWeight: 700,
        borderRadius: 5,     
      }
    };
      
  return (
      <View 
    style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop: 0,
        paddingBottom: 20,
        gap: 20, 
        padding: 2,
        width: "",
        color: "white",  
        backgroundColor:"black", 
        flex: 1, 
    }}
      >

        <Text style={{color:"white", paddingTop: 20}}>Casing Type </Text>
        <View
        style={{display: "flex", gap: 20, flexDirection:"row", alignItems:"center",
        width: "", borderWidth: 1.5, borderColor:"lightgray",padding: 15, borderRadius: 10}}
         >
          <TouchableOpacity
            onPress={()=> setCasingType("13-3/8 inch")}>
            <Text style={ selectJob("13-3/8 inch") }>13-3/8 inch</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> setCasingType("9-5/8 inch")}>
            <Text style={ selectJob("9-5/8 inch") }>9-5/8 inch</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> setCasingType("7 inch")}>
            <Text style={ selectJob("7 inch") }>7 inch</Text>
          </TouchableOpacity>
        </View>
        { page===1 &&
            InputData1.map((item, i)=>
            <Text key={i}> <InputField item={item} /> </Text> )
        }
        { page===2 &&
            InputData2.map((item, i)=>
            <Text key={i}> <InputField item={item}/> </Text> )
        }
        { page===3 &&
            InputData3.map((item, i)=>
            <Text key={i}> <InputField item={item}/> </Text> )
        }
        { page===4 &&
            InputData4.map((item, i)=>
            <Text key={i}> <InputField item={item}/> </Text> )
        }
       { page===5 && <Preview /> }
       { page===6 && <Result  /> }
        <View
         style={{display:"flex", flexDirection:"row", gap: 8, }}
         >
            <TouchableOpacity
              onPress={()=> goTo(1)} 
              style={nav_btn(1)}>
                <Text></Text>
             </TouchableOpacity>
            <TouchableOpacity
              onPress={()=> goTo(2)} 
              style={nav_btn(2)}>
             </TouchableOpacity>
            <TouchableOpacity
              onPress={()=> goTo(3)} 
              style={nav_btn(3)}>
             </TouchableOpacity>
            <TouchableOpacity
              onPress={()=> goTo(4)} 
              style={nav_btn(4)}>
             </TouchableOpacity>
            <TouchableOpacity
              onPress={()=> goTo(5)} 
              style={nav_btn(5)}>
             </TouchableOpacity>
            <TouchableOpacity
              onPress={()=> goTo(6)} 
              style={nav_btn(6)}>
             </TouchableOpacity>
        </View>
        <View 
          style={{display:"flex", gap: 28, flexDirection:"row",
           alignItems:"center", justifyContent:"space-between" }}
          >
        { page > 1 && 
        <TouchableOpacity 
         onPress={()=>pageNumber("prev")} 
        >
          <Text 
          style={{color:"white",
           borderWidth: 1, padding:8, 
          //  minWidth: 200, 
          //  textAlign:"start",
           backgroundColor:"purple",
           borderRadius:2,
           }} >BACK</Text>
        </TouchableOpacity>
          }
        {
        page < 6 && 
        <Button
          title={page===4? "Preview" : page===5? "Calculate" : "next"}
          onPress={()=>pageNumber("next")} />
        }

        </View>
    </View>
  )
}

export default Job;

const styles = StyleSheet.create({
  nav_btn2 : {
  }
})
