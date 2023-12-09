// import {TextField } from '@mui/material';
// import SyncAltIcon from '@mui/icons-material/SyncAlt';
import {styles} from '../style.jsx';

import useConversion from "./useConversion";
import { Text, TextInput, View } from 'react-native';


const Input =(props)=>{
    const {factor, setFactor, modeConversion, setModeConversion}= props;
    const {baseUnit, data, Revert}= useConversion(factor, modeConversion, setModeConversion);


    return(
        <View style={styles.input_cont}>
            <Text style={styles.h1_data}> {data} </Text>
             <View style={styles.textField_cont}>
              <TextInput
                 keyboardType='numeric' 
                //  value={factor} 
                 placeholder={`${baseUnit}` || "input value"} 
                 style={{fontWeight: "700", width: 200,  }}
                 onChangeText={(e)=>  setFactor(modeConversion.length?  e : "")}
                />
              {/* <div onClick={Revert}><SyncAltIcon sx={{marginTop:"1rem", }}/></div> */}
              <Text onPress={Revert} style={{marginTop: 4, width: "45" }}>Revert</Text>
          </View>
          </View>
    
    )


}

export default Input;