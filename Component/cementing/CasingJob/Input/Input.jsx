import { useGlobalState } from "../../../../STATE/cementing/jobContext";
import { View, Text, TextInput } from 'react-native';
import Hook from "../../../../Hooks/cementingHooks";


const InputField = ( { item } ) => {
    const { wellData2, setWellData2 } = useGlobalState();
    const { handleObjectChange } = Hook()
     
        
  return (
    <View
    style={{
      // flex: 1,
      display:"flex", 
      flexDirection:"row", 
      alignItems:"center",
      justifyContent: 'space-between',
      gap: 45, 
     }}
    >
        <Text style={{color:"white"}}>{item.desc}</Text>
        <TextInput
        style={{
          borderWidth: 1.5, 
          borderColor:"lightgray", 
          padding: 4, 
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