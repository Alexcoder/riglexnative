import { useState } from "react";
import InputField from "./Input/Input";
import useCsgDobData from "./InputData";
import Preview from "./Preview";
import Result from "./Result/Result";
// import "./Input/styles.css";
import { useGlobalState } from "../../../STATE/cementing/jobContext";

import { View, Text , Button, StyleSheet} from "react-native";


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
    }
      
  return (
      <View 
    //   className="job"
      >

        <Text 
        //  style={{flex: 4}}
         >Casing Type 
         </Text>
        <View
        //  className="type"
        style={{display: "flex", gap: 3, flexDirection:"row", width: "200%"}}
         >
            <Button 
            title="13-3/8 inch"
            //  className={casingType==="13-3/8 inch"? "btn-group" : "btn"} 
            onPress={()=> setCasingType("13-3/8 inch")}/>
            <Button 
             title="9-5/8 inch"
             //  className={casingType==="9-5/8 inch"? "btn-group" : "btn"} 
             onPress={()=> setCasingType("9-5/8 inch")}/>
            <Button 
             title="7 inch"
            //  className={casingType==="7 inch"? "btn-group" : "btn"} 
             onPress={()=> setCasingType("7 inch")}/>
        </View>
        { page===1 &&
            InputData1.map((item, i)=>
            <Text key={i}> <InputField item={item} /> </Text> )
        }
        { page===2 &&
            InputData2.map((item, i)=>
            <Text key={i}> <InputField item={item}/> </Text> )
        }
        { page===3 &&
            InputData3.map((item, i)=>
            <Text key={i}> <InputField item={item}/> </Text> )
        }
        { page===4 &&
            InputData4.map((item, i)=>
            <Text key={i}> <InputField item={item}/> </Text> )
        }
       { page===5 && <Preview /> }
       { page===6 && <Result  /> }
        <View
        //  style={{display:"flex", gap:"1rem", flexWrap:"nowrap",}}
         >
            <Button
            title="" 
             onPress={()=> goTo(1)} 
             style={styles.nav_btn}
             />
            <Button
            title="" 
             onPress={()=> goTo(2)} 
             style={styles.nav_btn}
             />
            <Button
             title="" 
             onPress={()=> goTo(3)} 
             style={styles.nav_btn}
             />
            <Button
            title="" 
             onPress={()=> goTo(4)} 
             style={styles.nav_btn}
             />
            <Button
            title="" 
             onPress={()=> goTo(5)}
             style={styles.nav_btn}
             />
            <Button
            title="" 
             onPress={()=> goTo(6)} 
             style={styles.nav_btn}
             />
        </View>
        <View 
          style={{display:"flex", gap: 4 }}
          >
        { page > 1 && 
          <Button 
          title="back" 
          style={{flex:"1 1 50%", outline:"none"}}   
          onPress={()=>pageNumber("prev")} />}
        {
        page < 6 && 
        <Button
          title={page===4? "Preview" : page===5? "Calculate" : "next"}
          style={{flex:"1 1 50%", outline:"none"}}  
          onPress={()=>pageNumber("next")} />
        }

        </View>
    </View>
  )
}

export default Job;

const styles = StyleSheet.create({
  nav_btn : {
  //  flex:"1 1 10%",  
   flex: 1,  
  //  background: page===6? "green" : "white",
   borderWidth: 1, 
   borderColor:"gray", 
  //  outline:"none"
  }
})
