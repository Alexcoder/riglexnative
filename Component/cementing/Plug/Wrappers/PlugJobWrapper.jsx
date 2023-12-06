import { useState } from "react";
import Input from "../Input/Input";
import ResultUniformStinger from "../Result/ResultUniformStinger";
import ResultWithDrillPipe from "../Result/ResultWithDrillPipe";
import { useGlobalState } from "../../../../STATE/cementing/jobContext";
import { ScrollView } from "react-native-gesture-handler";
import { View, Button, Text } from "react-native";

const PlugJobWrapper = (Component) => {
   
   function Sub (...props){
     const [viewResult, setViewResult]= useState(false);
     const { isUniformStinger, plug  } = useGlobalState();
     const {
      zoneId,
      length,
      stingerOD,
      // OHE,
      stingerID,
      stingerLength,
      // slurryYield,
      volOfSpacerAhead,
      bottom,  
      drillPipeID,
      drillPipeOD,
      dpOuterZoneId,     
     } = plug ;

     const  plugSwitch = () =>{
      if(isUniformStinger){
         return {
            zoneId,
            length,
            stingerOD,
            // OHE,
            stingerID,
            // slurryYield,
            volOfSpacerAhead,
            bottom,  
         }
      }
      else {
         return {
            zoneId,
            length,
            stingerOD,
            // OHE,
            stingerID,
            stingerLength,
            // slurryYield,
            volOfSpacerAhead,
            bottom,  
            drillPipeID,
            drillPipeOD,
            dpOuterZoneId,     
         }
      }
     };
     
     const emptyInput = Object.values(plugSwitch()).some(val=> val==="" || val <"0");
     const view = ()=>{
       setViewResult(!emptyInput ? true : false)
     }

     return(
        <ScrollView 
         style={{
            display:"flex",
         }}
         justifyContent="center"
         >
         { 
          (isUniformStinger && viewResult)  ?
         <ResultUniformStinger 
         setViewResult={setViewResult}
         /> : null
         }
         { 
          (!isUniformStinger && viewResult)  ?
         <ResultWithDrillPipe 
         setViewResult={setViewResult}
         /> : null
         }
         <Input />
         <Component {...props} />
         <View style={{textAlign:"center", marginBottom: 4,}} >
            {  !emptyInput &&
               <Button title="View Result" onPress={view}/>
            }
         </View>
        </ScrollView>
     )
  }
  return Sub
}

export default PlugJobWrapper