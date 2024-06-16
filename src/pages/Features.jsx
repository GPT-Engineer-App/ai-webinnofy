import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Features = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h2" size="xl" color="brand.700">Features</Heading>
      <Text fontSize="lg">
        Webinnofy offers a unique value proposition to its users:
      </Text>
      <ul>
        <li>Cutting-edge AI technology: Access to the most advanced AI models, including GPT-4, Gemini Advanced, Opus, and Llama 3.</li>
        <li>Easy-to-use platform: Deploy, customize, and manage AI agents without requiring technical expertise.</li>
        <li>Exceptional customer support: Get the help you need, when you need it, from our team of AI experts.</li>
        <li>Affordable pricing: Choose a plan that fits your budget and business needs.</li>
      </ul>
    </VStack>
  </Box>
);

export default Features;