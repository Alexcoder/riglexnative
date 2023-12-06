import React from 'react';
import useWithDrillPipeAnalyser from "../Hooks/useWithDrillPipeAnalyser";
import { useGlobalState } from "../../../../STATE/cementing/jobContext";
import {styles } from "./styles.jsx";
import { View, Text, Button } from 'react-native';

const ResultWithDrillPipe = ({setViewResult}) => {
    const { plug } = useGlobalState();
    const { volume, spacerAheadVol, spacerBehindVol, displacement, isSpacerInDrillPipe, displacement2, displacement3, lengthWithPipeIn } = useWithDrillPipeAnalyser();

  return (
    <View style={styles.plug_result_cont} onPress={()=> setViewResult(false)}>
     <View style={styles.plug_result_cont2} >
       <Text>{isSpacerInDrillPipe >0 ? "SPACER IN DRILLPIPE" : "SPACER NOT IN DRILL PIPE"}</Text>
       <Text>Volume Of Slurry { volume || 0 } bbl</Text>
       <Text>Spacer Ahead { spacerAheadVol || 0 } bbl</Text>
       <Text>Spacer Behind { spacerBehindVol() || 0 } bbl</Text>
       <Text>Displacement { displacement() || 0 } bbl</Text>
       {/* <div>Displacement "2" { displacement2 || 0 } bbl</Text>
       <Text>Displacement "3" { displacement3 || 0 } bbl</Text> */}
       <Text>Slurry Length with Pipe Inside { lengthWithPipeIn || 0 } {plug.unit}</Text>
       <Button title="Back" onPress={()=> setViewResult(false)}/>
     </View>
    </View>
  )
}

export default ResultWithDrillPipe;
