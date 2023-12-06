import { useGlobalState } from "../../../../STATE/cementing/jobContext";
import { View, Text, TextInput } from 'react-native';
import Hook from "../../../../Hooks/cementingHooks";


const InputField = ( { item } ) => {
    const { wellData2, setWellData2 } = useGlobalState();
    const { handleObjectChange } = Hook()
     
        
  return (
    <View
    style={{
      display:"flex", 
      flexDirection:"row", 
      justifyContent: 'space-between',
      alignItems:"center",
      gap: 5, 
     }}
    >
        <Text style={{color:"white"}}>{item.desc}</Text>
        <TextInput
        style={{
          borderWidth: 1.5, 
          borderColor:"lightgray", 
          paddingTop: 1, 
          paddingBottom: 1, 
          paddingLeft: 8, 
          width: 100,
          color:"white"

        }}
        name={item.title}
        value={item.value}
        placeholder={item.placeholder}
        editable={!item.disabled}
        onChangeText={(e)=>handleObjectChange(e, item.title, setWellData2)}
        keyboardType="numeric"
        min={0}
        />
    </View>
  )
}

export default InputField