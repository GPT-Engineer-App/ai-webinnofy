import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

const AIPage = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h2" size="xl" color="brand.700">AI Agents</Heading>
      <Text fontSize="lg">
        Discover the different types of AI agents available, their capabilities, and how they can be customized to meet specific business needs.
      </Text>
      <VStack align="start" spacing={4} maxW="sm">
        <Image src="/images/ai-agent1.jpg" alt="AI Agent 1" />
        <Text fontSize="lg" fontWeight="bold">AI Agent 1</Text>
        <Text>Capabilities and use cases of AI Agent 1.</Text>
      </VStack>
      <VStack align="start" spacing={4} maxW="sm">
        <Image src="/images/ai-agent2.jpg" alt="AI Agent 2" />
        <Text fontSize="lg" fontWeight="bold">AI Agent 2</Text>
        <Text>Capabilities and use cases of AI Agent 2.</Text>
      </VStack>
      <VStack align="start" spacing={4} maxW="sm">
        <Image src="/images/ai-agent3.jpg" alt="AI Agent 3" />
        <Text fontSize="lg" fontWeight="bold">AI Agent 3</Text>
        <Text>Capabilities and use cases of AI Agent 3.</Text>
      </VStack>
    </VStack>
  </Box>
);

export default AIPage;