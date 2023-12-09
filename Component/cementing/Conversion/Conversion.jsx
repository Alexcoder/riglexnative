import React, {useState, useEffect} from 'react';
import Select from "./Children/Select";
import MyInput from "./Children/Input";
import MyResult from "./Children/Result";
import Hook from '../../../Hooks/cementingHooks';
import { View, Text, Button } from 'react-native';
import { styles } from  './style.jsx';


const ConversionPage = () => { 
  const {navigation, saveInStorage, getItemInStorage} = Hook();
  const [factor, setFactor] = useState("0")
  const [modeConversion, setModeConversion] = useState("")
  

// useEffect(()=>{
// if(modeConversion.length) saveInStorage('modeConversion',modeConversion) ;
// setModeConversion((getItemInStorage('modeConversion')))
// },[modeConversion])


const handleClear =async()=> {
  setFactor(0); 
  saveInStorage('factor', "0"); 
  setModeConversion("")
};
const handleBack =()=> navigation.navigate("casingjob");



  return (
  <View style={styles.conversion_cont} >
    <Select
    modeConversion={modeConversion}
    setModeConversion={setModeConversion}
    />

    <View style={styles.main_container}>
    <View> 
      <MyInput
        modeConversion={modeConversion}
        setModeConversion={setModeConversion}
        factor={factor}
        setFactor={setFactor}
        />
      <MyResult
        factor={factor}
        modeConversion={modeConversion}
        setModeConversion={setModeConversion}
        />
      
      <View style={styles.button_container}>
       <Button 
        title="CLEAR"
        className= "button_clear" 
        color="red"
        onPress={handleClear} />
        <Button 
         title="EXIT" 
         className="button_back" 
         onPress={handleBack}/>
      </View>

    <Text style={styles.lexwares}>Lexwares &copy;2022</Text>
    </View>
    </View>
  </View>
  )
}

export default ConversionPage;
