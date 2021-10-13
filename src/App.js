import React from "react";
import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import SurveyResponse from "./components/SurveyResponse";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useForm } from "react-hook-form";
import Questionaire from "./components/Questionaire";
import UserInformation from "./components/UserInformation";
import Spacing from "./components/Spacing";

function App() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (values) => {
    const answers = questions.map((answer) => {
      return answer.answer;
    });
    console.log(answers, values);
    reset({});
    setQuestions(data);
  };

  const data = [
    {
      question: "What was the name of the event that you attended?",
      type: "search",
      answer: "",
    },
    {
      question: "What dates did you attend the event?",
      type: "dropdown",
      answer: "",
      options: [
        {
          label: "22 Sep, 2021 - 30 Sep, 2021",
          value: "22 Sep, 2021 - 30 Sep, 2021",
        },
        {
          label: "23 Oct, 2021 - 30 Oct, 2021",
          value: "23 Oct, 2021 - 30 Oct, 2021",
        },
        {
          label: "24 Nov, 2021 - 30 Nov, 2021",
          value: "24 Nov, 2021 - 30 Nov, 2021",
        },
      ],
    },
    {
      question: "Overall, how would you rate the event?",
      type: "multipleChoice",
      answer: "",
      options: [
        {
          label: "Excellent",
          value: "excellent",
        },
        {
          label: "Very Good",
          value: "VeryGood",
        },
        {
          label: "Good",
          value: "good",
        },
        {
          label: "Fair",
          value: "fair",
        },
        {
          label: "Poor",
          value: "poor",
        },
      ],
    },
    {
      question: "What did you like about the event?",
      type: "textArea",
      answer: "",
    },
    {
      question: "What didn’t you like about the event?",
      type: "textArea",
      answer: "",
    },
  ];

  const [questions, setQuestions] = React.useState(data);
  const answered = questions.filter((question) => question.answer);
  return (
    <Box>
      <Flex style={{ backgroundColor: "#F7F9FB" }}>
        <Box width={{ sm: "100%", md: "100%", lg: "64%" }} p="6">
          <Header />
          {questions.map((question, index) => (
            <Questionaire
              setQuestions={setQuestions}
              questions={questions}
              {...question}
              index={index}
            />
          ))}
          <Spacing />

          <form onSubmit={handleSubmit(onSubmit)}>
            <UserInformation register={register} />
          </form>
        </Box>
        <Box
          bg="white"
          width="36%"
          p="10"
          display={{ sm: "none", md: "none", lg: "block" }}
        >
          <div className="sideNav">
            <SurveyResponse questions={questions} />
          </div>
        </Box>
        =
      </Flex>

      <Footer answered={answered} />
    </Box>
  );
}

export default App;
