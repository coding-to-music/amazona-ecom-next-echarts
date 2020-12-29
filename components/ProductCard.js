import { Box, Img, Text, Icon, Flex} from '@chakra-ui/react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const { name, image, price } = product
    return (
        <Box borderWidth="1px" borderColor="gray.200" rounded="md" bg="gray.50">
            <Img src={image} alt="product image" maxWidth="16rem" width="100%" rounded="md" borderBottomRadius="none"/>
         <Box display="flex" flexDirection="column" p={4}>
            <Text as="h2" fontSize="lg" mb={3}>{name}</Text>
            <Flex mb={1}>
                <Icon as={FaStar} color="yellow.500"/>
                <Icon as={FaStar} color="yellow.500"/>
                <Icon as={FaStar} color="yellow.500"/>
                <Icon as={FaStar} color="yellow.500"/>
                <Icon as={FaStarHalfAlt} color="yellow.500"/>
            </Flex>
            <Text fontSize="lg" mb={1}>${price}</Text>
         </Box>
        </Box>
    );
};

export default ProductCard;
