import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const index = ({ item }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="{item.thubnailUrl}"
        alt="item"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{item?.title}</Heading>

          <Text py="2">item description</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default index;
