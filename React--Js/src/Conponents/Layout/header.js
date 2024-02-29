import React from "react";
import { Text, Box } from "@chakra-ui/react";
const header = () => {
  return (
    <Box gap={"20px"}>
      <Text>
        <a href="/">Home</a>
      </Text>
      <Text>
        <a href="/contacts">contacts</a>
      </Text>
      <Text>
        <a href="/about">about</a>
      </Text>
    </Box>
  );
};

export default header;
