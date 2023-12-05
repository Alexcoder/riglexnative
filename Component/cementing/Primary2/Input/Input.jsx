import { useGlobalState } from "../../../../STATE/cementing/jobContext";
import { View, Text, TextInput } from 'react-native';

// import CalculatorIcon from "../../../calculatorIcon"
// import "./styles.css";

const InputField = ( { item } ) => {
    const { wellData2, setWellData2 } = useGlobalState();

    const handleChange = (e) =>{
        const { name , value } = e.target;
        setWellData2({ ...wellData2, [name] : value });

    
        
    } 
  return (
    <View
    style={{display:"flex", flexDirection:"row", justifyContent:"center"}}
    // className='prim2' 
    >
        <Text>{item.desc}</Text>
        <TextInput
        style={{borderWidth: 2, borderColor:"lightgray", width: 30}}
        name={item.title}
        value={item.value}
        placeholder={item.placeholder}
        disabled={item.disabled}
        onChangeText={handleChange}
        // type="number"
        min={0}
        />
        {/* <CalculatorIcon /> */}
    </View>
  )
}

export default InputField