import React, { useState, useEffect, useMemo, useCallback } from "react";
import Result from "../result/result";
import { questions } from "../utilz";
import {styles} from "./questionStyles.jsx";
import CustomButton from "./CustomButton";
import Hooks from "../../../Hooks/cementingHooks.jsx"
import { Text, TouchableOpacity, View, Button } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Question = ({}) => {
  const route = useRoute();
  const navigation = useNavigation()
  const [question, setQuestion] = useState();
  const [correct, setCorrect] = useState();
  const [options, setOptions] = useState([]);
  const [countDown, setCountDown] = useState(20);
  const { getItemInStorage, saveInStorage, storedValue  } = Hooks();

  const [currentIndex, setCurrentIndex] = useState(
    Number(getItemInStorage("currentIndex")) || 0
  );
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState( 
    // (getItemInStorage("score")) || 0
     0
  );
  const [isFinish, setIsFinish] = useState(false);
  const isFinishInLocalStorage =  getItemInStorage("is-finish") ;
  const { category } = route.params;
  // console.log("storedValue", storedValue)
  // console.log("category", category)
  // console.log("correct", correct)
  // console.log("option", options)
  console.log("isFinish", isFinish)

  const filteredQuestionByCategory = useMemo(() => {
   const fetched = questions.filter((item) => item.category === category);
   const fetchedRandom = fetched.sort(() => Math.random()- 0.5);
    return fetchedRandom
  }, [category]);

  const lastIndex = filteredQuestionByCategory.length - 1;

  function proceedToNextQuestion(direction) {
    if (direction === "next" && Number(currentIndex) < Number(lastIndex)) {
      setCurrentIndex((prevIndex) => Number(prevIndex) + 1);
      saveInStorage("currentIndex", (Number(currentIndex) + 1));
      setSelected("");
      setCountDown(20);
    } else {
      setIsFinish(true);
      // navigation.navigate('quiz-result',{score, questionCategory: filteredQuestionByCategory})
      saveInStorage("is-finish", true);
    }
    computeScore(direction);
  }

  function extractSelectedOption(item) {
    setSelected(item);
  }

  const computeScore = useCallback(
    (direction) => {
      if (direction === "next" && selected === correct ) {
        setScore((prev) => (prev + 1));
        saveInStorage("score", (score + 1));
      }
    },
    [selected, correct, score]
  );

  useEffect(() => {
    // if (!isFinish) {
      setQuestion(filteredQuestionByCategory[currentIndex].question);
      setCorrect(filteredQuestionByCategory[currentIndex].correct);
      setOptions(() =>
        [correct, ...filteredQuestionByCategory[currentIndex].incorrect]
        .sort(() => Math.random() - 0.5));

    // if (isFinishInLocalStorage) {
    //   setIsFinish( true);
    // }
  }, [currentIndex, correct,  isFinish ]);

  useEffect(() => {
    if (countDown === 0) {
      proceedToNextQuestion("next");
    }
    let timerId;
    function decrementCountDown() {
      setCountDown((prev) => (prev === 0 ? 0 : prev - 1));
    }
    timerId = setTimeout(decrementCountDown, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, [countDown]);

  const getOptionsBackgroundColor = (option) => {
    if (selected === option && selected === correct) return styles.correct;
    else if (selected === option && selected !== correct) return styles.wrong;
    else if (option === correct) return styles.correct;
  };

  return (
    <View style={styles.quizApp_container}>
      {!isFinish && (
        <View style={styles.cate_count_container}>
           <Text style={{fontWeight: 700}}> {filteredQuestionByCategory?.length} Questions </Text>
          <Text
          style={{fontWeight: 700,fontSize: 32,
            position: 'absolute', left: 180, top: 0, 
            color:countDown <= 5 ? "red" : "blue"}}>
                {countDown}
        </Text> 
        </View>
      )}

      {isFinish && (
        <Result 
          score={score} 
          questionCategory={filteredQuestionByCategory} />
      )}

      {!isFinish && (
        <View style={styles.question_container}>
          <View style={styles.question_con}>
            <Text style={{marginBottom:10}}>Question {currentIndex + 1}</Text>
            <Text style={{fontSize: 16, fontWeight:"600", textAlign: 'center', color:"blue"}}> {question} </Text>
            <View style={{marginTop: 40,}}>
              {options.map((option, index) => (
                <View key={index}>
                  <TouchableOpacity
                    onPress={() => extractSelectedOption(option)}
                    style={selected ? getOptionsBackgroundColor(option) : styles.singleOption}              
                  >
                    <Text style={{marginTop: 10, padding: 20,minWidth: 300}}>{option}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <View style={styles.quizApp_nav_button}>
              {(selected && !isFinish)&& (
                <Button
                  onPress={() => {
                     proceedToNextQuestion("next");
                  }}
                  title="next"
                />
              )}
            </View>
          </View>
      </View>
            )}
    </View>
  );
};

export default Question;
