import { ScrollView, View } from "react-native";
import  {Picker}  from "@react-native-picker/picker";
import {styles} from '../style.jsx';

const Select =(props)=>{
    const {modeConversion, setModeConversion}= props;

    return(
      <View>

        <ScrollView style={styles.select}>
       <Picker   
        selectedValue={modeConversion} 
        onValueChange={(itemValue, itemIndex)=> setModeConversion(itemValue)}
        style={styles.selectx}> 
            <Picker.Item isEditable={modeConversion} label="SELECT"/>
            <Picker.Item 
              className={modeConversion==="bbl-cuft"?  "green" : ""} 
              value={"bbl-cuft"}
              label="Barrel To CubicFt"/>
            <Picker.Item 
              className={modeConversion==="cuft-bbl"?  "green" : ""} 
              value={"cuft-bbl"}
              label="CubicFt To Barrel"/>
            <Picker.Item 
              className={modeConversion==="bbl-gal"?  "green" : ""} 
              value={"bbl-gal"}
              label="Barrel To Gallon"/>
            <Picker.Item 
              className={modeConversion==="gal-bbl"?   "green" : ""} 
              value={"gal-bbl"}
              label="Gallons To Barrel"/>
            <Picker.Item 
              className={modeConversion==="bbl-m3"? "green" : ""} 
              value={"bbl-m3"}
              label="Barrel To CubicMeter"/>
            <Picker.Item 
              className={modeConversion==="m3-bbl"?    "green" : ""} 
              value={"m3-bbl"}
              label="CubicMeter To Barrel"/>
            <Picker.Item 
              className={modeConversion==="cuft-m3"?   "green" : ""} 
              value={"cuft-m3"}
              label="CubicFt To CubicMeter"/>
            <Picker.Item 
            className={modeConversion==="m3-cuft"? "green" : ""} 
            value={"m3-cuft"}
            label="CubicMeter To CubicFt"/>
            <Picker.Item 
            className={modeConversion==="ft-inch" ? "green" : ""} 
            value={"ft-inch"}
            label="Feet To Inches"/>
            <Picker.Item 
              className={modeConversion==="inch-ft" ? "green" : ""} 
              value={"inch-ft"}
              label="Inches To Feet"/>
            <Picker.Item 
              className={modeConversion==="lbs-kg"? "green": ""} 
              value={"lbs-kg"}
              label="Pounds To Kilogram" />
            <Picker.Item 
              className={modeConversion==="kg-lbs"?    "green" : ""} 
              value={"kg-lbs"}
              label="Kilogram To Pound" />
            <Picker.Item 
              className={modeConversion==="sacks-MT" ?   "green" : ""} 
              value={"sacks-MT"}
              label="Cement Sacks To MetricTon"/>
            <Picker.Item className={modeConversion==="MT-sacks"    ?   "green" : ""} 
              value={"MT-sacks"}
              label="Cement MetricTon To Sacks"/>
            <Picker.Item className={modeConversion==="ft-m"    ?   "green" : ""} 
              value={"ft-m"}
              label="Feet To Meter" />
            <Picker.Item className={modeConversion==="m-ft"     ?   "green" : ""} 
              value={"m-ft"}
              label="Meter To Feet" />
            <Picker.Item className={modeConversion==="ltr-gal"     ?   "green" : ""} 
              value={"ltr-gal"}
              label="Litre To Gallon"/>
            <Picker.Item className={modeConversion==="gal-ltr"     ?   "green" : ""} 
              value={"gal-ltr"}
              label="Gallon To Litre"/>
            <Picker.Item className={modeConversion==="ltr-bbl"     ?   "green" : ""} 
              value={"ltr-bbl"}
              label="Litre To Barrel"/>
            <Picker.Item className={modeConversion==="bbl-ltr"     ?   "green" : ""} 
              value={"bbl-ltr"}
              label="Barrel To Litre"/>
            <Picker.Item 
              className={modeConversion==="Centigrade-Fahrenheit" ?   "green" : ""} 
              value={"Centigrade-Fahrenheit"}
              label="Celsius To Fahrenheit"/>
            <Picker.Item 
              className={modeConversion==="Fahrenheit-Centigrade" ?   "green" : ""} 
              value={"Fahrenheit-Centigrade"}
              label="Fahrenheit To Celsius"/>
            </Picker>
        </ScrollView> 
        </View>
    )
}

export default Select;