import React from 'react';
import {useGlobalState} from "../../../../STATE/cementing/jobContext";
import { Text, View, Button } from 'react-native';
import  {styles} from "./styles.jsx";


const ResultUniformStinger = ({setViewResult}) => {
  const { plug } = useGlobalState();

  return (
    <View style={styles.plug_result_cont} onPress={()=> setViewResult(false)}
    //  style={{display:"grid", gridTemplateColumns:"Repeat(2, 1fr)", gap:"1rem", placeContent:"center", placeItems:"",}}
     >
    <View style={styles.plug_result_cont2} >
     <Text style={{textAlign:"center", marginBottom:"0rem"}}>Uniform Stinger</Text>
     <Text> Slurry Volume {plug.volume() || 0} bbl </Text> 
     <Text> Spacer Ahead {plug.volOfSpacerAhead} bbl </Text>
     <Text> Spacer Behind {plug.volOfSpacerBehind().toFixed(1) || 0} bbl</Text>
     <Text> Spacer Length {plug.spacerLength().toFixed(1) || 0} {plug.unit}</Text>
     <Text> Stinger Cap {(plug.stingerCap().toFixed(4))} bbl/{plug.unit}</Text>
     <Text> Annular Cap {(plug.annCap().toFixed(4))} bbl/{plug.unit}</Text>
     <Text> LengthOfCementWithPipeInside {(plug.lengthOfCementWithPipeInside()).toFixed(1) || 0} {plug.unit}</Text>
     <Text> Displacement { plug.displacement().toFixed(1) || 0} bbl</Text>
     <Button
      title="Back"
      onPress={()=> setViewResult(false)}/>
    </View>
   </View>

  )
}

export default ResultUniformStinger