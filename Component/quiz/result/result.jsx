import {styles} from "./resultStyles.jsx";
import Hooks from "../../../Hooks/cementingHooks.jsx";
import { Button, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

const Result = ({ score, questionCategory}) => {
  // { score, questionCategory, route, navigate } 
  const route = useRoute()
  const {  } = route.params;
  const percentageScore = ( score/questionCategory?.length ) * 100 ;
  const { 
    //  route , 
     navigation, 
    //  getItemInStorage, 
    //  saveInStorage, 
     clearItemInStorage }
    = Hooks();
  // const location = route;


  return (
        <View style={styles.result_container}>
        <View style={styles.result_sub_cont}>
        <Text style={{}}>
          Score {score || 0} / {questionCategory?.length || 0}
        </Text>
        <Text style={{}}>
          {percentageScore.toFixed(0)} %
        </Text>
        <Button
         title="Retake"
          style={styles.result_button}
          onPress={() => {
            navigation.navigate("quiz");
            // clearItemInStorage("score");
            // clearItemInStorage("quiz-finish");
            // clearItemInStorage("currentIndex");
          }}
        />
      </View>
    </View>
  );
};

export default Result;
