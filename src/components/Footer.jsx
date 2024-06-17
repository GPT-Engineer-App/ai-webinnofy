import { Box, Flex, Link, Text, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => (
  <Box bg="brand.900" p={4} mt={10}>
    <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
      <Text color="white">© 2023 Webinnofy. All rights reserved.</Text>
      <Flex>
        <Link as={RouterLink} to="/" color="white" mx={2}>Home</Link>
        <Link as={RouterLink} to="/about" color="white" mx={2}>About</Link>
        <Link as={RouterLink} to="/features" color="white" mx={2}>Features</Link>
        <Link as={RouterLink} to="/pricing" color="white" mx={2}>Pricing</Link>
        <Link as={RouterLink} to="/contact" color="white" mx={2}>Contact</Link>
      </Flex>
      <Flex>
        <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} colorScheme="whiteAlpha" mx={1} />
        <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} colorScheme="whiteAlpha" mx={1} />
        <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} colorScheme="whiteAlpha" mx={1} />
      </Flex>
    </Flex>
  </Box>
);

export default Footer;