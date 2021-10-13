import React from "react";
import {
  Box,
  Textarea,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  Select,
  SimpleGrid,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Questionaire({
  type,
  question,
  answer,
  index,
  options,
  setQuestions,
  questions,
}) {
  const onChange = (answer) => {
    setQuestions(
      questions.map((data, i) => {
        if (i === index) {
          console.log(answer);
          data.answer = answer;
        }
        return data;
      })
    );
  };
  return (
    <Box bg="white" my={4} p={6} color="gray.700">
      <Text size="sm" mb={3}>
        Q{index + 1}. {question}
        <span style={{ color: "red" }}>*</span>
      </Text>
      {type === "search" && (
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="gray.500" />}
          />
          <Input
            onChange={(e) => onChange(e.currentTarget.value)}
            placeholder="Placeholder text..."
            size="md"
            fontFamily="sans-serif"
            fontStyle="italic"
            borderRadius="sm"
            borderWidth="2px"
            value={answer}
          />
        </InputGroup>
      )}
      {type === "dropdown" && (
        <Select
          onChange={(e) => onChange(e.currentTarget.value)}
          borderRadius="sm"
          borderWidth="2px"
          value={answer}
        >
          <option hidden>Select</option>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </Select>
      )}

      {type === "multipleChoice" && (
        <SimpleGrid columns={3} spacing="3px" height="40px">
          {options.map((option) => (
            <RadioGroup onChange={onChange} value={answer}>
              <Radio value={option.value}>{option.label}</Radio>
            </RadioGroup>
          ))}
        </SimpleGrid>
      )}

      {type === "textArea" && (
        <Textarea
          value={answer}
          borderRadius="sm"
          borderRadius="sm"
          borderWidth="2px"
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      )}
    </Box>
  );
}

export default Questionaire;
