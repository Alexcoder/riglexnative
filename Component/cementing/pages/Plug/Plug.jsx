import UniformStinger from "../../Plug/UniformStinger/UniformStinger";
import WithDrillPipe from "../../Plug/WithDrillPipe/WithDrillPipe";
import { useGlobalState } from "../../../../STATE/cementing/jobContext";
import { ScrollView, Text, View, Button, TouchableOpacity } from "react-native";
// import "./Plug.css";

const Plug = () => {
  const {isUniformStinger, setIsUniformStinger } = useGlobalState();
   const handleUniform = ( )=> {
       setIsUniformStinger(true)
   }
   const handleNotUniform = ( )=> {
       setIsUniformStinger(false)
   }


  return (
    <ScrollView
    style={{
      paddingTop: 8,
      marginBottom: 4,
      paddingLeft: 8,
      paddingRight: 8,

    }} 
    className="plug-cont">
      <View 
       style={{
        display: "flex",
        gap: 8,
       }}
       className="plug-btn-cont">
        <TouchableOpacity
            onPress={handleUniform} 
          style={{
             backgroundColor: isUniformStinger? "green" : "white",
             borderWidth : !isUniformStinger? 0.5 : 0,
             padding: 10,
             borderRadius: 2,
            }}>
          <Text
            style={{
              color: isUniformStinger? "white" : "black",
              textAlign: "center"
            }}>Uniform Stinger</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={handleNotUniform} 
            style={{
              backgroundColor: !isUniformStinger? "green" : "white",
              borderWidth : isUniformStinger? 0.5 : 0,
              padding: 10,
              borderRadius: 2,
          }}>
          <Text
            style={{
              color: !isUniformStinger? "white" : "black",
              textAlign: "center"
          }}>Stinger With DrillPipe</Text>
        </TouchableOpacity>

      </View>
      <Text>{ isUniformStinger && <UniformStinger /> } </Text>
      <Text > { !isUniformStinger && <WithDrillPipe/> } </Text>
    </ScrollView>
  )
}

export default Plug;
