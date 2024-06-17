import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" color="brand.700">Welcome to Webinnofy</Heading>
        <Text fontSize="lg" textAlign="center">
          Harness the power of AI to create exceptional customer experiences. Automate conversations, personalize interactions, and gain valuable insights with Webinnofy.
        </Text>
        <Button colorScheme="blue" size="lg" mt={4}>Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;