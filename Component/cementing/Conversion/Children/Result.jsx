
import { Text, View } from "react-native";
import useConversion from "./useConversion";

// import '../Conversion.css';


const Result =({factor, modeConversion, setModeConversion })=>{
    const {ResultChanger, resultUnit, baseUnit,}= useConversion(factor, modeConversion, setModeConversion )


    return(
        <View style={{marginTop: 52}}>
         <Text>
                
            {
            !factor & !modeConversion ?
            <Text className='text'> Select To Continue !</Text>
            : 
            !factor ?
            <Text className='text'>
                Input 
                <Text style={{color: "red"}}> {baseUnit} </Text> 
                 Value To Continue !
             </Text>
            :
            factor<0 ?  
            <Text 
              style={{color: "red",fontStyle:"italics", marginTop:"2rem"}}
              className='div'>
                 Error: Negative Input !
             </Text>
            :
            <Text className='text' > 
               {factor}
             <Text style={{color:"red"}}> {baseUnit}
            </Text> equals  {ResultChanger} <Text style={{color: "blue"}}>{resultUnit}</Text>
          </Text>               
            }
        </Text>
        </View>  
    )
};

export default Result;