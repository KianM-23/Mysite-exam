import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";

function SurveyResponse({ questions }) {
  return (
    <Box>
      <Center>
        <Box>
          <Text fontSize="xl" mt="10" color="gray.600">
            Survey Response Summary
          </Text>
          {questions.map((question, index) => (
            <Box mt="10">
              <Text fontSize="md">{`Q${index + 1}. ${question.question}`}</Text>
              <Text fontWeight="bold" fontSize="md" mt="6px" color="gray.600">
                {question.answer}
              </Text>
            </Box>
          ))}
        </Box>
      </Center>
    </Box>
  );
}

export default SurveyResponse;
