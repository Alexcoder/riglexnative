import React, { useState, useEffect, useMemo, useCallback } from "react";
import Result from "../result/result";
import { questions } from "../utilz";
import {styles} from "./questionStyles.jsx";
import CustomButton from "./CustomButton";
import Hooks from "../../../Hooks/cementingHooks.jsx"
import { Text, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const Question = ({ setShuffleQuestion }) => {
  const route = useRoute();
  const navigation = useNavigation()
  const [question, setQuestion] = useState();
  const [correct, setCorrect] = useState();
  const [options, setOptions] = useState([]);
  const [countDown, setCountDown] = useState(20);
  const { getItemInStorage, saveInStorage,  } = Hooks();
  const location = route;
  const {navigate} = navigation;

  const [currentIndex, setCurrentIndex] = useState(0
    // Number(getItemInStorage("currentIndex")) || 0
  );
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState( 0
    // Number(getItemInStorage("score")) || 0
  );
  const [isFinish, setIsFinish] = useState(false);
  const isFinishInLocalStorage = getItemInStorage("is-finish");
  const { category } = route.params;

  const filteredQuestionByCategory = useMemo(() => {
    return questions.filter((item) => item.category === category);
  }, [category]);

  const lastIndex = filteredQuestionByCategory.length - 1;

  function proceedToNextQuestion(direction) {
    if (direction === "next" && currentIndex < lastIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      saveInStorage("currentIndex", currentIndex + 1);
      setSelected("");
      setCountDown(20);
    } else {
      setIsFinish(true);
      saveInStorage("is-finish", !isFinish);
    }
    computeScore(direction);
  }

  function extractSelectedOption(item) {
    setSelected(item);
  }

  const computeScore = useCallback(
    (direction) => {
      if (direction === "next" && selected === correct) {
        setScore((prev) => prev + 1);
        saveInStorage("score", score + 1);
      }
    },
    [selected, correct, score]
  );

  useEffect(() => {
    if (!isFinishInLocalStorage) {
      setQuestion(filteredQuestionByCategory[currentIndex].question);
      setCorrect(filteredQuestionByCategory[currentIndex].correct);
      setOptions(() =>
        [correct, ...filteredQuestionByCategory[currentIndex].incorrect].sort(
          () => Math.random() - 0.5
        )
      );
    }

    if (isFinishInLocalStorage) {
      setIsFinish(isFinishInLocalStorage);
    }
  }, [currentIndex, correct, isFinishInLocalStorage]);

  useEffect(() => {
    if (countDown === 0) {
      proceedToNextQuestion("next");
    }
    let timerId;
    function decrementCountDown() {
      setCountDown((prev) => (prev === 0 ? 0 : prev - 1));
      timerId = setTimeout(decrementCountDown, 3000);
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
      {!isFinishInLocalStorage && (
        <View style={styles.cate_count_container}>
          <Text style={styles.category}>{filteredQuestionByCategory.length} Questions </Text>
          <Text style={styles.category}>Score {score}</Text>
          <Text
            style={countDown <= 5 ? styles.count_down_end : styles.count_down_start}
          >
            {countDown}
          </Text>
        </View>
      )}

      {isFinishInLocalStorage && (
        <Result 
          // location={location} 
          // navigate={navigate}
          // route={route}
          score={score} 
          questionCategory={filteredQuestionByCategory} />
      )}

      {!isFinishInLocalStorage && (
        <View style={styles.question_container}>
          <Text style={styles.questionNumber}>Question {currentIndex + 1}</Text>
          <View style={styles.question_con}>
            <Text style={styles.question}>{question}</Text>
            <View style={styles.quizApp_option_container}>
              {options.map((option, index) => (
                <CustomButton
                  key={index}
                  isEditable={!selected}
                  onPress={() => extractSelectedOption(option)}
                  styles={`${styles.singleOption} ${
                    selected && getOptionsBackgroundColor(option)
                  }`}
                  // className={`singleOption ${
                  //   selected && getOptionsBackgroundColor(option)
                  // }`}
                  title={option}
                />
              ))}
            </View>
            <View style={styles.quizApp_nav_button}>
              {selected && (
                <CustomButton
                  onPress={() => {
                    proceedToNextQuestion("next");
                    setShuffleQuestion(false);
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
