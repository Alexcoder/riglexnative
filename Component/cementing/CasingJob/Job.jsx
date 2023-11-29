import { useState } from "react";
import InputField from "./Input/Input";
import useCsgDobData from "./InputData";
import Preview from "./Preview";
import Result from "./Result/Result";
import { styles } from "./Input/styles";
import { useGlobalState } from "../../../STATE/cementing/context/Context";
import { View, Text, ScrollView, Button } from "react-native";


const Job = () => {
    const [page, setPage] = useState(1);
    const { casingType, setCasingType } = useGlobalState()
    const {InputData1, InputData2, InputData3, InputData4} = useCsgDobData()
    const pageNumber=(goTo)=>{
        setPage((prev)=>
                goTo==="next" && prev < 5  ? prev + 1 :
                goTo==="prev" && prev > 1 ? prev - 1 : 6
                )
    };

    const goTo = (myPage) => {
        if(page > myPage) setPage(myPage);
        return
    };

    const stage_btn = (number) => {
        return{
            flex:"1 1 10%",  
            background: page===number? "green" : "white", 
            borderColor:"gray", 
            borderWidth: 0.5, 
            // border:"0.5px solid gray", 
            // outline:"none"
        }
    }
      
  return (
      <ScrollView className="job">

        <Text style={{flex: "1 1 100%"}}>Casing Type</Text>
        <View className="type">
            <Button
             title="13-3/8 inch" 
             style={casingType==="13-3/8 inch"? styles.btn_group : styles.btn} 
             onPress={()=> setCasingType("13-3/8 inch")} />  
            <Button
             title="9-5/8 inch" 
             style={casingType==="9-5/8 inch"? styles.btn_group : styles.btn} 
             onPress={()=> setCasingType("9-5/8 inch")} />
            <Button
             title="7 inch" 
             style={casingType==="7 inch"? styles.btn_group : styles.btn} 
             onPress={()=> setCasingType("7 inch")}/> 
        </View>
        { page===1 &&
            InputData1.map((item, i)=>
            <View key={i}> <InputField item={item} /> </View> )
        }
        { page===2 &&
            InputData2.map((item, i)=>
            <View key={i}> <InputField item={item}/> </View> )
        }
        { page===3 &&
            InputData3.map((item, i)=>
            <View key={i}> <InputField item={item}/> </View> )
        }
        { page===4 &&
            InputData4.map((item, i)=>
            <View key={i}> <InputField item={item}/> </View> )
        }
       { page===5 && <Preview /> }
       { page===6 && <Result  /> }
        <View 
          style={{
           display:"flex", 
           flexDirection:"row",
           gap: 10, 
           flexWrap:"nowrap",
           }}>
            <Button 
             title=""
              onPress={()=> goTo(1)} 
              style={stage_btn(1)} />
            <Button 
              title=""
              onPress={()=> goTo(2)} 
              style={stage_btn(2)} />
            <Button 
              title=""
              onPress={()=> goTo(3)} 
              style={stage_btn(3)} />
            <Button 
              title=""
              onPress={()=> goTo(4)} 
              style={stage_btn(4)} />
            <Button 
              title="" 
              onPress={()=> goTo(5)} 
              style={stage_btn(5)} />
            <Button 
              title="" 
              onPress={()=> goTo(6)} 
              style={stage_btn(6)} />
        </View>
        <View style={{display:"flex", flexDirection:'row', gap: 7 }}>
        { page > 1 &&  
          <Button 
            title= "back"
            style={{flex:"1 1 50%", outline:"none"}}   
            onPress={()=>pageNumber("prev")} />
         }
        {
         page < 6 && 
          <Button  
           title={page===4? "Preview" : page===5? "Calculate" : "next"}
           style={{flex:"1 1 50%", outline:"none"}}  
           onClick={()=>pageNumber("next")} />
        }

        </View>
    </ScrollView>
  )
}

export default Job;
