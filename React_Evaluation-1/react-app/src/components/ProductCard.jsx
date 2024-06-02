import React from "react";
import {
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ProductCard({ title, category, price }) {
  const navigate = useNavigate();


  return (
    <Card>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Category
            </Heading>
            <Text pt="2" fontSize="sm">
              {category}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Price
            </Heading>
            <Text pt="2" fontSize="sm">
              {price}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          onClick={()=>navigate("/product-details")}
          variant="solid"
          colorScheme="blue"
        >
          <Text pt="2" fontSize="sm">
            More Details
          </Text>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
