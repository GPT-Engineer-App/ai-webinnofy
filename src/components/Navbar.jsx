import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="brand.900" p={4}>
    <Flex align="center">
      <Heading as="h1" size="lg" color="white">Webinnofy</Heading>
      <Spacer />
      <Link as={RouterLink} to="/" color="white" mx={2}>Home</Link>
      <Link as={RouterLink} to="/about" color="white" mx={2}>About</Link>
      <Link as={RouterLink} to="/features" color="white" mx={2}>Features</Link>
      <Link as={RouterLink} to="/contact" color="white" mx={2}>Contact</Link>
    </Flex>
  </Box>
);

export default Navbar;