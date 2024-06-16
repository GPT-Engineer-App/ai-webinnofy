import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h2" size="xl" color="brand.700">About Webinnofy</Heading>
      <Text fontSize="lg">
        Webinnofy envisions a future where businesses of all sizes can effortlessly harness the power of AI to create exceptional customer experiences. We believe that conversational commerce, powered by intelligent and empathetic AI agents, is the key to unlocking unprecedented growth and building lasting customer relationships.
      </Text>
      <Text fontSize="lg">
        Our mission is to democratize access to cutting-edge AI technology, making it easy for businesses to deploy, customize, and manage AI agents that transform their customer interactions.
      </Text>
      <Text fontSize="lg">
        We strive to empower businesses to:
        <ul>
          <li>Automate conversations: Free up human teams from repetitive tasks and provide 24/7 support.</li>
          <li>Personalize interactions: Tailor conversations to individual customer needs and preferences.</li>
          <li>Gain valuable insights: Understand customer behavior and optimize strategies for maximum impact.</li>
        </ul>
      </Text>
    </VStack>
  </Box>
);

export default About;