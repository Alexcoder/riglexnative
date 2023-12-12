import {styles} from "./resultStyles.jsx";
import Hooks from "../../../Hooks/cementingHooks.jsx";
import { Button, Text, View } from "react-native";

const Result = ({ score, questionCategory, }) => {
  // { score, questionCategory, route, navigate } 
  const percentageScore = ( score/questionCategory?.length ) * 100 ;
  const { 
    //  route , 
    //  navigation, 
     getItemInStorage, 
     saveInStorage, 
     clearItemInStorage }
    = Hooks();
  // const location = route;


  return (
    <View className="result-container">
      <View className="result-sub-cont">
        <Text style={{fontWeight: 700}}>
          Score {score} / {questionCategory?.length}
        </Text>
        <Text style={{fontWeight: 700}}>
          {percentageScore.toFixed(0)} %
        </Text>
        <Button
         title="Retake"
          style={styles.result_button}
          onPress={() => {
            clearItemInStorage("score");
            clearItemInStorage("quiz-finish");
            clearItemInStorage("currentIndex");
            // navigate("plugjob");
          }}
        />
      </View>
    </View>
  );
};

export default Result;
