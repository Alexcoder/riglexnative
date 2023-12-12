import { useState } from "react";

import {styles} from "./homeStyles.jsx";
import { questions } from "../utilz";
import Hook from "../../../Hooks/cementingHooks.jsx";
import { Button, ScrollView, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRoute } from "@react-navigation/native";

const Home = ({navigation}) => {
  const [category, setCategory] = useState(questions[0].category);
  const [shuffleQuestion,setShuffleQuestion] = useState(false);
  // const { navigation } = Hook();
  const { navigate } = navigation;

  const extractCategory = () => {
    const uniqueCategory = new Set();
    for (const question of questions) {
      if (!uniqueCategory.has(question.category)) {
      }
      uniqueCategory.add(question.category);
    }

    return Array.from(uniqueCategory);
  };

  const selectCategory = extractCategory();

  return (
    <View style={styles.home_cont} >
      <Text style={{color:"silver", fontSize: 25, fontWeight: 700,}}>Test your knowledge</Text>
      <View style={styles.home_sub_cont}>
        <Picker
          style={styles.home_select}
          selectedValue={category} 
          onValueChange={(e) => setCategory(e)}>
            {selectCategory.map((item, index) => (
                <Picker.Item 
                 key={index}
                 value={item}
                 label={item}
              />          
          ))}
        </Picker>
        <Button
          title='Continue'
          // style={styles.home_continue_button}
           onPress={() => {
            setShuffleQuestion(true);
            navigate(`question`,  { category  });
          }}
        />
      </View>
    </View>
  );
};

export default Home;
