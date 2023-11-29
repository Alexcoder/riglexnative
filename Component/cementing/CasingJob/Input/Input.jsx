import { useGlobalState } from "../../../../STATE/cementing/context/Context";
import { View, Text } from "react-native";
import {styles} from  "./styles.jsx";
import { TextInput } from "react-native";

const InputField = ( { item } ) => {
    const { wellData2, setWellData2 } = useGlobalState();

    const handleChange = (e) =>{
        const { name , value } = e.target;
        setWellData2({ ...wellData2, [name] : value });

    
        
    } 
  return (
    <View style={styles.prim2} >
        <Text>{item.desc}</Text>
        <TextInput
        name={item.title}
        value={item.value}
        placeholder={item.placeholder}
        disabled={item.disabled}
        onChangeValue={handleChange}
        type="number"
        min={0}
        />
    </View>
  )
}

export default InputField