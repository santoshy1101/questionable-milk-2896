import React from "react";
import { Box, Badge, Image } from "@chakra-ui/react";
import { img1 } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
//import {AiFillStar} from "react-icons/ai"

const ProductCard = ({
  rating,
  reviews,
  id,
  img1,
  name,
  price,
  delivery,
  productKey,
}) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Link to={`/${productKey}/${id}`}>
        <Image src={img1} alt="img1" height="350px" width="100%" />

        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
            fontSize="xl"
          >
            {name}
          </Box>

          <Box>
            <Box fontSize="xl">
              {price}{" "}
              <Box as="span" color="gray.600" fontSize="sm">
                {" onwards"}
              </Box>{" "}
            </Box>

            <br />
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {delivery}
            </Badge>
          </Box>
          <Box width="fit-content" margin="auto">
            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < Math.ceil(rating) ? "blue.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {reviews}
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default ProductCard;
