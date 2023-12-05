import React from 'react'
import Calculate from './Calculate'
import { useGlobalState } from "../../../STATE/cementing/jobContext";
import { View, Text } from 'react-native';

const Preview = () => {
  const { wellData2, casingType } = useGlobalState()
  const res = Calculate()
  return (
    <View style={{color:"white"}}>
        {/* <div>Previous Casing {wellData2.previousCsg} inch</div> */}
        <Text style={{color:"white"}}>Casing ID {wellData2.casingID} inch</Text>
        <Text style={{color:"white"}}>Open Hole {wellData2.openHole(casingType)} inch</Text>
        <Text style={{color:"white"}}>Top Of Lead {wellData2.topOfLead} ft</Text>
        <Text style={{color:"white"}}>Top Of Tail Slurry @ {wellData2.topOfTail} ft</Text>
        <Text style={{color:"white"}}>Float Collar @ {wellData2.topOfFloatCollar} ft</Text>
        <Text style={{color:"white"}}>Caing Shoe @ {wellData2.casingShoe} ft</Text>
        <Text style={{color:"white"}}>Measured depth @ {wellData2.measuredDepth} ft</Text>

        <Text style={{color:"white"}}>Casing-OpenHole Ann Capacity {res.csg_openHole_ann_cap.toFixed(4)} bbl/ft</Text>
        <Text style={{color:"white"}}>Casing-Casing Ann Capacity {res.csg_csg_ann_cap.toFixed(4)} bbl/ft</Text>
        <Text style={{color:"white"}}>Casing Capacity {res.csg_cap.toFixed(4)} bbl/ft</Text>
        <Text style={{color:"white"}}>Open Hole Capacity {res.openHole_cap.toFixed(4)} bbl/ft</Text>
        <Text style={{color:"white"}}>Open Hole Excess for Lead Slurry {wellData2.leadExcess} %</Text>
        <Text style={{color:"white"}}>Open Hole Excess for Tail Slurry {wellData2.tailExcess} %</Text>
    </View>
  )
}

export default Preview