import React from "react";
import { Box, Badge } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
//import {AiFillStar} from "react-icons/ai"

const ProductCard = ({
  brand,
  price,
  discount,
  id,
  image,
  name,
  og_price,
}) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Link to={`/All Top Wear/${id}`}>
        <Image src={image} alt="Image" height="350px" width="100%" />

        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {name}
          </Box>

          <Box>
            {price || og_price}
            <Box as="span" color="gray.600" fontSize="sm">
              {" onwards"}
            </Box>
            <br />
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Free Delivery
            </Badge>
          </Box>
          <Box width="fit-content" margin="auto">
            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < 4 ? "teal.500" : "gray.300"} />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {13} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default ProductCard;
