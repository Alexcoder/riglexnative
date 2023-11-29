import React from 'react'
import Calculate from './Calculate'
import { useGlobalState } from "../../../STATE/cementing/context/Context";
import { Text, ScrollView } from 'react-native';

const Preview = () => {
  const { wellData2, casingType } = useGlobalState()
  const res = Calculate()
  return (
    <ScrollView style={{color:"white"}}>
        {/* <div>Previous Casing {wellData2.previousCsg} inch</div> */}
        <Text>Casing ID {wellData2.casingID} inch</Text>
        <Text>Open Hole {wellData2.openHole(casingType)} inch</Text>
        <Text>Top Of Lead {wellData2.topOfLead} ft</Text>
        <Text>Top Of Tail Slurry @ {wellData2.topOfTail} ft</Text>
        <Text>Float Collar @ {wellData2.topOfFloatCollar} ft</Text>
        <Text>Caing Shoe @ {wellData2.casingShoe} ft</Text>
        <Text>Measured depth @ {wellData2.measuredDepth} ft</Text>

        <Text>Casing-OpenHole Ann Capacity {res.csg_openHole_ann_cap.toFixed(4)} bbl/ft</Text>
        <Text>Casing-Casing Ann Capacity {res.csg_csg_ann_cap.toFixed(4)} bbl/ft</Text>
        <Text>Casing Capacity {res.csg_cap.toFixed(4)} bbl/ft</Text>
        <Text>Open Hole Capacity {res.openHole_cap.toFixed(4)} bbl/ft</Text>
        <Text>Open Hole Excess for Lead Slurry {wellData2.leadExcess} %</Text>
        <Text>Open Hole Excess for Tail Slurry {wellData2.tailExcess} %</Text>
    </ScrollView>
  )
}

export default Preview