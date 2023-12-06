import { useGlobalState } from "../../../../STATE/cementing/jobContext";
import PlugJobWrapper from "../Wrappers/PlugJobWrapper";
import useWithDrillPipeData from '../Hooks/useWithDrillPipeData';
import { ScrollView, Text, TextInput } from "react-native";
import { View } from "react-native";
import Hook from "../../../../Hooks/cementingHooks";
// import "../Input/Input.css"

const WithDrillPipe = () => {
  const { plug, setPlug } = useGlobalState();
  const { InputData} = useWithDrillPipeData();
  const { handleObjectChange } = Hook();
     
  return (
    <ScrollView style={{flex: 1,}}>
      <Text style={{textAlign:"center", fontWeight: 700,}}>DRILL PIPE DATA</Text>
    <View className='plug-sub'>
    { InputData.map((item, i)=>(
      <View 
       style={{
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        // marginTop: 8,
        padding: 8,
        borderWidth:0.5,
        borderColor:"lightgray",
       }}
       key={i} className='plug-map'>
          <Text>{item.desc}</Text>
          <TextInput
           className={item.className}
           style={{
            borderWidth: 1,
            borderColor: "lightgray",
            padding: 6,
            width: 120,
           }}
           name={item.title}
           value={(item.value)}
           onChangeText={(e)=>handleObjectChange(e, item.title, setPlug)}
           keyboardType="numeric"            
          />
      </View>
    ))}
    </View>
    {/* <hr/> */}
  </ScrollView>

  )
}

export default PlugJobWrapper(WithDrillPipe)