import React from "react";
import {
  Box,
  Input,
  SimpleGrid,
  Heading,
  Flex,
  Button,
  Spacer,
  Text,
} from "@chakra-ui/react";

function UserInformation({ register }) {
  return (
    <Box bg="white" p={4} color="gray" mb={10}>
      <SimpleGrid columns={2}>
        <Box placeholder="Placeholder text..." size="lg" m={2}>
          <Text size="sm" m={2} fontSize="sm" fontWeight="bold">
            FIRST NAME
          </Text>
          <Input
            {...register("firstName")}
            placeholder="Placeholder text..."
            size="md"
            fontFamily="sans-serif"
            fontStyle="italic"
            borderRadius="sm"
            borderWidth="2px"
            p={4}
            height="50px"
          />
        </Box>
        <Box placeholder="Placeholder text..." size="lg" m={2}>
          <Text size="sm" m={2} fontSize="sm" fontWeight="bold">
            LAST NAME
          </Text>
          <Input
            {...register("lastName")}
            placeholder="Placeholder text..."
            size="md"
            fontFamily="sans-serif"
            fontStyle="italic"
            borderRadius="sm"
            borderWidth="2px"
            p={4}
            height="50px"
          />
        </Box>
      </SimpleGrid>
      <Box placeholder="Placeholder text..." size="lg" m={2}>
        <Text size="sm" m={2} fontSize="sm" fontWeight="bold">
          EMAIL <span style={{ color: "red" }}>*</span>
        </Text>
        <Input
          {...register("email")}
          width="100%"
          placeholder="Placeholder text..."
          size="md"
          fontFamily="sans-serif"
          fontStyle="italic"
          borderRadius="sm"
          borderWidth="2px"
          p={4}
          height="50px"
        />
      </Box>
      <Flex p="2">
        <Spacer />
        <Button
          type="submit"
          p="4"
          mt="4"
          bg="#8DC63F"
          borderRadius="sm"
          color="white"
          colorScheme="#8DC63F"
          fontWeight="normal"
        >
          Submit
        </Button>
      </Flex>
    </Box>
  );
}

export default UserInformation;
