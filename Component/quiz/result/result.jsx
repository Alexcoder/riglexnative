import {styles} from "./resultStyles.jsx";
import Hooks from "../../../Hooks/cementingHooks.jsx";
import { Button, Text, View } from "react-native";

const Result = ({ score, questionCategory, }) => {
  // { score, questionCategory, route, navigate } 
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
    <View className="result-container">
      <View className="result-sub-cont">
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
            clearItemInStorage("score");
            clearItemInStorage("quiz-finish");
            clearItemInStorage("currentIndex");
            navigation.navigate("quiz-question");
          }}
        />
      </View>
    </View>
  );
};

export default Result;
