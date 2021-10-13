import React from "react";
import { Divider, Center } from "@chakra-ui/react";

function Spacing() {
  return (
    <Center height="80px">
      <Divider
        style={{ padding: "2px", backgroundColor: "gray", width: "70%" }}
        orientation="horizontal"
      />
    </Center>
  );
}

export default Spacing;
