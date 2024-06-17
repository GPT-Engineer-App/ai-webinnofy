import { Box, Heading, Text, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button } from "@chakra-ui/react";

const Pricing = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" color="brand.700" mb={6}>Pricing</Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Card>
        <CardHeader>
          <Heading as="h3" size="lg">Normal Plan</Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize="lg">$599 one-time purchase</Text>
          <Text>Includes a well-prompted GPT-3.5 model for customer support only, with 1 AI agent.</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue">Buy Now</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading as="h3" size="lg">Pro Plan</Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize="lg">$7999 one-time purchase</Text>
          <Text>Includes models like GPT-4o, Opus, and Llama3, with 50 AI agents for various business roles (e.g., marketing, finance, healthcare). Each agent has genius characteristics in their respective fields and can be unlocked for specific business types by removing a comment symbol in the IDE.</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue">Buy Now</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  </Box>
);

export default Pricing;