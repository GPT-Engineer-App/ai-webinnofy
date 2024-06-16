import { Container, Text, VStack, Heading, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" color="brand.700">Welcome to Webinnofy</Heading>
        <Text fontSize="lg" textAlign="center">
          Harness the power of AI to create exceptional customer experiences. Automate conversations, personalize interactions, and gain valuable insights with Webinnofy.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;