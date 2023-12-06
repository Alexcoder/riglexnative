import Hook from "../../../../Hooks/cementingHooks";
import { useGlobalState } from "../../../../STATE/cementing/jobContext";
import useUniformStingerData from '../Hooks/useUniformStingerData';
import { View, Text, ScrollView, TextInput } from "react-native";
// import "./Input.css";

const Input = () => {
  const { plug, setPlug, isUniformStinger } = useGlobalState();
  const {InputData}= useUniformStingerData();
 const { handleObjectChange } =  Hook()
  
 
  return (
    <View 
    style={{
      display: "flex",
      justifyContent: "center",
      flex: 1,
      // width: '100%',
      // gap: 10,
    }}
    className="input-plug-cont" >
      <ScrollView className='plug-sub' style={{width:"100%"}}>
      { InputData.map((item, i)=>(
        <View 
        style={{
          flex: 1,
          display:"flex",
          flexDirection:"row",
          gap: 103,
          width: "auto",
          justifyContent: "space-between",
          alignItems:"center",
          padding: 6,
          borderWidth: 0.5,
          borderColor:"lightgray"

        }}
        key={i} className='plug-map'>
            <Text>{item.desc}</Text>
            <TextInput
             name={item.title}
             value={(item.value)}
             onChangeText={e=>handleObjectChange( e, item.title, setPlug)}
             keyboardType="numeric" 
             style={{
              borderColor:"lightgray",
              borderWidth: 1,
              width: 120,
              padding: 4,
             }}           
            />
        </View>
      ))}
      </ScrollView>
     {/* <CalculatorIcon /> */}
    </View>
  )
}

export default Input